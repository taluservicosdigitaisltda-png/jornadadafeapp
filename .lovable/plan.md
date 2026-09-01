# Auditoria: preview vs. produção (`app5minutosdefe.lovable.app`) — nada alterado, nada publicado

Comparação automatizada (Playwright, mobile 390x844, UA iPhone) percorrendo `/?utm_source=qa&utm_medium=audit` -> 7 perguntas -> `/resultado` nos dois ambientes, com as mesmas respostas. Evidências em `/tmp/browser/prodcmp/res.json`.

## Conclusão: produção está sincronizada com o preview

| Item verificado | Preview | Produção | Status |
|---|---|---|---|
| Logo oficial | `5-minutos-de-fe-logo.png`, natural 1200x381, alt "5 Minutos de Fé" | idêntico (mesmo asset `assets-v1/f2c9b465…`) | OK |
| Quiz de 7 perguntas | 7 telas, progresso "1 / 7" … "7 / 7" | idêntico, mesmas opções na mesma ordem | OK |
| Hero v4 | `app-celular-hero-v4.webp` | idêntico | OK |
| Preço R$ 19,00 | 4 ocorrências, nenhum outro valor | idêntico | OK |
| Checkout | `https://go.perfectpay.com.br/PPU38CQFP8D` em 3 links, UTMs preservadas (`?utm_source=qa&utm_medium=audit`) | idêntico | OK |
| Marca antiga "Jornada da Fé" | ausente na home e no resultado | ausente | OK |
| Resultado personalizado | "Seu coração está pedindo espaço para respirar / PAZ E DESACELERAR", copy atual | idêntico caractere a caractere no trecho comparado | OK |
| SEO da home | title, description, og:title, og:description, `og:image` = hero v4, `twitter:card: summary_large_image`, canonical `https://app5minutosdefe.lovable.app/` | idêntico | OK |
| SEO de /resultado | "Sua leitura de hoje — 5 Minutos de Fé" + description própria | idêntico | OK |
| Imagens do resultado | logo, `app-oracao-noite-v2`, hero v4, `app-cafe-manha-v3` | mesma lista, mesma ordem | OK |
| Layout | scrollWidth 390 = clientWidth 390; altura 12767px | valores idênticos | OK |
| Console | 0 erros | 0 erros | OK |
| Rotas legais | — | `/privacidade`, `/termos`, `/reembolso`, `/suporte` -> 200; rota inválida -> 404 | OK |

Nenhum item da lista está desatualizado em produção. O deploy publicado corresponde ao estado atual do preview.

## Única diferença encontrada — P2 (não é conteúdo desatualizado)

Produção renderiza um badge extra "Edit with …" (selo Lovable) que aparece no DOM antes do bloco "SUA LEITURA DE HOJE"; o preview não o tem no texto capturado. O comprimento do texto da home também difere só por isso (359 vs. 348 caracteres). É o badge do Lovable no site publicado — pode ser desligado nas configurações de publicação se você não quiser essa marca sobre a página de vendas paga.

Nada foi editado e nada foi publicado.
