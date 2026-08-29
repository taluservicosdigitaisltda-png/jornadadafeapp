import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import { BrandLogo, container } from "./shared";
import { captureUtms, questions, saveAnswers, track, type Answers } from "@/lib/jornada";

export function Quiz() {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [finishing, setFinishing] = useState(false);

  useEffect(() => {
    captureUtms();
  }, []);

  function start() {
    track("quiz_start");
    setStarted(true);
  }

  function choose(option: string) {
    const question = questions[step]!;
    const next: Answers = { ...answers, [question.id]: option };
    setAnswers(next);
    saveAnswers(next);
    track("quiz_answer", { question: question.id, answer: option, step: step + 1 });

    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }

    setFinishing(true);
    track("quiz_complete", next as Record<string, unknown>);
    window.setTimeout(() => {
      navigate({ to: "/resultado" });
    }, 1200);
  }

  if (!started) {
    return (
      <main
        className={`${container} flex min-h-screen flex-col items-center justify-center py-14 text-center`}
      >
        <BrandLogo width={220} eager />
        <p className="eyebrow mt-9 block">Uma pausa para o seu coração</p>
        <h1 className="mt-4 max-w-2xl text-2xl leading-tight text-ivory sm:text-3xl lg:text-4xl">
          Descubra qual caminho pode acompanhar melhor o seu momento de fé
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-sand">
          Responda quatro perguntas rápidas e receba uma sugestão para começar.
        </p>
        <button
          type="button"
          onClick={start}
          className="cta-gold mt-9 min-h-14 w-full max-w-sm rounded-2xl px-8 py-4 text-sm font-bold tracking-[0.1em] sm:text-base"
        >
          COMEÇAR
        </button>
        <p className="mt-4 text-xs text-sand">Leva menos de 1 minuto • Sem cadastro</p>
      </main>
    );
  }

  if (finishing) {
    return (
      <main
        className={`${container} flex min-h-screen flex-col items-center justify-center py-14 text-center`}
        aria-live="polite"
      >
        <BrandLogo width={180} />
        <p className="mt-8 font-display text-xl text-gold-light sm:text-2xl">
          Preparando uma sugestão para o seu momento…
        </p>
      </main>
    );
  }

  const question = questions[step]!;

  return (
    <main className={`${container} flex min-h-screen flex-col justify-center py-12`}>
      <div className="mx-auto w-full max-w-2xl">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => (step === 0 ? setStarted(false) : setStep(step - 1))}
            className="min-h-11 rounded-xl border border-gold/40 px-4 text-sm text-gold-light transition-colors hover:bg-gold/10"
            aria-label="Voltar para a etapa anterior"
          >
            ← Voltar
          </button>
          <p className="text-xs uppercase tracking-[0.18em] text-sand">
            {step + 1} de {questions.length}
          </p>
        </div>

        <div
          className="mt-5 h-1.5 w-full overflow-hidden rounded-full"
          style={{ backgroundColor: "oklch(0.76 0.106 79 / 18%)" }}
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={questions.length}
          aria-valuenow={step + 1}
          aria-label="Progresso do quiz"
        >
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${((step + 1) / questions.length) * 100}%`,
              background: "var(--gradient-gold)",
            }}
          />
        </div>

        <h1 key={question.id} className="mt-9 text-2xl leading-snug text-ivory sm:text-3xl">
          {question.label}
        </h1>

        <ul className="mt-7 space-y-3">
          {question.options.map((option) => (
            <li key={option}>
              <button
                type="button"
                onClick={() => choose(option)}
                className="card-premium flex min-h-14 w-full items-center justify-between gap-4 rounded-[18px] px-5 py-4 text-left text-base text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold-light"
              >
                <span className="min-w-0">{option}</span>
                <span aria-hidden="true" className="text-gold">
                  →
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs text-sand">
          Não pedimos nome, e-mail ou telefone. Suas respostas ficam apenas neste navegador.
        </p>
      </div>
    </main>
  );
}
