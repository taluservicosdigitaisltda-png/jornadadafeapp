# Auditoria do checkout real PerfectPay (`PPU38CQFP8D`) — sem preencher, sem enviar, sem PIX

Playwright, mobile 390x844 (UA iPhone) e desktop 1280x1800, com `?utm_source=qa&utm_medium=audit`. Nenhum campo preenchido, nenhum formulário enviado, nenhum PIX gerado, nada alterado no projeto. Screenshots em `/tmp/browser/co/mobile.png` e `desktop.png`.

## Redirecionamento

`https://go.perfectpay.com.br/PPU38CQFP8D` -> 200 em **`https://checkout.perfectpay.com.br/pay/PPU38CQFP8D?utm_source=qa&utm_medium=audit`** (1 salto, mesma organização). **As UTMs sobrevivem ao redirecionamento** — o rastreamento do funil chega ao checkout.

## O que confere com a landing

- **Produto**: "5 minutos de Fé — Aplicativo de Orações e Reflexões guiadas", vendedor "App 5 minutos de Fé". Sem qualquer resquício de "Jornada da Fé" ou de curso/upsell.
- **Preço e moeda**: R$ 19,00, "Total Hoje: R$ 19,00", BRL. Bate exatamente com a landing.
- **Meios de pagamento**: Cartão de Crédito, Pix e PicPay. Bandeiras: Visa, Mastercard, Elo, Amex, Diners, Hipercard, Discover, UnionPay, JCB, Maestro, troy.
- **Entrega**: "Produto digital, os dados para acesso serão enviados por email" — coerente com a promessa da página.
- **Imagem do produto**: capa 300x300 com a moldura dourada, a arte "Orações guiadas e reflexões diárias" e o selo "APP APROVADO" — mesma identidade da landing (preto/dourado, foto realista).
- **Confiança**: "Pagamento 100% seguro, criptografia 128 bits", selo "COMPRA 100% SEGURA", logo PerfectPay, e-mail de suporte `5minutosdefeapp@gmail.com`, botão WhatsApp "FALAR COM NOSSA EQUIPE", Termos de Compra e de Privacidade.
- **Campos obrigatórios**: Nome completo, E-mail, Telefone, método de pagamento e (no cartão) número, mês, ano, CVV, nome impresso, CPF/CNPJ. Sem pedido de endereço, sem data de nascimento, sem confirmação de e-mail — atrito baixo.
- **Responsividade**: sem overflow horizontal em nenhum dos dois (scrollWidth = clientWidth: 390 e 1280). Layout de 1 coluna no mobile, 3 colunas no desktop. Sem quebras.
- **Network**: zero respostas >= 400.

## Achados

### P1 — Parcelamento em até 3x contradiz "pagamento único" da landing
O checkout oferece **1x R$ 19,00 / 2x R$ 9,93 / 3x R$ 6,72**, com rótulo "Parcele em até 3X no cartão" e nota "Taxa de 2,99% a.m.". A landing e o FAQ afirmam "pagamento único, sem mensalidade". Tecnicamente não é assinatura, mas quem parcela paga R$ 19,86 (2x) ou R$ 20,16 (3x) — acima do preço anunciado. Duas saídas: desativar o parcelamento no produto PerfectPay, ou ajustar o FAQ para "pagamento único, com opção de parcelar em até 3x no cartão (com juros)".

### P1 — Garantia de 7 dias não aparece em nenhum lugar do checkout
A landing tem um selo dedicado de garantia de 7 dias, e o texto do checkout não menciona garantia, reembolso ou prazo de desistência. O comprador perde exatamente o argumento que reduz o risco no momento da decisão. A PerfectPay permite exibir o selo de garantia nas configurações do checkout — vale ativar.

### P2 — Widget Reclame Aqui falha e não renderiza o selo de reputação
Console (mobile e desktop, idêntico): `Access to XMLHttpRequest at 'https://api.reclameaqui.com.br/embed-reputation/...' from origin 'https://checkout.perfectpay.com.br' has been blocked` + `RA-Reputation: bad response from server` + `ERR_FAILED`. É um erro do lado da PerfectPay (CORS), não do seu funil, mas o efeito prático é que o selo de reputação previsto na página simplesmente não aparece — menos prova social do que o layout esperava. Fora do seu controle; só registre.

### P2 — Nenhuma prova social ou reforço de valor no checkout
Além dos selos de segurança, não há bullet de conteúdo, contagem de orações, "acesso vitalício", nem qualquer recapitulação do que está incluído. No mobile, os 2.729px de página são só formulário. A PerfectPay permite adicionar descrição/bullets no resumo da compra — hoje o resumo repete o nome do produto três vezes e nada mais.

### P3 — Nome do produto escrito como "5 minutos de Fé" (m minúsculo)
Na landing, no logo oficial e nos metadados a marca é **"5 Minutos de Fé"**. No título da página, no cabeçalho "VOCÊ ESTÁ ADQUIRINDO" e no resumo, a PerfectPay mostra "5 minutos de Fé". Inconsistência pequena de capitalização da marca, corrigível no cadastro do produto.

### P3 — Imagens sem texto alternativo e título de página longo
Todas as `img` do checkout (bandeiras, capa do produto) têm `alt=""`; o `<title>` tem 95 caracteres com o nome do produto duplicado. Ambos são da plataforma, não editáveis por você — registrado apenas para completude.

Nada foi comprado, nenhum dado inserido, nenhum arquivo do projeto alterado.
