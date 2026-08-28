import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

import { AppMockup, BrandLogo, CheckoutButton, ConfirmBadge, container } from "./shared";
import { Faq } from "./Faq";
import { contemplativeChurchImage, dailyDevotionalImage, prayerAtHomeImage } from "@/assets/generated-images";
import { track } from "@/lib/jornada";

export function Hero() {
  return (
    <section id="oferta-principal" className={`${container} grid items-center gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20`} aria-labelledby="hero-titulo">
      <div>
        <BrandLogo width={250} />
        <p className="eyebrow mt-8 block">Seu encontro diário com a Palavra e a oração</p>
        <h2 id="hero-titulo" className="mt-4 text-3xl leading-tight text-ivory sm:text-4xl lg:text-[2.8rem]">
          Você já separou seus 5 minutos de fé hoje?
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-sand sm:text-lg">
          Seu dia já pediu atenção de todos os lados. O 5 Minutos de Fé ajuda você a abrir um pequeno espaço para Deus, ouvir uma oração guiada e refletir sobre a Palavra — mesmo na correria e sem precisar saber como começar.
        </p>
        <p className="mt-4 max-w-xl font-display text-lg leading-relaxed text-gold-light">
          Uma Palavra para ouvir. Uma oração para acompanhar. Cinco minutos que podem mudar a forma como você atravessa o dia.
        </p>
        <div className="mt-8 max-w-sm"><CheckoutButton location="hero">QUERO MEUS 5 MINUTOS DE FÉ</CheckoutButton></div>
        <p className="mt-4 text-xs text-sand">Pagamento único • Acesso vitalício ao conteúdo adquirido • Garantia de 7 dias</p>
      </div>
      <AppMockup />
    </section>
  );
}

const demos = [
  { theme: "Paz", title: "5 minutos para acalmar o coração", duration: "5 min", excerpt: "Respire com calma. Você não precisa encontrar as palavras perfeitas. Por alguns minutos, apenas permaneça na presença de Deus." },
  { theme: "Direção", title: "5 minutos para buscar direção", duration: "5 min", excerpt: "Nem toda resposta aparece de uma vez. Às vezes, a direção começa quando o coração desacelera." },
  { theme: "Esperança", title: "5 minutos para renovar a esperança", duration: "5 min", excerpt: "Todo recomeço parece pequeno no início. Ainda assim, pode ser ali que a esperança volta a encontrar espaço." },
  { theme: "Gratidão", title: "5 minutos de gratidão", duration: "5 min", excerpt: "Gratidão não apaga o que foi difícil. Ela abre espaço para perceber também aquilo que sustentou você." },
  { theme: "Força", title: "5 minutos para encontrar força", duration: "5 min", excerpt: "Você não precisa resolver tudo neste instante. Entregue a Deus o peso que não precisa carregar sozinho." },
];

export function Demo() {
  const [active, setActive] = useState(0);
  const item = demos[active]!;
  return (
    <section className="border-y py-14 lg:py-20" style={{ background: "var(--gradient-brown)", borderColor: "oklch(0.76 0.106 79 / 25%)" }} aria-labelledby="demo-titulo">
      <div className={container}>
        <p className="eyebrow">Experimente a ideia</p>
        <h2 id="demo-titulo" className="mt-4 max-w-3xl text-2xl text-ivory sm:text-3xl lg:text-4xl">Se você pudesse parar por 5 minutos agora, o que seu coração precisaria?</h2>
        <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Temas disponíveis">
          {demos.map((d, i) => <button key={d.theme} type="button" role="tab" aria-selected={active === i} aria-controls="demo-preview" onClick={() => setActive(i)} className={`min-h-11 rounded-xl border px-5 py-2.5 text-sm transition-colors ${active === i ? "border-gold bg-gold/15 text-gold-light" : "border-gold/30 text-sand hover:border-gold/60 hover:text-gold-light"}`}>{d.theme}</button>)}
        </div>
        <div id="demo-preview" className="card-premium mt-6 rounded-[22px] p-6 sm:p-8">
          <p className="text-xs tracking-[0.16em] text-gold uppercase">{item.theme} • {item.duration}</p>
          <h3 className="mt-3 text-xl text-gold-light sm:text-2xl">{item.title}</h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-sand">“{item.excerpt}”</p>
          <p className="mt-4 text-xs text-sand/70">Prévia em texto. A oração narrada completa fica disponível dentro do aplicativo.</p>
        </div>
      </div>
    </section>
  );
}

