import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { EmotionalBridge } from "@/components/jornada/EmotionalBridge";
import { ResultHeader } from "@/components/jornada/ResultHeader";
import { Footer, SalesPage } from "@/components/jornada/SalesPage";
import { BrandLogo, container } from "@/components/jornada/shared";
import { hasAnswers, loadAnswers, profileFor, type Profile } from "@/lib/jornada";


const title = "Sua leitura de hoje — 5 Minutos de Fé";
const description =
  "Veja a leitura devocional do seu momento, com uma oração e uma reflexão indicadas, e conheça o aplicativo 5 Minutos de Fé.";
const ogImage = "https://app5minutosdefe.lovable.app/images/app-celular-hero-v4.webp";
const url = "https://app5minutosdefe.lovable.app/resultado";

export const Route = createFileRoute("/resultado")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: ResultPage,
});

function ResultPage() {
  const [state, setState] = useState<"loading" | "empty" | "ready">("loading");

  useEffect(() => {
    setState(hasAnswers(loadAnswers()) ? "ready" : "empty");
  }, []);

  if (state !== "ready") {
    return (
      <header className={`${container} py-12 lg:py-16`} data-state={state}>
        <BrandLogo width={280} eager />
        <p className="eyebrow mt-8 block">Sua leitura de hoje</p>
        <h1 className="mt-4 max-w-2xl text-[1.7rem] leading-tight text-ivory sm:text-3xl">
          Faça seu Mapa de Fé para ver a leitura do seu momento
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-sand">
          {state === "empty"
            ? "Ainda não encontramos suas respostas neste dispositivo. São 7 perguntas rápidas, sem cadastro, e a leitura aparece em seguida."
            : "Carregando sua leitura..."}
        </p>
        {state === "empty" ? (
          <Link
            to="/"
            className="cta-gold mt-8 inline-flex min-h-14 items-center justify-center rounded-2xl px-7 py-4 text-sm font-bold tracking-[0.06em] sm:text-base"
          >
            FAZER MEU MAPA DE FÉ
          </Link>
        ) : null}
      </header>
    );
  }

  return (
    <>
      <ResultHeader />
      <main>
        <SalesPage />
      </main>
      <Footer />
    </>
  );
}

