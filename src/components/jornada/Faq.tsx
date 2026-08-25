import { useState } from "react";

const faqs = [
  {
    q: "Minha compra da Jornada da Fé já está aprovada?",
    a: "Sim. Esta página confirma a compra do curso principal. O aplicativo é uma oferta complementar e opcional.",
  },
  {
    q: "O aplicativo possui mensalidade?",
    a: "Não. O valor de R$ 19,00 é pago uma única vez e garante acesso vitalício ao conteúdo disponibilizado.",
  },
  {
    q: "Como receberei meu acesso?",
    a: "Após a confirmação do pagamento, você receberá as instruções de acesso no e-mail utilizado na compra.",
  },
  {
    q: "Posso usar no celular?",
    a: "Sim. O aplicativo foi planejado para funcionar diretamente no celular, além de poder ser acessado em outros dispositivos compatíveis.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="mx-auto w-full max-w-[1140px] px-5 py-14 sm:px-8 lg:py-20"
      aria-labelledby="faq-titulo"
    >
      <p className="eyebrow">Dúvidas frequentes</p>
      <h2 id="faq-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
        Antes de continuar
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
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base text-ivory transition-colors hover:text-gold-light"
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
