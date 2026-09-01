# Auditoria de rastreamento em produção (`app5minutosdefe.lovable.app`) — nada editado, nada comprado

Playwright, mobile 390x844, entrada com `?utm_source=qa&utm_medium=audit&fbclid=TESTFBCLID`. Fluxo completo quiz -> 7 respostas -> `/resultado` -> scroll -> clique no CTA de checkout com a navegação para `perfectpay` **abortada por route interception** (nunca chegou ao checkout). Evidências: `/tmp/browser/track2/res.json`.

## Resposta direta: nenhum evento sai do navegador

**Não existe nenhum pixel ou tag de terceiros instalado no site.** Os eventos do `dataLayer` são empurrados para um array em memória e morrem ali — nada é enviado a nenhuma plataforma.

Evidências:

- Scripts carregados na página: apenas `/~flock.js`, `/assets/index-Bmw9Qdcc.js` e 1 script inline de 799 caracteres. **Nenhum** `connect.facebook.net`, `googletagmanager.com`, `google-analytics.com`, `gtag/js`, `analytics.tiktok.com`, Clarity, Hotjar, Segment, Amplitude, Mixpanel, DoubleClick, LinkedIn, Pinterest, Kwai, Taboola ou Outbrain.
- Globais no `window`: `fbq: undefined`, `gtag: undefined`, `ga: undefined`, `ttq: undefined`, nenhuma chave de container GTM.
- Nenhum snippet inline contendo `fbq(`, `gtag(`, `GTM-`, `G-XXXXXX` ou `ttq.`.
- Requisições de rede que casam com padrões de tracker durante todo o fluxo: **0**.
- Hosts de terceiros contactados no fluxo inteiro: só `cdn.gpteng.co` (script do badge/editor Lovable) e `go.perfectpay.com.br` (o CTA, abortado). Cookies: apenas `__dpl` (infra de hosting).
- `window.dataLayer` **não existe** no carregamento inicial (`dataLayerLen: "undefined"`); ele só é criado pelo próprio código do app na primeira chamada de `track()` (`src/lib/jornada.ts:389` cria o array se não existir). Isso confirma que não há GTM pré-inicializando o dataLayer — sem GTM, um `dataLayer.push` não tem consumidor.

## Eventos observados no dataLayer local

Sequência real capturada, na ordem:

1. `quiz_start`
2. `quiz_answer` x7, cada um com `question` (`sentir`, `situacao`, `orar`, `momento`, `depois`, `formato`, `entrega`), `answer` e `step` 1..7
3. `quiz_complete` com as 7 respostas como propriedades
4. `result_view` com `has_answers: true`

**`offer_view` não disparou** nesta sessão. Ele existe no código (`SalesPage.tsx:386`) atrás de um `IntersectionObserver`, e meu scroll parou na metade da página — provavelmente o alvo não entrou em viewport. Não é um defeito confirmado, mas também não foi possível confirmá-lo funcionando.

**`checkout_click` não foi registrado** no dataLayer verificável. Ele existe no código (`shared.tsx:90`, no `onClick` do CTA), porém o clique inicia a navegação para o PerfectPay imediatamente; no meu teste a navegação abortada levou a página para `chrome-error://chromewebdata/` e o contexto JS foi destruído, retornando `dataLayer` vazio. Em uso real esse push acontece, mas **é destruído pela navegação antes que qualquer coisa possa consumi-lo** — que é exatamente o problema abaixo.

Existe ainda `result_cta_click` (`ResultHeader.tsx:33`), também apenas local.

## Achados

### P0 — Zero rastreamento de conversão: não é possível otimizar tráfego pago
Sem Meta Pixel, sem GA4/GTM, sem TikTok pixel, não há `PageView`, `ViewContent`, `InitiateCheckout` nem `Purchase`. Consequências práticas: nenhuma campanha paga consegue otimizar por conversão, nenhum público personalizado ou remarketing pode ser construído, e não há como medir taxa de conclusão do quiz nem custo por venda. Para um funil cuja única função é vender tráfego frio, isso é a falha mais grave do projeto hoje.

### P0 — `checkout_click` é perdido por design mesmo que um pixel seja instalado
O CTA é um `<a>` que navega na mesma aba; o `dataLayer.push` acontece no mesmo tick da navegação. Sem GTM/pixel presente, nada consome; **com** GTM instalado depois, o container ainda pode não conseguir enviar a request antes do unload. Qualquer implementação futura precisa de `fbq`/`gtag` com transporte por `sendBeacon`, ou de um pequeno atraso/`event_callback` antes de navegar.

### P1 — `fbclid` é capturado e repassado, mas sem pixel não serve de nada
O `sessionStorage` guarda `cinco_min_utms = "utm_source=qa&utm_medium=audit&fbclid=TESTFBCLID"` e o CTA final leva tudo para o checkout: `https://go.perfectpay.com.br/PPU38CQFP8D?utm_source=qa&utm_medium=audit&fbclid=TESTFBCLID`. A infraestrutura de atribuição está pronta e correta — só falta o pixel do lado do site e a configuração de conversão do lado da PerfectPay para fechar o ciclo.

### P2 — `offer_view` não confirmado em produção
O evento depende de `IntersectionObserver` sobre um nó específico da seção de oferta e não disparou no meu percurso. Vale confirmar com scroll completo até a seção de preço antes de considerá-lo confiável.

### P3 — Script de terceiro do editor Lovable presente em produção
`cdn.gpteng.co` é carregado no site publicado (o mesmo badge "Edit with" já registrado antes). É um request externo em toda visita paga, sem função para o comprador.

Nada foi editado, nenhuma compra iniciada, nada publicado.
