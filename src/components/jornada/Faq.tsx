import { useState } from "react";
import { container } from "./shared";

const faqs = [
  { q: "5 Minutos de Fé é um curso?", a: "Não. É um aplicativo com orações narradas, reflexões bíblicas curtas e recursos para você reservar um pequeno momento com Deus pelo celular." },
  { q: "Preciso conhecer a Bíblia para usar?", a: "Não. Os conteúdos usam linguagem simples e indicam a passagem bíblica relacionada, inclusive para quem está começando ou retomando agora." },
  { q: "São exatamente 5 minutos por dia?", a: "A proposta central é um momento de aproximadamente cinco minutos. Alguns conteúdos podem ser um pouco menores ou maiores, para você escolher conforme o tempo disponível." },
  { q: "E se eu não conseguir usar todos os dias?", a: "Não existe cobrança nem sequência obrigatória. Você pode retomar quando puder. O caminho guiado de 28 dias é opcional e nada é bloqueado se um dia passar em branco." },
  { q: "O aplicativo pertence a algum padre ou igreja?", a: "Não. 5 Minutos de Fé é uma marca independente e não utiliza imagem, voz ou endosso de líderes religiosos." },
  { q: "Existe mensalidade?", a: "Não. O pagamento é único e dá acesso vitalício ao conteúdo adquirido, sem cobrança recorrente para continuar acessando." },
  { q: "Qual é o valor do aplicativo?", a: "O acesso ao 5 Minutos de Fé custa R$ 19,00 em pagamento único, sem mensalidade para continuar acessando o conteúdo adquirido." },
  { q: "Posso usar pelo celular?", a: "Sim. A experiência foi desenvolvida principalmente para o celular e também funciona em outros dispositivos com navegador compatível." },
  { q: "O conteúdo promete melhorar ou transformar minha vida?", a: "Não existe promessa de resultado garantido. O aplicativo oferece um espaço guiado de oração e reflexão que pode ajudar você a viver o dia com mais presença e intenção." },
  { q: "Substitui acompanhamento religioso ou profissional?", a: "Não. O conteúdo é devocional e educacional. Ele não substitui acompanhamento pastoral, médico ou psicológico." },
  { q: "Como funciona a garantia?", a: "Você tem 7 dias após a compra para avaliar o acesso e solicitar reembolso, conforme as condições apresentadas no checkout da Perfect Pay." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="faq-titulo">
      <p className="eyebrow">Dúvidas frequentes</p>
      <h2 id="faq-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">Antes de reservar seus 5 minutos</h2>
      <ul className="mt-9 space-y-4">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.q} className="card-premium overflow-hidden rounded-[18px]">
              <h3><button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`faq-panel-${i}`} className="flex min-h-14 w-full items-center justify-between gap-4 px-6 py-5 text-left text-base text-ivory transition-colors hover:text-gold-light">
                <span className="min-w-0 font-display">{item.q}</span><span className={`shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">+</span>
              </button></h3>
              <div id={`faq-panel-${i}`} className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}><div className="overflow-hidden"><p className="px-6 pb-5 text-sm leading-relaxed text-sand">{item.a}</p></div></div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
