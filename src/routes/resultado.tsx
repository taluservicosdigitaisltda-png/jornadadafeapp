import { createFileRoute } from "@tanstack/react-router";

import { ResultHeader } from "@/components/jornada/ResultHeader";
import { Footer, SalesPage } from "@/components/jornada/SalesPage";
import ogAsset from "@/assets/og.png.asset.json";

const title = "Seu caminho recomendado — Aplicativo Jornada da Fé";
const description =
  "Veja o caminho devocional sugerido para o seu momento e conheça o Aplicativo Jornada da Fé: orações narradas, reflexões bíblicas e jornada de 28 dias.";
const ogImage = `https://jornadadafeapp.lovable.app${ogAsset.url}`;

export const Route = createFileRoute("/resultado")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
  }),
  component: ResultPage,
});

function ResultPage() {
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
