import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

import { AppMockup, BrandLogo, CheckoutButton, ConfirmBadge, container } from "./shared";
import { Faq } from "./Faq";
import { BRAND, PRICE, track } from "@/lib/jornada";

const priceLine = `${PRICE} • pagamento único • acesso vitalício`;

export function Bridge() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="ponte-titulo">
      <h2 id="ponte-titulo" className="max-w-3xl text-2xl leading-snug text-ivory sm:text-3xl lg:text-4xl">
        E se você tivesse uma oração certa para cada um desses momentos?
      </h2>
      <div className="mt-6 grid max-w-3xl gap-4 text-base leading-relaxed text-sand sm:text-lg">
        <p>
          Nem todo dia pede a mesma oração. Há dias em que precisamos de paz. Em outros, de direção,
          força, esperança ou simplesmente alguns minutos para entregar aquilo que não conseguimos
          carregar sozinhos.
        </p>
        <p>
          O {BRAND} organiza isso para você: em vez de procurar as palavras certas, você escolhe o
          que está vivendo e recebe uma oração e uma reflexão prontas para aquele momento.
        </p>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section
      id="oferta-principal"
      className={`${container} grid items-center gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20`}
      aria-labelledby="hero-titulo"
    >
      <div>
        <BrandLogo width={280} className="mb-7" />
        <p className="eyebrow block">App devocional • Acesso imediato</p>

        <h2
          id="hero-titulo"
          className="mt-4 text-[1.9rem] leading-tight text-ivory sm:text-4xl lg:text-[2.8rem]"
        >
          Quando faltarem palavras, comece por aqui.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-sand sm:text-lg">
          O {BRAND} reúne orações guiadas e reflexões para situações reais da vida. Reserve até 5
          minutos: ouça uma oração guiada curta, leia a reflexão e faça um pequeno passo para o seu
          dia.
        </p>

        <div className="mt-8 max-w-sm">
          <CheckoutButton location="hero">QUERO TER MEUS 5 MINUTOS DE FÉ</CheckoutButton>
        </div>
        <p className="mt-4 text-xs text-sand">{priceLine}</p>
      </div>
      <AppMockup />
    </section>
  );
}

const moments = [
  "Quando a mente não para",
  "Quando o medo do amanhã aperta",
  "Antes de uma decisão importante",
  "Quando o dia foi pesado",
  "Quando você precisa recomeçar",
  "Quando só quer agradecer",
  "Quando não sabe nem o que dizer em oração",
];

export function Identification() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="identificacao-titulo">
      <p className="eyebrow">Para os seus dias reais</p>
      <h2
        id="identificacao-titulo"
        className="mt-4 max-w-3xl text-2xl leading-snug text-ivory sm:text-3xl lg:text-4xl"
      >
        Você abre o aplicativo de acordo com o que está vivendo agora
      </h2>
      <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {moments.map((m) => (
          <li
            key={m}
            className="card-premium rounded-[18px] p-5 font-display text-base text-gold-light transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 sm:text-lg"
          >
            {m}
          </li>
        ))}
      </ul>
      <p
        className="card-premium mt-8 rounded-[20px] p-6 font-display text-lg text-ivory sm:p-7 sm:text-xl"
        style={{ boxShadow: "var(--shadow-gold)" }}
      >
        Não é preciso saber por onde começar. Basta dizer o que você está sentindo hoje.
      </p>
    </section>
  );
}

const howItWorks = [
  {
    title: "Escolha o que você está vivendo",
    text: "Ansiedade, medo, cansaço, uma decisão, um recomeço ou gratidão: você começa pelo momento, não pelo tema teológico.",
  },
  {
    title: "Ouça a oração e a reflexão sugeridas",
    text: "Uma oração guiada de 1 a 3 minutos conduz o seu momento e uma reflexão curta ajuda a enxergar o dia com mais calma.",
  },
  {
    title: "Reserve até 5 minutos e siga seu dia",
    text: "Ouvir, refletir e dar um pequeno passo. Sem meta, sem cobrança e sem precisar de um tempo longo que você não tem.",
  },
];


