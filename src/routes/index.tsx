import { createFileRoute } from "@tanstack/react-router";

import { Quiz } from "@/components/jornada/Quiz";
import ogAsset from "@/assets/og.png.asset.json";

const title = "Quiz de fé — Jornada da Fé";
const description =
  "Responda quatro perguntas rápidas e descubra uma sugestão de oração e reflexão para o seu momento.";
const ogImage = `https://jornadadafeapp.lovable.app${ogAsset.url}`;

export const Route = createFileRoute("/")({
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
  component: Quiz,
});
