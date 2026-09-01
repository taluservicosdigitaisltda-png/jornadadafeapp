# Auditoria QA — Funil 5 Minutos de Fé (somente diagnóstico, nenhum arquivo alterado)

Ambiente testado: preview em execução, Chromium (Playwright), viewports 390x844 (mobile) e 1280x1800 (desktop).
Percurso executado: `/` (quiz) -> 7 perguntas -> `/resultado` -> scroll completo da página de vendas -> CTAs -> FAQ -> `/privacidade`, `/termos`, `/reembolso`, `/suporte`, rota inexistente. 3 combinações de respostas + resultado sem respostas.

## O que está correto (evidência)

- Checkout: os 3 CTAs de compra apontam para `https://go.perfectpay.com.br/PPU38CQFP8D?utm_source=qa&utm_campaign=teste` — URL certa e UTMs preservadas (entrei em `/?utm_source=qa&utm_campaign=teste`).
- Armazenamento: `sessionStorage` gravou `cinco_min_utms` e `cinco_min_quiz_answers` com as 7 respostas.
- Sem overflow horizontal: `scrollWidth == clientWidth` em 390px e 1280px, no quiz e no resultado.
- Console: zero erros e zero warnings nos dois viewports.
- Logo oficial renderiza em proporção correta (natural 1200x381; medidos 280x89, 250x79, 230x73 — sem distorção) no quiz, resultado, hero, encerramento e rodapé.
- Imagens: nenhuma distorcida (razão natural vs. exibida dentro de 3%), todas com `alt`, hero v4 (`app-celular-hero-v4.webp`, 1024x1280) reto e legível.
- Acessibilidade básica: `lang="pt-BR"`, FAQ com `aria-expanded`/`aria-controls` funcionando (abri "Existe garantia?"), progressbar com `aria-valuenow`, nenhum botão sem rótulo, nenhum alvo de toque abaixo de 40px de altura.
- SEO: títulos/descrições únicos por rota, canonical self-referente, OG/Twitter completos, 4 páginas legais com H1 e meta próprios.
- Rotas legais: todas 200, sem overflow. "Refazer o quiz" limpa as respostas e volta para `/` (sessionStorage sem `cinco_min_quiz_answers`).
- Personalização coerente em 3 combinações:
  - mente não para / decisão / não sei o que dizer / ao acordar / mais calma -> **Paz e desacelerar**, "Oração para acalmar o coração".
  - medo / família / não mantenho rotina / correria / mais esperança -> **Esperança e recomeço**, "Oração para recomeçar".
  - recomeço / futuro / só quando aperta / fim do dia / mais força -> **Esperança e recomeço**.

## Achados por severidade

### P1 — `/resultado` sem respostas entrega leitura fabricada
Acessando `/resultado` direto (sem fazer o quiz) a página exibe H1 "Sua fé pode crescer também nos dias comuns", categoria "Presença e gratidão" e o texto **"Suas respostas indicam alguém que quer estar mais perto de Deus…"** — sem existir nenhuma resposta. `profileFor` cai no fallback `profiles.presenca`. Há um `hasAnswers()` exportado em `src/lib/jornada.ts:316` que **nunca é usado**. Impacto: quebra de confiança e afirmação falsa; qualquer tráfego direto/compartilhamento cai nesse estado.

### P2 — Desempate de categoria pode contrariar a resposta mais emocional
Na combinação 2 a pessoa marcou "Estou com medo ou inseguro(a)" (confiança 3) e terminou em "Esperança e recomeço" por empate resolvido pela pergunta "depois". É defensável, mas o sinal principal (pergunta 1) não tem peso extra no desempate.

### P2 — Categoria "Direção e clareza" é de difícil acesso
Poucos pontos de "direcao" no mapa de pontuação (aparece com força só em 2 perguntas), então dificilmente vence sem respostas muito específicas. Risco de 6 perfis anunciados com 3–4 ocorrendo na prática.

### P2 — Densidade de CTA baixa para o comprimento da página
Página de resultado + vendas: **12.638px em mobile** e 9.285px em desktop, com **apenas 3 links de checkout** (hero, oferta, encerramento). Longos trechos (recursos, "para quem é", "o que está incluído", FAQ) ficam sem CTA próximo — ponto de abandono claro. Não há CTA fixo/sticky em mobile.

### P2 — Logo oficial pesa 515 KB (PNG)
`5-minutos-de-fe-logo.png` = 515.284 bytes, carregada como imagem principal do topo em todas as páginas (4 instâncias por página). Todo o resto de `public/images` soma 635 KB. É o maior custo visual do primeiro carregamento.

### P2 — Excesso de texto na leitura do resultado antes de qualquer prova visual
Resultado abre com 3 parágrafos longos + bloco de necessidades + 3 cartões antes do hero da oferta; corpo total da página tem ~8.230 caracteres. Em 390px o usuário rola ~2,5 telas de texto corrido antes de ver o app.

### P3 — Rota inexistente sem título/meta próprios
`/rota-inexistente` renderiza H1 "404" mas herda `title` e `description` da home, sem `noindex`.

### P3 — Sem `sitemap.xml`
`GET /sitemap.xml` retorna 404 (cai no HTML de erro). `robots.txt` existe e permite tudo, mas não referencia sitemap.

### P3 — Assets órfãos em `public/images`
`app-celular-hero-v3.webp` (41 KB) e `app-pausa-trabalho-v2.webp`/`app-leitura-biblia-v3.webp` referenciados apenas via `src/assets/generated-images.ts`, arquivo que não é importado pela página. Peso morto no deploy.

### P3 — Microcópia do mockup fala "Meditações diárias"
A tela do celular no hero v4 exibe "Meditações diárias para fortalecer sua alma", enquanto toda a copy do site fala em orações guiadas e reflexões. Leve desalinhamento de vocabulário na imagem principal.

### P3 — Repetição de H2 idêntico
"Oração para acalmar o coração" aparece como H2 no bloco de oração indicada e novamente na seção de demonstração — hierarquia duplicada (não bloqueia nada, só ruído semântico).

## Verificações que não encontraram problema
- Nenhuma menção a "Jornada da Fé", curso, upsell, padre ou R$ 29,90 em conteúdo visível.
- Preço consistente: R$ 19,00 • pagamento único • acesso vitalício no hero, na oferta, no encerramento e no FAQ.
- Garantia de 7 dias coerente entre seção de garantia, FAQ e `/reembolso`.
- Disclaimers presentes no quiz, no resultado e no rodapé (sem promessa de cura/milagre).
- Sem contagem regressiva, escassez artificial ou depoimento inventado.
- Jornada de 28 dias citada na página e também em `/termos` — sem contradição.

Nada foi editado e nada foi publicado.
