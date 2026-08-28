import { createFileRoute } from "@tanstack/react-router";

import { Quiz } from "@/components/jornada/Quiz";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Encontre sua Pausa de Fé" },
      {
        name: "description",
        content: "Responda três perguntas rápidas e encontre uma pausa de cinco minutos para o seu momento.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: QuizQuestionsPage,
});

function QuizQuestionsPage() {
  return <Quiz initiallyStarted />;
}
