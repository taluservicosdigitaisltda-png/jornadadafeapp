import { createFileRoute, Link } from "@tanstack/react-router";

import { BrandLogo, ConfirmBadge } from "@/components/jornada/shared";
import { BRAND } from "@/lib/jornada";

const title = "Obrigado — 5 Minutos de Fé";
const description =
  "Seu acesso ao 5 Minutos de Fé está sendo preparado. Assim que o pagamento for confirmado, você poderá criar seu primeiro acesso com o mesmo e-mail da compra.";
const url = "https://app5minutosdefe.lovable.app/obrigado";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: ObrigadoPage,
});

function ObrigadoPage() {
  return (
    <main className="min-h-screen px-5 py-8 sm:py-12">
      <div className="mx-auto w-full max-w-[720px]">
        <div className="flex flex-col items-center text-center">
          <BrandLogo width={280} align="center" eager className="sm:hidden" />
          <BrandLogo width={330} align="center" eager className="hidden sm:block" />

          <p className="eyebrow mt-8 sm:mt-10">Seu acesso ao {BRAND}</p>
          <h1 className="mt-4 max-w-xl font-display text-[1.75rem] leading-tight text-ivory sm:text-4xl">
            Seu momento com Deus está quase pronto.
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-sand sm:text-base">
            Recebemos o seu pedido. Assim que o pagamento for confirmado, seu acesso será reconhecido
            pelo mesmo e-mail usado na compra.
          </p>
        </div>

        <section
          className="mt-8 rounded-[1.75rem] border p-6 sm:mt-10 sm:p-8"
          style={{
            borderColor: "oklch(0.76 0.106 79 / 22%)",
            background: "var(--gradient-brown)",
            boxShadow: "var(--shadow-deep)",
          }}
          aria-label="Próximos passos"
        >
          <h2 className="text-center font-display text-lg text-ivory sm:text-xl">
            O que fazer agora
          </h2>

          <ol className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
            <Step index={1} title="Use o mesmo e-mail da compra">
              <p className="text-sm leading-relaxed text-sand">
                O acesso será vinculado automaticamente ao e-mail informado no checkout da
                PerfectPay. Use esse mesmo e-mail ao criar sua conta.
              </p>
            </Step>

            <Step index={2} title="Crie seu primeiro acesso">
              <p className="text-sm leading-relaxed text-sand">
                Clique no botão abaixo para definir sua senha e entrar no aplicativo pela primeira
                vez.
              </p>
              <a
                href="https://cinco-minutos-fe.base44.app/register"
                className="cta-gold mt-4 inline-flex min-h-14 w-full items-center justify-center rounded-2xl px-6 py-4 text-center text-sm font-bold tracking-[0.06em] sm:text-base"
              >
                CRIAR MEU PRIMEIRO ACESSO
              </a>
            </Step>

            <Step index={3} title="Já criou sua conta?">
              <p className="text-sm leading-relaxed text-sand">
                Se você já fez o cadastro, acesse diretamente com seu e-mail e senha.
              </p>
              <a
                href="https://cinco-minutos-fe.base44.app/login"
                className="mt-4 inline-flex min-h-14 w-full items-center justify-center rounded-2xl border px-6 py-4 text-center text-sm font-bold tracking-[0.06em] text-ivory transition-colors hover:bg-white/5 sm:text-base"
                style={{ borderColor: "oklch(0.76 0.106 79 / 35%)" }}
              >
                ENTRAR NO APLICATIVO
              </a>
            </Step>
          </ol>
        </section>

        <div
          className="mt-6 flex items-start gap-4 rounded-2xl border p-4 sm:mt-8 sm:p-5"
          style={{
            borderColor: "oklch(0.83 0.129 160 / 35%)",
            background: "oklch(0.16 0.02 60 / 70%)",
          }}
          role="note"
        >
          <ConfirmBadge size="md" />
          <p className="text-sm leading-relaxed text-sand sm:text-base">
            Se o pagamento acabou de ser aprovado e o conteúdo ainda aparecer bloqueado, aguarde
            alguns instantes e entre novamente com o mesmo e-mail da compra.
          </p>
        </div>

        <section className="mt-8 text-center sm:mt-10">
          <p className="text-sm text-sand">Se precisar, fale com a gente.</p>
          <a
            href="mailto:5minutosdefeapp@gmail.com"
            className="mt-2 inline-block text-base font-semibold text-gold-light underline decoration-gold/40 underline-offset-4 sm:text-lg"
          >
            5minutosdefeapp@gmail.com
          </a>
        </section>

        <footer className="mt-10 border-t pt-8 text-center sm:mt-12">
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-sand">
            <Link to="/suporte" className="underline decoration-gold/30 underline-offset-4 hover:text-gold-light">
              Suporte
            </Link>
            <Link to="/termos" className="underline decoration-gold/30 underline-offset-4 hover:text-gold-light">
              Termos de uso
            </Link>
            <Link to="/privacidade" className="underline decoration-gold/30 underline-offset-4 hover:text-gold-light">
              Privacidade
            </Link>
            <Link to="/reembolso" className="underline decoration-gold/30 underline-offset-4 hover:text-gold-light">
              Reembolso
            </Link>
          </nav>
          <p className="mt-5 text-xs text-sand/70">
            © {new Date().getFullYear()} {BRAND}. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </main>
  );
}

function Step({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span
        className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-bold text-ink"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden="true"
      >
        {index}
      </span>
      <div className="flex-1">
        <h3 className="font-display text-base text-ivory sm:text-lg">{title}</h3>
        {children}
      </div>
    </li>
  );
}
