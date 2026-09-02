import { useState } from "react";

import { container } from "./shared";
import { track } from "@/lib/jornada";

const faqs = [
  {
    q: "O que é o 5 Minutos de Fé?",
    a: "É um aplicativo devocional com orações guiadas e reflexões para situações reais da vida. A proposta é simples: reserve cerca de 5 minutos e ouça uma oração guiada, leia a reflexão e faça um pequeno passo para o seu dia.",
  },
  {
    q: "Preciso pertencer a alguma igreja ou denominação específica?",
    a: "Não. O conteúdo tem base cristã, escrito em linguagem simples e acolhedora, e não exige vínculo com nenhuma igreja ou denominação específica. Serve para quem está começando, retomando ou aprofundando a vida de oração.",
  },
  {
    q: "Quanto tempo dura cada conteúdo?",
    a: "As orações guiadas duram em torno de 5 minutos. Os conteúdos atuais ficam aproximadamente entre 4 e 6 minutos, dependendo do tema e do ritmo da oração. A proposta é uma pausa breve e possível no dia — sem pressa e sem exigir um tempo longo que você não tem.",
  },
  {
    q: "Preciso instalar o aplicativo?",
    a: "Você acessa pelo navegador do celular e pode salvar o atalho na tela inicial, usando como um aplicativo, sem depender de loja de aplicativos.",
  },
  {
    q: "O acesso tem mensalidade?",
    a: "Não. É compra única de R$ 19,00, sem mensalidade, com acesso vitalício ao conteúdo adquirido. O checkout pode oferecer parcelamento em até 3x com juros, caso você prefira dividir o valor.",
  },
  {
    q: "Como recebo meu acesso após a compra?",
    a: "Depois da confirmação do pagamento, as instruções de acesso são enviadas para o e-mail informado no checkout. Se algo não chegar, escreva para 5minutosdefeapp@gmail.com.",
  },
  {
    q: "Posso ouvir pelo celular?",
    a: "Sim. A experiência foi desenhada primeiro para o celular e também funciona em tablet e computador com navegador atualizado.",
  },
  {
    q: "O que encontro dentro do aplicativo?",
    a: "Orações guiadas e narradas, reflexões curtas organizadas por tema e situação, favoritos, histórico do que você já acompanhou e um diário privado.",
  },
  {
    q: "Existe garantia?",
    a: "Sim. Você tem 7 dias após a compra para avaliar o acesso e solicitar reembolso, conforme as condições apresentadas no checkout.",
  },
  {
    q: "O conteúdo substitui acompanhamento religioso, médico ou psicológico?",
    a: "Não. O conteúdo é devocional e educacional. Ele não substitui acompanhamento pastoral, médico ou psicológico e não promete cura, milagre ou resultado espiritual específico.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`${container} py-12 lg:py-16`} aria-labelledby="faq-titulo">
      <p className="eyebrow">Dúvidas frequentes</p>
      <h2 id="faq-titulo" className="mt-3 text-2xl text-ivory sm:text-3xl">
        Perguntas que costumam aparecer
      </h2>

      <ul className="mx-auto mt-7 max-w-3xl space-y-2">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.q} className="card-premium overflow-hidden rounded-[18px]">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-6 py-5 text-left text-base text-ivory transition-colors hover:text-gold-light"
                >
                  <span className="min-w-0 font-display">{item.q}</span>
                  <span
                    className={`shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </h3>
              <div
                id={`faq-panel-${i}`}
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-sand">{item.a}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 text-xs text-sand/70">
        Ainda com dúvida? Escreva para{" "}
        <a
          href="mailto:5minutosdefeapp@gmail.com"
          className="text-gold-light underline decoration-gold/40 underline-offset-4"
        >
          5minutosdefeapp@gmail.com
        </a>
        .
      </p>
    </section>
  );
}
