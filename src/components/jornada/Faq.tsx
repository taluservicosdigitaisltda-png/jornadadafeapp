import { useState } from "react";

import { container } from "./shared";

const faqs = [
  {
    q: "O que é o 5 Minutos de Fé?",
    a: "É um aplicativo devocional com orações guiadas e reflexões para situações reais da vida. Cada conteúdo foi pensado para caber em aproximadamente 5 minutos do seu dia.",
  },
  {
    q: "Preciso ser de alguma religião específica?",
    a: "Não. Os conteúdos são cristãos, escritos em linguagem simples e acolhedora, e podem ser usados por quem está começando ou retomando a vida de oração.",
  },
  {
    q: "Quanto tempo dura cada conteúdo?",
    a: "A maioria fica em torno de 5 minutos. Há conteúdos ainda mais curtos para dias corridos e outros um pouco mais longos para quando houver mais tempo.",
  },
  {
    q: "Preciso instalar o aplicativo?",
    a: "Você acessa pelo navegador do celular e pode salvar o atalho na tela inicial, usando como um aplicativo, sem depender de loja de aplicativos.",
  },
  {
    q: "O acesso tem mensalidade?",
    a: "Não. O pagamento é único de R$ 19,00 e dá acesso vitalício ao conteúdo adquirido, sem cobrança recorrente.",
  },
  {
    q: "Como recebo meu acesso após a compra?",
    a: "Depois da confirmação do pagamento, as instruções de acesso são enviadas para o e-mail informado no checkout.",
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
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="faq-titulo">
      <p className="eyebrow">Dúvidas frequentes</p>
      <h2 id="faq-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
        Perguntas que costumam aparecer
      </h2>

      <ul className="mt-9 space-y-4">
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
    </section>
  );
}
