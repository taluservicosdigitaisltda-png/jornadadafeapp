import { useRef } from "react";

import { CheckoutButton, container } from "./shared";
import { track } from "@/lib/jornada";

const SAMPLE_SRC = "/audio/v2/quando-a-mente-nao-para.mp3";

/** Real audio sample from the app, with a lightweight native player. */
export function AudioSample() {
  const played = useRef(false);

  function handlePlay() {
    if (played.current) return;
    played.current = true;
    track("audio_sample_play", { sample: "quando-a-mente-nao-para" });
  }

  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="amostra-titulo">
      <div
        className="card-premium mx-auto max-w-2xl rounded-[26px] p-6 text-center sm:p-9"
        style={{ boxShadow: "var(--shadow-gold)" }}
      >
        <p className="eyebrow">Experimente antes de entrar</p>
        <h2 id="amostra-titulo" className="mt-4 text-2xl leading-snug text-ivory sm:text-3xl">
          Ouça alguns segundos de uma oração guiada
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-sand sm:text-base">
          Amostra real do aplicativo: <span className="text-gold-light">Quando a mente não para</span>{" "}
          • cerca de 5 minutos.
        </p>

        <div
          className="mt-7 rounded-2xl border p-4"
          style={{
            borderColor: "oklch(0.76 0.106 79 / 30%)",
            background: "oklch(0.16 0.02 60 / 70%)",
          }}
        >
          <audio
            controls
            preload="none"
            src={SAMPLE_SRC}
            onPlay={handlePlay}
            className="w-full"
            aria-label="Amostra real de oração guiada: Quando a mente não para"
          >
            Seu navegador não suporta o player de áudio.
          </audio>
        </div>

        <div className="mx-auto mt-7 max-w-sm">
          <CheckoutButton location="pos_amostra" subLabel="R$ 19,00 • pagamento único">
            QUERO CONTINUAR MINHA JORNADA NO APP
          </CheckoutButton>
        </div>
      </div>
    </section>
  );
}
