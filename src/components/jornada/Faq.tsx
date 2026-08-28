import { useState } from "react";

import { container } from "./shared";

const faqs = [
  {
    q: "É um curso ou um aplicativo?",
    a: "É um aplicativo de orações narradas, reflexões bíblicas e uma caminhada guiada de 28 dias. Você usa no seu ritmo, sem aulas ao vivo e sem prazo para concluir.",
  },
  {
    q: "Preciso conhecer a Bíblia para usar?",
    a: "Não. Os conteúdos são escritos em linguagem simples e cada reflexão indica a passagem usada, para que você possa acompanhar mesmo começando agora.",
  },
  {
    q: "Quanto tempo preciso por dia?",
    a: "Alguns minutos já são suficientes. Há conteúdos curtos para dias corridos e outros um pouco mais longos para quando houver mais tempo disponível.",
  },
  {
    q: "O aplicativo pertence a algum padre ou igreja?",
    a: "Não. Jornada da Fé é uma marca independente e não utiliza a imagem ou o endosso de líderes religiosos.",
  },
  {
    q: "Existe mensalidade?",
    a: "Não. O pagamento é único e dá acesso ao conteúdo adquirido, sem cobrança recorrente para continuar acessando.",
  },
  {
    q: "Posso usar pelo celular?",
    a: "Sim. A experiência foi desenhada para o celular e também funciona em outros dispositivos com navegador compatível.",
  },
  {
    q: "E se eu perder um dia da caminhada?",
    a: "Nada é bloqueado. Você retoma de onde parou, no dia que puder, sem precisar começar tudo de novo.",
  },
  {
    q: "Substitui acompanhamento religioso ou profissional?",
    a: "Não. O conteúdo é devocional e educacional. Ele não substitui acompanhamento pastoral, médico ou psicológico.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Você tem 7 dias após a compra para avaliar o acesso e solicitar reembolso, conforme as condições apresentadas no checkout da Perfect Pay.",
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
