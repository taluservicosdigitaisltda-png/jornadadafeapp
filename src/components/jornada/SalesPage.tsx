import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

import { AppMockup, BrandLogo, CheckoutButton, ConfirmBadge, container } from "./shared";
import { Faq } from "./Faq";
import { track } from "@/lib/jornada";

export function Hero() {
  return (
    <section
      id="oferta-principal"
      className={`${container} grid items-center gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20`}
      aria-labelledby="hero-titulo"
    >
      <div>
        <BrandLogo width={200} />
        <p className="eyebrow mt-8 block">Aplicativo de orações e jornada devocional</p>
        <h2
          id="hero-titulo"
          className="mt-4 text-3xl leading-tight text-ivory sm:text-4xl lg:text-[2.8rem]"
        >
          Quando faltarem palavras, tenha um caminho para começar.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-sand sm:text-lg">
          A Jornada da Fé reúne orações narradas, reflexões bíblicas e uma caminhada guiada de 28
          dias para ajudar você a reservar alguns minutos para Deus, no seu ritmo e sem cobranças.
        </p>
        <div className="mt-8 max-w-sm">
          <CheckoutButton location="hero">QUERO COMEÇAR MINHA JORNADA</CheckoutButton>
        </div>
        <p className="mt-4 text-xs text-sand">
          Pagamento único • Acesso vitalício ao conteúdo adquirido • Garantia de 7 dias
        </p>
      </div>
      <AppMockup />
    </section>
  );
}

export function Identification() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="identificacao-titulo">
      <h2 id="identificacao-titulo" className="max-w-3xl text-2xl text-ivory sm:text-3xl lg:text-4xl">
        A vontade existe. O difícil é saber como manter uma rotina.
      </h2>
      <div className="mt-6 grid gap-4 text-base leading-relaxed text-sand lg:max-w-3xl">
        <p>
          Os dias passam corridos: trabalho, casa, responsabilidades. Quando finalmente sobra um
          instante de silêncio, vem a sensação de não saber como começar a orar.
        </p>
        <p>
          Abrir a Bíblia também pode parecer difícil sem saber por onde começar, e a rotina de fé
          acaba ficando para depois — mais uma vez.
        </p>
      </div>
      <p
        className="card-premium mt-8 rounded-[20px] p-6 font-display text-lg text-gold-light sm:p-7 sm:text-xl"
        style={{ boxShadow: "var(--shadow-gold)" }}
      >
        Isso não significa falta de fé. Muitas vezes, o que falta é um caminho simples e possível.
      </p>
    </section>
  );
}

const howItWorks = [
  {
    title: "Escolha seu momento",
    text: "Selecione o tema mais próximo do que você está vivendo hoje: paz, direção, esperança, gratidão ou força.",
  },
  {
    title: "Ouça e reflita",
    text: "Uma oração narrada e uma reflexão bíblica curta ajudam a desacelerar e a dar atenção ao que importa.",
  },
  {
    title: "Construa sua caminhada",
    text: "Siga a jornada de 28 dias e registre no diário o que quiser guardar. Sem metas rígidas.",
  },
];

