import { createFileRoute } from "@tanstack/react-router";

import { Quiz } from "@/components/jornada/Quiz";
const title = "5 Minutos de Fé — Palavra e oração para o seu dia";
const description =
  "Responda três perguntas rápidas e encontre uma oração guiada de aproximadamente cinco minutos para o momento que você está vivendo.";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => ({
    iniciar: search.iniciar === "1" || search.iniciar === 1 || search.iniciar === true,
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: QuizPage,
});

function QuizPage() {
  const { iniciar } = Route.useSearch();
  return <Quiz initiallyStarted={iniciar} />;
}
