import { Link, createFileRoute } from "@tanstack/react-router";

import { BrandLogo, container } from "@/components/jornada/shared";

const title = "Página não encontrada — 5 Minutos de Fé";
const description =
  "O endereço acessado não existe ou foi alterado. Volte ao início para fazer seu Mapa de Fé.";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <main
      className={`${container} flex min-h-screen flex-col items-center justify-center py-16 text-center`}
    >
      <BrandLogo width={260} align="center" eager />
      <p className="eyebrow mt-9 block">Erro 404</p>
      <h1 className="mt-4 text-2xl text-ivory sm:text-3xl">Página não encontrada</h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-sand">
        O endereço que você tentou acessar não existe ou foi alterado.
      </p>
      <Link
        to="/"
        className="cta-gold mt-8 inline-flex min-h-14 items-center justify-center rounded-2xl px-7 py-4 text-sm font-bold tracking-[0.08em]"
      >
        VOLTAR AO INÍCIO
      </Link>
    </main>
  );
}
