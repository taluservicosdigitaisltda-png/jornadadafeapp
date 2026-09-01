import { createFileRoute } from "@tanstack/react-router";

import { ResultHeader } from "@/components/jornada/ResultHeader";
import { Footer, SalesPage } from "@/components/jornada/SalesPage";

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
  const [empty, setEmpty] = useState(false);

  return (
    <>
      <ResultHeader onEmpty={setEmpty} />
      {empty ? null : (
        <main>
          <SalesPage />
        </main>
      )}
      <Footer />
    </>
  );
}