export function Identification() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="identificacao-titulo">
      <div className="grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <p className="eyebrow">Quando a fé fica para depois</p>
          <h2 id="identificacao-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">O dia passa. Você cuida de tudo. E aquele pequeno tempo com Deus não acontece.</h2>
          <div className="mt-6 grid gap-4 text-base leading-relaxed text-sand">
            <p>Trabalho, mensagens, casa, decisões e preocupações ocupam cada espaço. Quando sobra silêncio, muitas vezes falta energia — ou faltam as palavras para começar.</p>
            <p>Isso não significa falta de fé. Significa apenas que sua rotina precisa de uma forma mais simples, breve e possível de parar.</p>
          </div>
          <p className="card-premium mt-8 rounded-[20px] p-6 font-display text-lg text-gold-light sm:p-7 sm:text-xl" style={{ boxShadow: "var(--shadow-gold)" }}>
            Seu dia não precisa estar perfeito para você ter um momento com Deus.
          </p>
        </div>
        <figure className="overflow-hidden rounded-[26px] border border-gold/30 bg-espresso shadow-2xl">
          <img src={prayerAtHomeImage} alt="Mulher em um momento tranquilo de oração em casa" width={1536} height={1024} loading="lazy" decoding="async" className="aspect-[3/2] h-auto w-full object-cover" />
          <figcaption className="border-t border-gold/20 px-5 py-4 text-xs leading-relaxed text-sand">Antes que o mundo peça mais de você, reserve alguns minutos para sua fé.</figcaption>
        </figure>
      </div>
    </section>
  );
}

const howItWorks = [
  { title: "Escolha o que precisa", text: "Paz, direção, esperança, gratidão ou força: comece pelo tema mais próximo do seu momento." },
  { title: "Aperte o play", text: "Ouça uma oração guiada e uma reflexão bíblica curta, em linguagem simples e acolhedora." },
  { title: "Leve a Palavra com você", text: "Guarde uma reflexão, escreva no diário ou apenas continue o dia com mais presença e intenção." },
];

export function HowItWorks() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="como-funciona-titulo">
      <p className="eyebrow">Simples de verdade</p>
      <h2 id="como-funciona-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">Três passos. Cerca de cinco minutos. No seu ritmo.</h2>
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {howItWorks.map((item, i) => <li key={item.title} className="card-premium rounded-[20px] p-6"><span className="font-display text-sm text-gold/70">{String(i + 1).padStart(2, "0")}</span><h3 className="mt-3 text-lg text-gold-light">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-sand">{item.text}</p></li>)}
      </ul>
    </section>
  );
}

const features = [
  { title: "Orações narradas", text: "Palavras guiadas para os momentos em que você não sabe como começar." },
  { title: "Reflexões bíblicas", text: "Conteúdos curtos, com linguagem simples e passagem indicada." },
  { title: "Escolha por necessidade", text: "Encontre rapidamente um conteúdo para paz, direção, esperança, gratidão ou força." },
  { title: "Diário pessoal", text: "Registre pedidos, gratidões e pensamentos que deseja guardar." },
  { title: "Favoritos e histórico", text: "Retome os momentos que mais fizeram sentido para você." },
  { title: "Transcrições", text: "Leia o conteúdo completo quando não puder ou não quiser ouvir." },
  { title: "Lembretes opcionais", text: "Escolha receber um aviso diário somente se isso ajudar sua rotina." },
  { title: "Caminho de 28 dias", text: "Uma sequência opcional para quem quiser construir constância aos poucos." },
];

