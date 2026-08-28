import { createFileRoute } from "@tanstack/react-router";

import { Quiz } from "@/components/jornada/Quiz";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Quiz de fé — Jornada da Fé" },
      {
        name: "description",
        content: "Responda quatro perguntas rápidas e receba uma sugestão para começar.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: QuizQuestionsPage,
});

function QuizQuestionsPage() {
  return <Quiz initiallyStarted />;
}
