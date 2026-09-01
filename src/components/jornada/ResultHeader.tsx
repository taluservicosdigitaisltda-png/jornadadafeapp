import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import { BrandLogo, ConfirmBadge, container } from "./shared";
import {
  captureUtms,
  clearAnswers,
  loadAnswers,
  profileFor,
  track,
  type Answers,
} from "@/lib/jornada";

export function ResultHeader() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Answers>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    captureUtms();
    const stored = loadAnswers();
    setAnswers(stored);
    setReady(true);
    track("result_view", { has_answers: Object.keys(stored).length > 0 });
  }, []);

  const profile = profileFor(answers);
  const hasAnswers = Object.keys(answers).length > 0;

  function redo() {
    clearAnswers();
    navigate({ to: "/" });
  }

  function goToOffer() {
    track("result_cta_click");
    document.getElementById("oferta-principal")?.scrollIntoView({ behavior: "smooth" });
  }

  if (!ready || !hasAnswers) {
    return (
      <header className={`${container} py-12 lg:py-16`}>
        <BrandLogo width={280} eager />
        <p className="eyebrow mt-8 block">Sua leitura de hoje</p>
        <h1 className="mt-4 max-w-2xl text-[1.7rem] leading-tight text-ivory sm:text-3xl">
          Faça seu Mapa de Fé para ver a leitura do seu momento
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-sand">
          {ready
            ? "Ainda não encontramos suas respostas neste dispositivo. São 7 perguntas rápidas, sem cadastro, e a leitura aparece em seguida."
            : "Carregando sua leitura..."}
        </p>
        {ready ? (
          <button
            type="button"
            onClick={redo}
            className="cta-gold mt-8 min-h-14 rounded-2xl px-7 py-4 text-sm font-bold tracking-[0.06em] sm:text-base"
          >
            FAZER MEU MAPA DE FÉ
          </button>
        ) : null}
      </header>
    );
  }



  return (
    <header className={`${container} py-12 lg:py-16`}>
      <BrandLogo width={280} eager />

      <p className="eyebrow mt-8 block">Sua leitura de hoje</p>
      <h1 className="mt-4 max-w-3xl text-[1.7rem] leading-tight text-ivory sm:text-3xl lg:text-[2.6rem]">
        {profile.name}
      </h1>
      <p className="mt-3 text-xs uppercase tracking-[0.18em] text-gold">
        {profile.category} • Sugestão de {profile.duration}
      </p>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="grid gap-4 text-base leading-relaxed text-sand sm:text-lg">
          {profile.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <figure
          className="overflow-hidden rounded-[24px] border p-2"
          style={{
            borderColor: "oklch(0.76 0.106 79 / 35%)",
            background: "var(--gradient-brown)",
            boxShadow: "var(--shadow-deep)",
          }}
        >
          <img
            src={profile.image}
            alt={profile.imageAlt}
            width={1024}
            height={768}
            loading="eager"
            decoding="async"
            className="h-auto w-full rounded-[18px]"
          />
        </figure>
      </div>

      <section className="card-premium mt-8 rounded-[22px] p-6 sm:p-7" aria-labelledby="needs-titulo">
        <h2 id="needs-titulo" className="text-xl text-gold-light sm:text-2xl">
          O que você parece precisar agora
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-3">
          {profile.needs.map((need) => (
            <li key={need} className="flex items-start gap-3 text-sm leading-relaxed text-ivory">
              <ConfirmBadge />
              <span className="min-w-0">{need}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <section
          className="card-premium rounded-[22px] p-6"
          style={{ boxShadow: "var(--shadow-gold)" }}
        >
          <p className="eyebrow">Oração indicada</p>
          <h2 className="mt-3 text-lg text-gold-light sm:text-xl">{profile.prayer}</h2>
          <p className="mt-3 text-xs text-sand/80">
            Disponível de forma narrada dentro do aplicativo.
          </p>
        </section>

        <section className="card-premium rounded-[22px] p-6">
          <p className="eyebrow">Reflexão indicada</p>
          <h2 className="mt-3 text-lg text-gold-light sm:text-xl">{profile.reflection}</h2>
          <p className="mt-3 text-xs text-sand/80">Leitura curta, para acompanhar a oração.</p>
        </section>

        <section className="card-premium rounded-[22px] p-6">
          <p className="eyebrow">Um pequeno passo para hoje</p>
          <p className="mt-3 text-sm leading-relaxed text-ivory">{profile.step}</p>
        </section>
      </div>

      <p className="mt-8 max-w-2xl font-display text-lg leading-relaxed text-gold-light sm:text-xl">
        {profile.closing}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={goToOffer}
          className="cta-gold min-h-14 rounded-2xl px-7 py-4 text-center text-sm font-bold tracking-[0.06em] sm:text-base"
        >
          QUERO TER MEUS 5 MINUTOS DE FÉ
        </button>
        <button
          type="button"
          onClick={redo}
          className="min-h-14 rounded-2xl border border-gold/40 px-7 py-4 text-sm font-semibold text-gold-light transition-colors hover:bg-gold/10"
        >
          REFAZER O QUIZ
        </button>
      </div>

      <p className="mt-5 max-w-2xl text-xs leading-relaxed text-sand/70">
        Esta leitura é devocional e educacional. Não é diagnóstico médico ou psicológico e não
        substitui acompanhamento pastoral, médico ou profissional.
      </p>
    </header>
  );
}