export function HowItWorks() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="como-funciona-titulo">
      <p className="eyebrow">Como funciona</p>
      <h2 id="como-funciona-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
        Três passos simples, no seu ritmo
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

const features = [
  {
    title: "Orações guiadas e narradas",
    text: "Áudios curtos que conduzem a oração quando faltam palavras.",
  },
  {
    title: "Reflexões para situações reais",
    text: "Textos breves sobre medo, cansaço, decisões, recomeços e gratidão.",
  },
  {
    title: "Orações curtas, de 1 a 3 minutos",
    text: "Uma pausa completa de até 5 minutos, pensada para caber em um dia comum.",
  },

  { title: "Conteúdos por tema", text: "Paz, direção, esperança, força, confiança e presença." },
  {
    title: "Jornada guiada de 28 dias",
    text: "Uma sequência opcional para criar constância, sem prazo para concluir.",
  },
  { title: "Favoritos", text: "Salve as orações que tocaram você e volte quando precisar." },
  { title: "Histórico e progresso", text: "Retome de onde parou, sem começar tudo de novo." },
  { title: "Diário privado", text: "Escreva pedidos, gratidões e percepções só para você." },
  { title: "Transcrições", text: "Leia o texto completo quando preferir não ouvir." },
  { title: "Lembretes opcionais", text: "Ative um aviso diário apenas se isso ajudar você." },
];

export function Features() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="recursos-titulo">
      <p className="eyebrow">O que tem dentro</p>
      <h2 id="recursos-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
        Recursos do aplicativo
      </h2>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      <div className="mx-auto mt-10 max-w-sm">
        <CheckoutButton location="pos_recursos" subLabel={priceLine}>
          QUERO TER MEUS 5 MINUTOS DE FÉ
        </CheckoutButton>
      </div>
    </section>

  );
}