export function Features() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="recursos-titulo">
      <p className="eyebrow">Dentro do aplicativo</p>
      <h2 id="recursos-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">Tudo pensado para diminuir a distância entre querer parar e realmente começar</h2>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => <li key={f.title} className="card-premium rounded-[18px] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60"><h3 className="text-base text-gold-light">{f.title}</h3><p className="mt-2 text-sm leading-relaxed text-sand">{f.text}</p></li>)}
      </ul>
    </section>
  );
}

const path = [
  { range: "Dias 1–7", name: "Presença", text: "Aprender a parar alguns minutos e estar ali." },
  { range: "Dias 8–14", name: "Confiança", text: "Refletir sobre entrega, espera e discernimento." },
  { range: "Dias 15–21", name: "Relacionamentos", text: "Olhar para perdão, família e convivência." },
  { range: "Dias 22–28", name: "Constância", text: "Encontrar uma forma possível de continuar." },
];

export function GuidedPath() {
  return (
    <section className="relative border-y py-14 lg:py-20" style={{ background: "var(--gradient-brown)", borderColor: "oklch(0.76 0.106 79 / 25%)" }} aria-labelledby="caminho-titulo">
      <div className={container}>
        <p className="eyebrow">Para quem quiser ir além</p>
        <h2 id="caminho-titulo" className="mt-4 max-w-3xl text-2xl text-ivory sm:text-3xl lg:text-4xl">Um caminho opcional de 28 dias para transformar cinco minutos em constância</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-sand">Você pode escolher apenas o conteúdo de que precisa ou seguir uma sequência guiada. Não há metas rígidas nem dias bloqueados.</p>
        <figure className="relative mt-9 overflow-hidden rounded-[26px] border border-gold/30 shadow-2xl">
          <img src={contemplativeChurchImage} alt="Interior de uma igreja iluminada pela luz dourada dos vitrais" width={1600} height={900} loading="lazy" decoding="async" className="aspect-[16/9] h-auto max-h-[400px] w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" aria-hidden="true" />
          <figcaption className="absolute inset-x-0 bottom-0 p-5 font-display text-base text-ivory sm:p-7 sm:text-lg">Cinco minutos por vez. Um dia de cada vez.</figcaption>
        </figure>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{path.map((item) => <li key={item.range} className="card-premium rounded-[20px] p-6"><p className="text-xs tracking-[0.16em] text-gold uppercase">{item.range}</p><h3 className="mt-3 text-lg text-gold-light">{item.name}</h3><p className="mt-2 text-sm leading-relaxed text-sand">{item.text}</p></li>)}</ol>
        <p className="mt-8 flex items-start gap-3 text-base text-ivory"><ConfirmBadge />Se um dia não acontecer, o 5 Minutos de Fé continua disponível quando você quiser retomar.</p>
      </div>
    </section>
  );
}

const forWho = [
  "Acredita em Deus, mas sente que a rotina afastou a oração do dia a dia",
  "Quer começar ou retomar sem entrar em um curso",
  "Tem pouco tempo e prefere conteúdos curtos pelo celular",
  "Nem sempre encontra palavras para orar",
  "Busca uma experiência sem culpa, pressão ou cobrança",
];

