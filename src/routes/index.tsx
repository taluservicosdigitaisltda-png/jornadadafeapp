import { createFileRoute } from "@tanstack/react-router";

import { Quiz } from "@/components/jornada/Quiz";

const title = "5 Minutos de Fé — Orações guiadas e reflexões para o seu dia";
const description =
  "Encontre orações guiadas e reflexões para diferentes momentos da vida em uma experiência devocional de aproximadamente 5 minutos por dia.";
const ogImage = "https://app5minutosdefe.lovable.app/images/app-celular-hero-v3.webp";
const url = "https://app5minutosdefe.lovable.app/";

export const Route = createFileRoute("/")({
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
  component: QuizPage,
});

function QuizPage() {
  return <Quiz />;
}
