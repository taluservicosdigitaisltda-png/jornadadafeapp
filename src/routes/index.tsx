import { createFileRoute } from "@tanstack/react-router";

import { Quiz } from "@/components/jornada/Quiz";
const title = "Sua Pausa de Fé — 5 minutos com Deus";
const description =
  "Responda três perguntas rápidas e encontre uma pausa de cinco minutos com Palavra, oração guiada e reflexão para o seu momento.";

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