export function ForWho() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="para-quem-titulo">
      <div className="grid items-center gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <figure className="order-2 overflow-hidden rounded-[26px] border border-gold/30 bg-espresso shadow-2xl lg:order-1"><img src={dailyDevotionalImage} alt="Pessoa vivendo um momento tranquilo de reflexão em sua rotina" width={1536} height={1024} loading="lazy" decoding="async" className="aspect-[3/2] h-auto w-full object-cover" /></figure>
        <div className="order-1 lg:order-2"><p className="eyebrow">Pode ser para você</p><h2 id="para-quem-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">Para quem sente falta de um pequeno tempo com Deus — mesmo sem uma rotina perfeita</h2><ul className="mt-8 grid gap-4">{forWho.map((item) => <li key={item} className="flex items-start gap-3 text-base text-sand"><ConfirmBadge /><span className="min-w-0">{item}</span></li>)}</ul></div>
      </div>
    </section>
  );
}

const included = ["Aplicativo 5 Minutos de Fé", "Biblioteca de orações e reflexões narradas", "Momentos guiados de aproximadamente 5 minutos", "Caminho opcional de 28 dias", "Diário, favoritos, histórico e transcrições", "PDFs de oração e reflexão", "Acesso vitalício ao conteúdo adquirido"];

export function Included() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="incluido-titulo"><p className="eyebrow">Seu acesso</p><h2 id="incluido-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">Tudo que você recebe no 5 Minutos de Fé</h2><ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{included.map((item) => <li key={item} className="card-premium flex items-start gap-3 rounded-[18px] p-5 text-sm text-ivory"><ConfirmBadge /><span className="min-w-0">{item}</span></li>)}</ul></section>
  );
}

type Testimonial = { quote: string; name: string; location?: string; photoUrl?: string };
const SHOW_TESTIMONIALS = false;
const testimonials: Testimonial[] = [];

export function Testimonials() {
  if (!SHOW_TESTIMONIALS || testimonials.length === 0) return null;
  return (
    <section className="relative border-y py-14 lg:py-20" style={{ background: "var(--gradient-brown)", borderColor: "oklch(0.76 0.106 79 / 25%)" }} aria-labelledby="depoimentos-titulo"><div className={container}><p className="eyebrow">Experiências reais</p><h2 id="depoimentos-titulo" className="mt-4 max-w-3xl text-2xl text-ivory sm:text-3xl lg:text-4xl">Relatos de quem reservou seus 5 Minutos de Fé</h2><ul className="mt-10 grid gap-5 md:grid-cols-3">{testimonials.map((testimonial) => <li key={`${testimonial.name}-${testimonial.quote}`} className="card-premium flex h-full flex-col rounded-[22px] p-6 sm:p-7"><span className="font-display text-5xl leading-none text-gold/50" aria-hidden="true">“</span><blockquote className="mt-2 flex-1 text-sm leading-relaxed text-ivory sm:text-base">{testimonial.quote}</blockquote><p className="mt-6 border-t border-gold/20 pt-5 font-semibold text-gold-light">{testimonial.name}{testimonial.location ? <span className="mt-1 block text-xs font-normal text-sand">{testimonial.location}</span> : null}</p></li>)}</ul></div></section>
  );
}