export function HowItWorks() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="como-funciona-titulo">
      <p className="eyebrow">Como funciona</p>
      <h2 id="como-funciona-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
        Três passos simples, todos os dias
      </h2>
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {howItWorks.map((item, i) => (
          <li key={item.title} className="card-premium rounded-[20px] p-6">
            <span className="font-display text-sm text-gold/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg text-gold-light">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-sand">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const journey = [
  { range: "Dias 1–7", name: "Presença", text: "Criar o hábito de parar alguns minutos e estar ali." },
  { range: "Dias 8–14", name: "Confiança", text: "Reflexões sobre entrega, espera e discernimento." },
  {
    range: "Dias 15–21",
    name: "Relacionamentos",
    text: "Perdão, convivência, família e as relações do dia a dia.",
  },
  {
    range: "Dias 22–28",
    name: "Constância",
    text: "Transformar a caminhada em algo que continua depois dos 28 dias.",
  },
];

export function Journey() {
  return (
    <section
      className="relative border-y py-14 lg:py-20"
      style={{ background: "var(--gradient-brown)", borderColor: "oklch(0.76 0.106 79 / 25%)" }}
      aria-labelledby="jornada-titulo"
    >
      <div className={container}>
        <p className="eyebrow">Jornada guiada</p>
        <h2 id="jornada-titulo" className="mt-4 max-w-2xl text-2xl text-ivory sm:text-3xl lg:text-4xl">
          28 dias para criar espaço para sua fé na vida cotidiana
        </h2>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((etapa) => (
            <li key={etapa.range} className="card-premium rounded-[20px] p-6">
              <p className="text-xs tracking-[0.16em] text-gold uppercase">{etapa.range}</p>
              <h3 className="mt-3 text-lg text-gold-light">{etapa.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sand">{etapa.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 flex items-start gap-3 text-base text-ivory">
          <ConfirmBadge />
          Se você perder um dia, não perdeu a Jornada. Continue quando puder.
        </p>
      </div>
    </section>
  );
}

const features = [
  { title: "Orações narradas", text: "Áudios curtos para acompanhar em diferentes momentos do dia." },
  { title: "Jornada de 28 dias", text: "Uma sequência guiada com tema definido para cada semana." },
  { title: "Reflexões bíblicas", text: "Textos breves com a passagem indicada para leitura." },
  { title: "Diário de oração", text: "Espaço para escrever pedidos, gratidões e percepções." },
  { title: "Favoritos e histórico", text: "Salve o que tocou você e retome o que já ouviu." },
  { title: "Busca por tema", text: "Encontre conteúdos pelo assunto que precisa hoje." },
  { title: "Transcrições", text: "Leia o texto completo quando preferir não ouvir." },
  { title: "Lembretes opcionais", text: "Ative um aviso diário apenas se isso ajudar você." },
];

export function Features() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="recursos-titulo">
      <p className="eyebrow">Funcionalidades</p>
      <h2 id="recursos-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
        O que você encontra no aplicativo
      </h2>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <li
            key={f.title}
            className="card-premium rounded-[18px] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60"
          >
            <h3 className="text-base text-gold-light">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-sand">{f.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const demos = [
  {
    theme: "Paz",
    title: "Oração para acalmar o coração",
    duration: "5 min",
    excerpt:
      "Respire com calma. Antes de pedir, apenas permaneça: não é preciso encontrar as palavras certas para estar diante de Deus.",
  },
  {
    theme: "Direção",
    title: "Reflexão: quando é preciso decidir",
    duration: "7 min",
    excerpt:
      "Discernir não é adivinhar o futuro. É olhar com honestidade para o que existe hoje e escolher o próximo passo possível.",
  },
  {
    theme: "Esperança",
    title: "Oração de recomeço",
    duration: "6 min",
    excerpt:
      "Recomeçar costuma parecer pequeno por dentro. E ainda assim é ali que a caminhada volta a acontecer.",
  },
  {
    theme: "Gratidão",
    title: "Reflexão: o que já foi recebido",
    duration: "5 min",
    excerpt:
      "Gratidão não ignora o que dói. Ela apenas escolhe também enxergar aquilo que sustentou você até aqui.",
  },
  {
    theme: "Força",
    title: "Oração para dias de cansaço",
    duration: "8 min",
    excerpt:
      "Você não precisa dar conta de tudo hoje. Entregue o peso que não é seu e siga um passo por vez.",
  },
];

export function Demo() {
  const [active, setActive] = useState(0);
  const item = demos[active]!;

  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="demo-titulo">
      <p className="eyebrow">Uma amostra do conteúdo</p>
      <h2 id="demo-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
        O que seu coração precisa hoje?
      </h2>

      <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Temas disponíveis">
        {demos.map((d, i) => (
          <button
            key={d.theme}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-controls="demo-preview"
            onClick={() => setActive(i)}
            className={`min-h-11 rounded-xl border px-5 py-2.5 text-sm transition-colors ${
              active === i
                ? "border-gold bg-gold/15 text-gold-light"
                : "border-gold/30 text-sand hover:border-gold/60 hover:text-gold-light"
            }`}
          >
            {d.theme}
          </button>
        ))}
      </div>

      <div id="demo-preview" className="card-premium mt-6 rounded-[22px] p-6 sm:p-8">
        <p className="text-xs tracking-[0.16em] text-gold uppercase">
          {item.theme} • {item.duration}
        </p>
        <h3 className="mt-3 text-xl text-gold-light sm:text-2xl">{item.title}</h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-sand">“{item.excerpt}”</p>
        <p className="mt-4 text-xs text-sand/70">
          Prévia em texto. O conteúdo narrado completo fica disponível dentro do aplicativo.
        </p>
      </div>
    </section>
  );
}

const forWho = [
  "Quer começar ou retomar uma rotina de oração",
  "Tem pouco tempo livre durante o dia",
  "Prefere ouvir pelo celular em vez de ler longos textos",
  "Busca uma experiência sem culpa e sem cobrança",
  "Deseja aplicar princípios bíblicos no cotidiano",
];

export function ForWho() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="para-quem-titulo">
      <p className="eyebrow">Para quem é</p>
      <h2 id="para-quem-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
        Pode fazer sentido para você se…
      </h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {forWho.map((item) => (
          <li key={item} className="flex items-start gap-3 text-base text-sand">
            <ConfirmBadge />
            <span className="min-w-0">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const included = [
  "Aplicativo Jornada da Fé",
  "Jornada guiada de 28 dias",
  "Biblioteca de orações e reflexões narradas",
  "Diário de oração",
  "PDFs de oração e reflexão",
  "Acesso vitalício ao conteúdo adquirido",
];

export function Included() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="incluido-titulo">
      <p className="eyebrow">O que está incluído</p>
      <h2 id="incluido-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
        Tudo que você recebe no acesso
      </h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {included.map((item) => (
          <li
            key={item}
            className="card-premium flex items-start gap-3 rounded-[18px] p-5 text-sm text-ivory"
          >
            <ConfirmBadge />
            <span className="min-w-0">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Offer() {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !fired.current) {
          fired.current = true;
          track("offer_view");
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="oferta"
      ref={ref}
      className="relative overflow-hidden border-y py-14 lg:py-20"
      style={{ background: "var(--gradient-brown)", borderColor: "oklch(0.76 0.106 79 / 25%)" }}
      aria-labelledby="oferta-titulo"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-40"
        style={{
          background: "radial-gradient(60% 100% at 50% 0%, oklch(0.76 0.106 79 / 22%), transparent)",
        }}
        aria-hidden="true"
      />
      <div className={`${container} relative`}>
        <div className="card-premium mx-auto max-w-xl rounded-[26px] p-7 text-center sm:p-10">
          <p className="eyebrow">Comece no seu ritmo</p>
          <h2 id="oferta-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl">
            Acesso completo à Jornada da Fé
          </h2>
          <p className="mt-6 font-display text-5xl text-gold-light sm:text-6xl">R$ 29,90</p>
          <p className="mt-3 text-sm text-sand">
            Pagamento único. Sem mensalidade para acessar o conteúdo adquirido.
          </p>
          <div className="mt-7">
            <CheckoutButton location="oferta">QUERO ACESSAR O APLICATIVO</CheckoutButton>
          </div>
          <p className="mt-4 text-xs text-sand">
            🔒 Compra processada em ambiente seguro pela Perfect Pay.
          </p>
          <p className="mt-2 text-xs text-sand/80">
            Garantia de 7 dias conforme as condições apresentadas no checkout.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="garantia-titulo">
      <div className="card-premium flex flex-col items-center gap-8 rounded-[26px] p-7 text-center sm:flex-row sm:p-10 sm:text-left">
        <div
          className="grid h-28 w-28 shrink-0 place-items-center rounded-full border font-display text-lg text-ink"
          style={{ background: "var(--gradient-gold)", borderColor: "var(--gold-light)" }}
        >
          7 DIAS
        </div>
        <div className="min-w-0">
          <h2 id="garantia-titulo" className="text-2xl text-ivory sm:text-3xl">
            Comece com tranquilidade
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-sand sm:text-base">
            Você tem 7 dias após a compra para conhecer o conteúdo. Se avaliar que não faz sentido
            para o seu momento, pode solicitar o reembolso dentro desse prazo, seguindo as condições
            informadas no checkout da Perfect Pay.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className={`${container} py-14 text-center lg:py-20`} aria-labelledby="encerramento-titulo">
      <h2
        id="encerramento-titulo"
        className="mx-auto max-w-3xl text-2xl leading-snug text-ivory sm:text-3xl lg:text-4xl"
      >
        Você não precisa começar de forma perfeita. Só precisa dar o primeiro passo.
      </h2>
      <div className="mx-auto mt-9 max-w-sm">
        <CheckoutButton location="encerramento">COMEÇAR MINHA JORNADA</CheckoutButton>
      </div>
      <p className="mt-5 font-display text-lg text-gold-light">Sua fé, um dia de cada vez.</p>
    </section>
  );
}

const footerLinks = [
  { to: "/privacidade", label: "Política de Privacidade" },
  { to: "/termos", label: "Termos de Uso" },
  { to: "/reembolso", label: "Reembolso" },
  { to: "/suporte", label: "Suporte" },
] as const;

export function Footer() {
  return (
    <footer className="border-t py-12" style={{ borderColor: "oklch(0.76 0.106 79 / 20%)" }}>
      <div className={`${container} flex flex-col items-center gap-5 text-center`}>
        <BrandLogo width={190} />
        <nav aria-label="Links institucionais">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-flex min-h-11 items-center text-sm text-sand underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-light"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="max-w-3xl text-xs leading-relaxed text-sand/80">
          A Jornada da Fé oferece conteúdos devocionais e educacionais. Não possui vínculo,
          representação ou endosso de padres, pastores, igrejas ou personalidades religiosas. O
          conteúdo não substitui acompanhamento pastoral, médico ou psicológico e não promete cura,
          milagre ou resultado espiritual específico.
        </p>
        <p className="text-xs text-sand/70">© 2026 Jornada da Fé. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export function SalesPage() {
  return (
    <>
      <Hero />
      <Identification />
      <HowItWorks />
      <Journey />
      <Features />
      <Demo />
      <ForWho />
      <Included />
      <Offer />
      <Guarantee />
      <Faq />
      <Closing />
    </>
  );
}
