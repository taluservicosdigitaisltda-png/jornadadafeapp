import { createFileRoute } from "@tanstack/react-router";

import { ResultHeader } from "@/components/jornada/ResultHeader";
import { Footer, SalesPage } from "@/components/jornada/SalesPage";
const title = "Sua recomendação — 5 Minutos de Fé";
const description =
  "Veja sua recomendação e conheça o aplicativo 5 Minutos de Fé, com orações narradas e reflexões bíblicas curtas.";

export const Route = createFileRoute("/resultado")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, follow" },
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
