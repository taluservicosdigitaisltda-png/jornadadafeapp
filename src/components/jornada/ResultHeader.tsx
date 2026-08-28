import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import { BrandLogo, container } from "./shared";
import { captureUtms, clearAnswers, loadAnswers, questions, resultFor, track, type Answers } from "@/lib/jornada";

export function ResultHeader() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Answers>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    captureUtms();
    const stored = loadAnswers();
    setAnswers(stored);
    setReady(true);
    track("ViewResult", { has_answers: Object.keys(stored).length > 0 });
  }, []);

  const profile = resultFor(answers);
  const hasAnswers = Object.keys(answers).length > 0;

  function redo() {
    clearAnswers();
    navigate({ to: "/" });
  }

  function goToOffer() {
    document.getElementById("oferta-principal")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className={`${container} py-12 lg:py-16`}>
      <BrandLogo width={220} eager />
      <p className="eyebrow mt-8 block">Seu momento recomendado para hoje</p>
      <h1 className="mt-4 max-w-3xl text-2xl leading-tight text-ivory sm:text-3xl lg:text-4xl">
        Seus 5 Minutos de Fé: {profile.name}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-sand sm:text-lg">{profile.text}</p>

      {ready && hasAnswers ? (
        <section className="card-premium mt-9 rounded-[22px] p-6 sm:p-7" aria-label="Resumo das suas respostas">
          <p className="eyebrow">O que você compartilhou</p>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            {questions.map((q) => answers[q.id] ? (
              <div key={q.id}>
                <dt className="text-xs text-sand/80">{q.label}</dt>
                <dd className="mt-1 font-display text-base text-gold-light">{answers[q.id]}</dd>
              </div>
            ) : null)}
          </dl>
        </section>
      ) : null}

      <section className="card-premium mt-6 rounded-[22px] p-6 sm:p-7" aria-label="Conteúdo sugerido" style={{ boxShadow: "var(--shadow-gold)" }}>
        <p className="text-xs tracking-[0.16em] text-gold uppercase">Sua recomendação • aproximadamente 5 min</p>
        <h2 className="mt-3 text-xl text-gold-light sm:text-2xl">{profile.content.title}</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-sand">“{profile.content.excerpt}”</p>
        <p className="mt-4 text-xs text-sand/70">Esta é uma prévia. A oração narrada completa está disponível dentro do aplicativo.</p>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="button" onClick={goToOffer} className="cta-gold min-h-14 rounded-2xl px-7 py-4 text-sm font-bold tracking-[0.08em] sm:text-base">
          CONHECER O 5 MINUTOS DE FÉ
        </button>
        <button type="button" onClick={redo} className="min-h-14 rounded-2xl border border-gold/40 px-7 py-4 text-sm font-semibold text-gold-light transition-colors hover:bg-gold/10">
          REFAZER O QUIZ
        </button>
      </div>
    </header>
  );
}
