import { BRAND, type Profile } from "@/lib/jornada";

import { container } from "./shared";

/**
 * Emotional bridge between the personalized reading and the sales page.
 * Reuses the profile image so the atmosphere matches the visitor's moment.
 */
export function EmotionalBridge({ profile }: { profile: Profile }) {
  return (
    <section
      className="relative overflow-hidden border-y py-12 lg:py-16"
      style={{ borderColor: "oklch(0.76 0.106 79 / 22%)" }}
      aria-labelledby="ponte-emocional-titulo"
    >
      <div className={`${container} grid items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14`}>
        <figure
          className="overflow-hidden rounded-[24px] border p-2"
          style={{
            borderColor: "oklch(0.76 0.106 79 / 32%)",
            background: "var(--gradient-brown)",
            boxShadow: "var(--shadow-deep)",
          }}
        >
          <img
            src="/images/ponte-fe-silencio-v2.webp"
            alt="Mulher sentada em um banco de igreja em oração silenciosa, olhos fechados e mãos unidas, com uma Bíblia aberta ao lado, sob luz dourada de vitrais"
            width={1280}
            height={853}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-[18px]"
          />
        </figure>

        <div>
          <h2
            id="ponte-emocional-titulo"
            className="max-w-2xl text-[1.55rem] leading-snug text-ivory sm:text-3xl lg:text-[2.2rem]"
          >
            É justamente para momentos como este que o {BRAND} existe.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-sand sm:text-lg">
            Você não precisa encontrar as palavras. Só precisa apertar o play e separar alguns
            minutos para estar com Deus.
          </p>
        </div>
      </div>
    </section>
  );
}
