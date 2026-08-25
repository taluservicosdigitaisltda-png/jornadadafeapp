import { createFileRoute } from "@tanstack/react-router";

import { Faq } from "@/components/jornada/Faq";
import {
  Benefits,
  ConfirmationBar,
  Experience,
  FinalOffer,
  Footer,
  Guarantee,
  Hero,
} from "@/components/jornada/Sections";
import ogAsset from "@/assets/og.png.asset.json";

const title = "Obrigado — Jornada da Fé";
const description =
  "Compra aprovada. Conheça o Aplicativo Jornada da Fé com orações e reflexões narradas.";
const ogImage = `https://id-preview--47939a7f-a5a6-4cfe-b706-52b18e0db178.lovable.app${ogAsset.url}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <>
      <ConfirmationBar />
      <main>
        <Hero />
        <Benefits />
        <Experience />
        <Guarantee />
        <FinalOffer />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
