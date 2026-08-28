import { createFileRoute } from "@tanstack/react-router";

import { Quiz } from "@/components/jornada/Quiz";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Encontre seus 5 Minutos de Fé" },
      {
        name: "description",
        content: "Responda três perguntas rápidas e encontre uma oração guiada para o seu momento de hoje.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: QuizQuestionsPage,
});

function QuizQuestionsPage() {
  return <Quiz initiallyStarted />;
}