export function Emotional() {
  return (
    <section
      className="faith-section-bg border-y py-14 lg:py-20"
      style={{ borderColor: "oklch(0.76 0.106 79 / 25%)" }}
      aria-labelledby="emocional-titulo"
    >
      <div className={`${container} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <p className="eyebrow">Cinco minutos possíveis</p>
          <h2
            id="emocional-titulo"
            className="mt-4 text-2xl leading-snug text-ivory sm:text-3xl lg:text-4xl"
          >
            Você não precisa esperar o dia desmoronar para lembrar da sua fé.
          </h2>
          <div className="mt-6 grid gap-4 text-base leading-relaxed text-sand sm:text-lg">
            <p>
              Esses minutos podem acontecer antes de todo mundo acordar, no intervalo do trabalho, no
              carro parado esperando alguém, na fila, no sofá à noite.
            </p>
            <p>
              Não é preciso um lugar perfeito nem uma hora silenciosa. É preciso apenas um pequeno
              espaço — e algo pronto para conduzir você nele.
            </p>
          </div>
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
            src="/images/app-cafe-manha-v3.webp"
            alt={`Momento devocional no café da manhã com o aplicativo ${BRAND}`}
            width={1024}
            height={768}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-[18px]"
          />
        </figure>
      </div>
    </section>
  );
}

const samples = [
  {
    theme: "Paz",
    title: "Oração para acalmar o coração",
    duration: "5 min",
    excerpt:
      "Respire com calma. Antes de pedir, apenas permaneça: não é preciso encontrar as palavras certas para estar em oração.",
  },
  {
    theme: "Direção",
    title: "Antes de tomar uma decisão",
    duration: "5 min",
    excerpt:
      "Discernir não é adivinhar o futuro. É olhar com honestidade para o que existe hoje e escolher o próximo passo possível.",
  },
  {
    theme: "Força",
    title: "Oração para dias de cansaço",
    duration: "5 min",
    excerpt:
      "Você não precisa dar conta de tudo hoje. Deixe descansar por alguns minutos aquilo que pode esperar.",
  },
  {
    theme: "Confiança",
    title: "Quando o medo do amanhã aparece",
    duration: "5 min",
    excerpt:
      "Confiar não é ter certeza de tudo. Muitas vezes é continuar caminhando com perguntas ainda abertas.",
  },
  {
    theme: "Esperança",
    title: "Uma oração para recomeçar",
    duration: "5 min",
    excerpt:
      "Recomeçar costuma parecer pequeno por dentro. E ainda assim é ali que a caminhada volta a acontecer.",
  },
];

export function Samples() {
  const [active, setActive] = useState(0);
  const item = samples[active]!;

  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="amostras-titulo">
      <p className="eyebrow">Amostras de conteúdo</p>
      <h2 id="amostras-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
        Exemplos do tipo de conteúdo que você encontra
      </h2>

      <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Temas de exemplo">
        {samples.map((d, i) => (
          <button
            key={d.theme}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-controls="amostra-preview"
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

      <div id="amostra-preview" className="card-premium mt-6 rounded-[22px] p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.16em] text-gold">
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
  "Muitas vezes não sabe o que dizer quando vai orar",
  "Prefere ouvir pelo celular em vez de ler textos longos",
  "Busca uma prática de fé sem culpa e sem cobrança",
  "Quer levar a fé para situações concretas do cotidiano",
];

export function ForWho() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="para-quem-titulo">
      <p className="eyebrow">Para quem é</p>
      <h2 id="para-quem-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
        O {BRAND} pode fazer sentido para você se…
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
  `Acesso ao aplicativo ${BRAND}`,
  "Biblioteca de orações guiadas e narradas",
  "Reflexões curtas por tema e situação",
  "Jornada guiada de 28 dias",
  "Diário privado, favoritos e histórico",
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
        <div
          ref={ref}
          className="card-premium mx-auto max-w-xl rounded-[26px] p-7 text-center sm:p-10"
        >
          <p className="eyebrow">Comece hoje</p>
          <h2 id="oferta-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl">
            Acesso completo ao {BRAND}
          </h2>
          <p className="mt-6 font-display text-5xl text-gold-light sm:text-6xl">{PRICE}</p>
          <p className="mt-3 text-sm text-sand">
            Pagamento único. Sem mensalidade. Acesso vitalício ao conteúdo adquirido.
          </p>
          <div className="mt-7">
            <CheckoutButton location="oferta">QUERO TER MEUS 5 MINUTOS DE FÉ</CheckoutButton>
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
    <section
      className={`${container} py-14 text-center lg:py-20`}
      aria-labelledby="encerramento-titulo"
    >
      <BrandLogo width={230} align="center" className="mb-8" />
      <h2

        id="encerramento-titulo"
        className="mx-auto max-w-3xl text-2xl leading-snug text-ivory sm:text-3xl lg:text-4xl"
      >
        Talvez você não precise de mais uma promessa para mudar sua vida. Talvez precise apenas de 5
        minutos para não atravessar tudo sozinho.
      </h2>
      <div className="mx-auto mt-9 max-w-sm">
        <CheckoutButton location="encerramento" subLabel={priceLine}>
          QUERO TER MEUS 5 MINUTOS DE FÉ
        </CheckoutButton>
      </div>
      <p className="mt-6 font-display text-lg text-gold-light sm:text-xl">
        Uma Palavra. Uma oração. Cinco minutos com Deus.
      </p>
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
        <BrandLogo width={250} align="center" />
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
          O {BRAND} oferece conteúdos devocionais e educacionais. Não possui vínculo, representação
          ou endosso de padres, pastores, igrejas ou personalidades religiosas. O conteúdo não
          substitui acompanhamento pastoral, médico ou psicológico e não promete cura, milagre ou
          resultado espiritual específico.
        </p>
        <p className="text-xs text-sand/70">© 2026 {BRAND}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export function SalesPage() {
  return (
    <>
      <Bridge />
      <Hero />
      <Identification />
      <HowItWorks />
      <Features />
      <Emotional />
      <Samples />
      <ForWho />
      <Included />
      <Offer />
      <Guarantee />
      <Faq />
      <Closing />
    </>
  );
}
