import { createFileRoute, Link } from "@tanstack/react-router";

import { BrandLogo } from "@/components/jornada/shared";

const title = "Página não encontrada — 5 Minutos de Fé";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title },
      {
        name: "description",
        content:
          "Este endereço não existe. Volte ao início e faça o seu Mapa de Fé em cerca de 1 minuto.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: "Este endereço não existe no 5 Minutos de Fé." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-16">
      <div className="mx-auto max-w-lg text-center">
        <div className="flex justify-center">
          <BrandLogo width={240} eager />
        </div>
        <p className="eyebrow mt-8 block">Página não encontrada</p>
        <h1 className="mt-4 text-3xl leading-tight text-ivory sm:text-4xl">
          Este endereço não existe mais
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-sand sm:text-base">
          Talvez o link tenha mudado. Você pode voltar ao início e fazer o seu Mapa de Fé em cerca de
          1 minuto.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <Link
            to="/"
            className="cta-gold inline-flex min-h-14 items-center justify-center rounded-2xl px-7 py-4 text-sm font-bold tracking-[0.06em]"
          >
            FAZER MEU MAPA DE FÉ
          </Link>
          <a
            href="mailto:5minutosdefeapp@gmail.com"
            className="text-xs text-sand underline decoration-gold/40 underline-offset-4"
          >
            Falar com o suporte
          </a>
        </div>
      </div>
    </main>
  );
}
