# Auditoria QA — Aplicativo real `cinco-minutos-fe.base44.app` (visitante, sem login)

Ambiente: Chromium (Playwright), 390x844 e 1280x1800. Nenhuma conta criada, nenhum login, nenhum formulário enviado. Nenhum arquivo do projeto foi alterado.
Rotas visitadas: `/`, `/login`, `/register` (preenchido sem enviar), `/forgot-password`, `/home`, `/oracoes`, `/jornada`, `/diario`, `/perfil`, `/termos`, `/privacidade`, `/suporte`, `/reembolso`, rota inexistente, `manifest.json`.

## O que está correto (evidência)

- Carregamento: HTTP 200, DOMContentLoaded em 0,84 s; `/` redireciona para `/login`. Sem overflow horizontal (390/1280 = scrollWidth idêntico ao clientWidth).
- Branding coerente com a página de vendas: mesma logo oficial (1200x381, exibida 176x56 sem distorção), fundo #090705, dourado envelhecido, título serifado, `theme-color: #090705`, `lang="pt-BR"`.
- Copy alinhada e sem promessas indevidas: "Bem-vindo de volta", "Crie sua conta / Comece sua jornada de fé hoje", e o mesmo disclaimer da landing (sem cura/milagre, sem endosso de padres/pastores) em login, cadastro e recuperação de senha.
- Console e rede limpos no carregamento inicial (0 erros, 0 respostas >=400 na primeira carga).
- Rotas protegidas realmente protegidas: `/jornada`, `/diario`, `/perfil` redirecionam para `/login` sem vazar conteúdo.
- Cadastro bem formado: campos e-mail + senha + confirmar senha, todos `required`, com `autocomplete="email"` e `new-password`, labels associados; Google OAuth disponível. Recuperação de senha existe (`/forgot-password` -> "Enviaremos um link para redefinição").
- PWA detectável: `manifest.json` válido (`display: standalone`, `start_url: /`, `background_color/theme_color #090705`, `lang pt-BR`, categorias), mais `apple-mobile-web-app-capable` e `apple-mobile-web-app-title` — instalável na tela inicial, como o FAQ da venda promete.

## Achados por severidade

### P1 — Badge "Edit with Base44" visível para o comprador
Em mobile e desktop há um selo fixo laranja no canto inferior direito com "Edit with Base44" (+ imagem `builder-assets/symbol-orange.png` e logo Base44 no DOM). Em 390px ele **cobre parte do disclaimer legal** do rodapé. Para um produto pago a R$ 19,00 vendido como aplicativo premium, isso expõe a plataforma de construção e destoa completamente da estética da landing. Deve ser removido nas configurações do app.

### P1 — Ícones do PWA usam a logo 1200x381 declarada como 192x192 e 512x512
`manifest.json` declara os dois ícones apontando para `5-minutos-de-fe-logo.png` (natural 1200x381) com `sizes: "192x192"` / `"512x512"` e `purpose: "any maskable"`. Sendo horizontal e não quadrada, o ícone instalado na tela inicial será esmagado ou cortado — e como `maskable`, a moldura dourada será recortada. O mesmo arquivo está como `rel=icon` (favicon).

### P1 — Nenhum caminho para quem acabou de comprar
Vindo do checkout, o comprador cai em "Bem-vindo de volta / Entre na sua conta para continuar". Não há nenhuma menção a compra aprovada, a "primeiro acesso", nem link para suporte na tela de login. A landing diz que as instruções chegam por e-mail; se o e-mail atrasar ou cair em spam, o comprador não tem nenhuma saída dentro do app. Maior ponto de abandono/pedido de reembolso do fluxo.

### P2 — Termos, privacidade, reembolso e suporte não existem no app (redirecionam para login)
`/termos`, `/privacidade`, `/suporte` e `/reembolso` no domínio do app redirecionam para `/login`. Ou seja: nenhum documento legal ou canal de suporte é acessível dentro do produto sem conta — nem antes de criar conta. As telas de login/cadastro também não linkam nenhum desses documentos.

### P2 — Cadastro sem aceite de termos e sem regra de senha visível
A tela de criar conta não tem checkbox nem texto de aceite de Termos/Privacidade, não informa requisito mínimo de senha, não tem indicador de força e não tem botão de mostrar/ocultar senha (o campo "Confirmar senha" aumenta o atrito sem feedback). Preenchi os três campos sem enviar: o botão "Criar conta" fica habilitado, sem validação exibida.

### P2 — Página 404 em inglês e fora da identidade
`/home`, `/oracoes` e qualquer rota inválida mostram "404 — Page Not Found / The page "x" could not be found in this application. / Go Home", texto em inglês, layout genérico e com o badge Base44. Rompe o idioma e a marca do produto.

### P2 — Título/descrição do app divergem da landing
O app usa description "Uma jornada diária de orações guiadas, reflexões bíblicas e momentos de paz. Uma Palavra. Uma oração. Cinco minutos com Deus." e `og:image` com **hero v3**, enquanto a landing usa hero v4 e outra descrição. Compartilhamentos do app e da venda mostram imagens diferentes do mesmo produto.

### P3 — 401 repetidos em `entities/User/me` para visitante anônimo
Navegando entre rotas como visitante, o app dispara 3x `GET /api/apps/.../entities/User/me` -> 401, gerando erros no console. Não bloqueia nada, mas é ruído e requisição desnecessária antes de haver sessão.

### P3 — Tela de login com muito espaço vazio em desktop
Em 1280px o card fica isolado no centro de uma tela quase toda preta (conteúdo ocupa ~cerca de 800px de altura útil em 1800px de viewport), sem nenhum elemento de marca, frase de posicionamento ou imagem — bem menos premium que a landing. Não é bug, é oportunidade de consistência.

## Comparação com a promessa da página de vendas

Verificável sem login: identidade visual, tom, disclaimers, acesso pelo navegador com atalho na tela inicial (PWA) e "sem loja de aplicativos" — **tudo confere**.
**Não verificável sem credenciais** (registrado como pendente, não como falha): biblioteca de orações narradas, reflexões por tema, jornada de 28 dias, favoritos, histórico/progresso, diário privado, transcrições e lembretes opcionais. Todas as rotas internas exigem sessão. Para fechar essa parte da auditoria eu precisaria de um acesso de teste já existente — não crio conta por conta própria.

Nada foi editado, nenhuma conta criada, nenhum formulário enviado e nada publicado.