export function Offer() {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver((entries) => { if (entries.some((e) => e.isIntersecting) && !fired.current) { fired.current = true; track("ViewOffer"); } }, { threshold: 0.3 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="oferta" ref={ref} className="relative overflow-hidden border-y py-14 lg:py-20" style={{ background: "var(--gradient-brown)", borderColor: "oklch(0.76 0.106 79 / 25%)" }} aria-labelledby="oferta-titulo">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-40" style={{ background: "radial-gradient(60% 100% at 50% 0%, oklch(0.76 0.106 79 / 22%), transparent)" }} aria-hidden="true" />
      <div className={`${container} relative`}><div className="card-premium mx-auto max-w-xl rounded-[26px] p-7 text-center sm:p-10"><p className="eyebrow">Seus cinco minutos podem começar hoje</p><h2 id="oferta-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl">Acesso completo ao 5 Minutos de Fé</h2><p className="mt-4 text-sm leading-relaxed text-sand">Palavra, reflexão e oração guiada para reservar um pequeno espaço para Deus na sua rotina.</p><p className="mt-6 font-display text-5xl text-gold-light sm:text-6xl">R$ 29,90</p><p className="mt-3 text-sm text-sand">Pagamento único. Sem mensalidade para acessar o conteúdo adquirido.</p><div className="mt-7"><CheckoutButton location="oferta">QUERO MEUS 5 MINUTOS DE FÉ</CheckoutButton></div><p className="mt-4 text-xs text-sand">🔒 Compra processada em ambiente seguro pela Perfect Pay.</p><p className="mt-2 text-xs text-sand/80">Garantia de 7 dias conforme as condições apresentadas no checkout.</p></div></div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="garantia-titulo"><div className="card-premium flex flex-col items-center gap-8 rounded-[26px] p-7 text-center sm:flex-row sm:p-10 sm:text-left"><div className="grid h-28 w-28 shrink-0 place-items-center rounded-full border font-display text-lg text-ink" style={{ background: "var(--gradient-gold)", borderColor: "var(--gold-light)" }}>7 DIAS</div><div className="min-w-0"><h2 id="garantia-titulo" className="text-2xl text-ivory sm:text-3xl">Comece com tranquilidade</h2><p className="mt-3 text-sm leading-relaxed text-sand sm:text-base">Você tem 7 dias após a compra para conhecer o conteúdo. Se avaliar que o 5 Minutos de Fé não faz sentido para o seu momento, pode solicitar o reembolso dentro desse prazo, seguindo as condições informadas no checkout da Perfect Pay.</p></div></div></section>
  );
}

export function Closing() {
  return (
    <section className={`${container} py-14 text-center lg:py-20`} aria-labelledby="encerramento-titulo"><p className="eyebrow">Antes de voltar para a correria</p><h2 id="encerramento-titulo" className="mx-auto mt-4 max-w-3xl text-2xl leading-snug text-ivory sm:text-3xl lg:text-4xl">Você já separou seus 5 minutos de fé hoje?</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-sand">Seu dia não precisa ser perfeito. Sua oração também não. Comece apenas com um pequeno espaço sincero para Deus.</p><div className="mx-auto mt-9 max-w-sm"><CheckoutButton location="encerramento">COMEÇAR MEUS 5 MINUTOS DE FÉ</CheckoutButton></div><p className="mt-5 font-display text-lg text-gold-light">Uma Palavra. Uma oração. Um momento com Deus.</p></section>
  );
}

const footerLinks = [{ to: "/privacidade", label: "Política de Privacidade" }, { to: "/termos", label: "Termos de Uso" }, { to: "/reembolso", label: "Reembolso" }, { to: "/suporte", label: "Suporte" }] as const;

export function Footer() {
  return (
    <footer className="border-t py-12" style={{ borderColor: "oklch(0.76 0.106 79 / 20%)" }}><div className={`${container} flex flex-col items-center gap-5 text-center`}><BrandLogo width={230} /><nav aria-label="Links institucionais"><ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">{footerLinks.map((l) => <li key={l.to}><Link to={l.to} className="inline-flex min-h-11 items-center text-sm text-sand underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-light">{l.label}</Link></li>)}</ul></nav><p className="max-w-3xl text-xs leading-relaxed text-sand/80">5 Minutos de Fé oferece conteúdos devocionais e educacionais. Não possui vínculo, representação ou endosso de padres, pastores, igrejas ou personalidades religiosas. O conteúdo não substitui acompanhamento pastoral, médico ou psicológico e não promete cura, milagre ou resultado espiritual específico.</p><p className="text-xs text-sand/70">© 2026 5 Minutos de Fé. Todos os direitos reservados.</p></div></footer>
  );
}

export function SalesPage() {
  return <><Hero /><Demo /><Identification /><HowItWorks /><Features /><GuidedPath /><ForWho /><Included /><Testimonials /><Offer /><Guarantee /><Faq /><Closing /></>;
}
