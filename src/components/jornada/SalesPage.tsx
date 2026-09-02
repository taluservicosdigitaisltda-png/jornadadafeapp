import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  CalendarCheck,
  Headphones,
  Infinity as InfinityIcon,
  Lock,
  Mail,
  PenLine,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { AppMockup, BrandLogo, CheckoutButton, ConfirmBadge, container } from "./shared";
import { AudioSample } from "./AudioSample";
import { StickyCta } from "./StickyCta";
import { useScrollDepth, useTrackInView } from "./hooks";

import { Faq } from "./Faq";
import { BRAND, PRICE } from "@/lib/jornada";

const priceLine = `${PRICE} • pagamento único • acesso vitalício`;

/* ---------------------------------- hero ---------------------------------- */

export function Hero() {
  return (
    <section
      id="oferta-principal"
      className="relative overflow-hidden py-14 lg:py-20"
      aria-labelledby="hero-titulo"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage: "url('/images/secao-biblia-cruz-bg.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          maskImage: "radial-gradient(70% 60% at 70% 40%, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(70% 60% at 70% 40%, black, transparent 75%)",
        }}
        aria-hidden="true"
      />
      <div className={`${container} relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <BrandLogo width={280} className="mb-7" />
          <p className="eyebrow block">Quando você não souber como orar…</p>

          <h2
            id="hero-titulo"
            className="mt-4 text-[1.9rem] leading-tight text-ivory sm:text-4xl lg:text-[2.8rem]"
          >
            Quando faltarem palavras, comece por aqui.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-sand sm:text-lg">
            Escolha o que está vivendo. Aperte o play. E permita que uma oração guiada conduza os
            próximos 5 minutos com Deus.
          </p>

          <div className="mt-8 max-w-sm">
            <CheckoutButton location="hero">QUERO TER MEUS 5 MINUTOS DE FÉ</CheckoutButton>
          </div>
          <p className="mt-4 text-xs text-sand">{priceLine}</p>
        </div>
        <AppMockup />
      </div>
    </section>
  );
}

/* -------------------------- moments (photo grid) -------------------------- */

const moments = [
  {
    title: "Antes do dia começar",
    image: "/images/momento-antes-do-dia.webp",
    alt: "Mulher na mesa da cozinha ao amanhecer, com café e Bíblia aberta, respirando fundo antes de começar o dia",
    position: "50% 35%",
  },
  {
    title: "Quando a mente não para",
    image: "/images/momento-mente-nao-para.webp",
    alt: "Pessoa em home office no fim da tarde, notebook fechado e fones nos ouvidos, fazendo uma pausa com os olhos fechados",
    position: "50% 30%",
  },
  {
    title: "Antes de uma decisão",
    image: "/images/momento-antes-decisao.webp",
    alt: "Homem à mesa com Bíblia aberta e caderno, olhar pensativo buscando discernimento",
    position: "45% 35%",
  },
  {
    title: "Quando o medo do amanhã aperta",
    image: "/images/momento-medo-amanha.webp",
    alt: "Mulher sentada sozinha em uma igreja quase vazia, mãos juntas em oração sob a luz do vitral",
    position: "40% 30%",
  },
  {
    title: "Depois de um dia pesado",
    image: "/images/momento-dia-pesado.webp",
    alt: "Mulher à noite no sofá, coberta por um cobertor, com fones e celular na mão sob a luz do abajur",
    position: "55% 35%",
  },
  {
    title: "Quando você só quer agradecer",
    image: "/images/momento-agradecer.webp",
    alt: "Mulher na cozinha pela manhã com Bíblia aberta e café, olhos fechados e leve sorriso de gratidão",
    position: "45% 30%",
  },
];

export function Moments() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="momentos-titulo">
      <p className="eyebrow">Para os seus dias reais</p>
      <h2
        id="momentos-titulo"
        className="mt-4 max-w-3xl text-2xl leading-snug text-ivory sm:text-3xl lg:text-4xl"
      >
        Em qual momento você mais precisa de Deus?
      </h2>

      <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {moments.map((moment) => (
          <li
            key={moment.title}
            className="group relative overflow-hidden rounded-[20px] border"
            style={{
              borderColor: "oklch(0.76 0.106 79 / 28%)",
              boxShadow: "var(--shadow-deep)",
            }}
          >
            <img
              src={moment.image}
              alt={moment.alt}
              width={1024}
              height={768}
              loading="lazy"
              decoding="async"
              style={{ objectPosition: moment.position }}
              className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] sm:h-[240px]"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, oklch(0.09 0.007 55 / 20%) 0%, oklch(0.09 0.007 55 / 82%) 65%, oklch(0.09 0.007 55 / 95%) 100%)",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-display text-lg text-ivory">{moment.title}</h3>
              <p className="mt-1 text-xs tracking-[0.06em] text-gold-light">
                Existe uma oração para este momento
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------------------------- product demo (3) ---------------------------- */

function ScreenFrame({ children, step }: { children: React.ReactNode; step: number }) {
  return (
    <li className="relative">
      <div
        className="mx-auto w-full max-w-[330px] rounded-[26px] border p-4"
        style={{
          borderColor: "oklch(0.76 0.106 79 / 35%)",
          background: "var(--gradient-brown)",
          boxShadow: "var(--shadow-deep)",
        }}
      >
        <div
          className="rounded-[18px] border p-5"
          style={{
            borderColor: "oklch(0.76 0.106 79 / 20%)",
            background: "var(--gradient-espresso)",
          }}
        >
          <span className="font-display text-xs text-gold/70">
            {String(step).padStart(2, "0")}
          </span>
          {children}
        </div>
      </div>
    </li>
  );
}

export function ProductDemo() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="demo-titulo">
      <p className="eyebrow">Como funciona</p>
      <h2 id="demo-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
        Veja como seus 5 minutos acontecem
      </h2>

      <ul className="mt-10 grid gap-8 md:grid-cols-3 md:gap-5">
        <ScreenFrame step={1}>
          <h3 className="mt-3 font-display text-lg text-ivory">Como você está se sentindo hoje?</h3>
          <ul className="mt-4 space-y-2">
            {["Cansado(a)", "Ansioso(a)", "Preciso de direção"].map((option) => (
              <li
                key={option}
                className="rounded-xl border px-4 py-3 text-sm text-sand"
                style={{ borderColor: "oklch(0.76 0.106 79 / 25%)" }}
              >
                {option}
              </li>
            ))}
          </ul>
        </ScreenFrame>

        <ScreenFrame step={2}>
          <h3 className="mt-3 font-display text-lg text-ivory">Oração indicada para você</h3>
          <div
            className="mt-4 flex items-center gap-4 rounded-xl border px-4 py-4"
            style={{ borderColor: "oklch(0.76 0.106 79 / 25%)" }}
          >
            <span
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-ink"
              style={{ background: "var(--gradient-gold)" }}
              aria-hidden="true"
            >
              <Play className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-ivory">Quando a mente não para</span>
              <span className="block text-xs text-sand">cerca de 5 minutos</span>
            </span>
          </div>
        </ScreenFrame>

        <ScreenFrame step={3}>
          <h3 className="mt-3 font-display text-lg text-ivory">Depois da oração</h3>
          <ul className="mt-4 space-y-2 text-sm text-sand">
            <li
              className="rounded-xl border px-4 py-3"
              style={{ borderColor: "oklch(0.76 0.106 79 / 25%)" }}
            >
              Reflexão curta do dia
            </li>
            <li
              className="rounded-xl border px-4 py-3"
              style={{ borderColor: "oklch(0.76 0.106 79 / 25%)" }}
            >
              Um pequeno passo prático
            </li>
            <li
              className="rounded-xl border px-4 py-3"
              style={{ borderColor: "oklch(0.76 0.106 79 / 25%)" }}
            >
              Escreva no seu diário privado
            </li>
          </ul>
        </ScreenFrame>
      </ul>
    </section>
  );
}

/* --------------------------------- verses --------------------------------- */

export function Verse({ text, reference }: { text: string; reference: string }) {
  return (
    <section
      className="faith-section-bg border-y py-16 lg:py-24"
      style={{ borderColor: "oklch(0.76 0.106 79 / 22%)" }}
      aria-label={`Versículo: ${reference}`}
    >
      <blockquote className={`${container} max-w-3xl text-center`}>
        <p className="font-display text-xl leading-relaxed text-ivory sm:text-2xl lg:text-[1.9rem]">
          “{text}”
        </p>
        <footer className="mt-5 text-xs uppercase tracking-[0.2em] text-gold">{reference}</footer>
      </blockquote>
    </section>
  );
}

/* --------------------------------- pillars -------------------------------- */

const pillars = [
  {
    icon: BookOpen,
    title: "Orações para o que você está vivendo",
    text: "Biblioteca organizada por momento real: ansiedade, medo, cansaço, decisões, recomeços e gratidão.",
  },
  {
    icon: Headphones,
    title: "Aperte o play e ore",
    text: "Orações guiadas e narradas, de cerca de 5 minutos, que conduzem quando faltam palavras.",
  },
  {
    icon: CalendarCheck,
    title: "28 dias com Deus",
    text: "Uma jornada opcional para criar constância, um dia de cada vez, sem prazo para concluir.",
  },
  {
    icon: PenLine,
    title: "Seu espaço particular",
    text: "Diário privado para escrever pedidos, gratidões e o que você não diria em voz alta.",
  },
];

export function Pillars() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="pilares-titulo">
      <p className="eyebrow">O que tem dentro</p>
      <h2 id="pilares-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
        Quatro pilares do aplicativo
      </h2>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
        {pillars.map(({ icon: Icon, title, text }) => (
          <li key={title} className="card-premium rounded-[22px] p-6 sm:p-7">
            <span
              className="grid h-12 w-12 place-items-center rounded-2xl border text-gold-light"
              style={{
                borderColor: "oklch(0.76 0.106 79 / 35%)",
                background: "oklch(0.16 0.02 60 / 70%)",
              }}
              aria-hidden="true"
            >
              <Icon className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <h3 className="mt-5 text-lg text-gold-light sm:text-xl">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-sand">{text}</p>
          </li>
        ))}
      </ul>

      <p className="mt-7 text-sm text-sand/80">
        + favoritos, histórico, transcrições, lembretes e outros recursos dentro do aplicativo.
      </p>

      <div className="mx-auto mt-10 max-w-sm">
        <CheckoutButton location="pos_recursos" subLabel={priceLine}>
          QUERO TER MEUS 5 MINUTOS DE FÉ
        </CheckoutButton>
      </div>
    </section>
  );
}

/* -------------------------------- 28 days -------------------------------- */

const weeks = [
  { week: "Semana 1", title: "Aqui e agora", text: "Aprender a parar por alguns minutos sem culpa." },
  { week: "Semana 2", title: "Confiar no processo", text: "Entregar o que não está sob o seu controle." },
  { week: "Semana 3", title: "Fé nas relações", text: "Família, perdão, paciência e palavras que constroem." },
  { week: "Semana 4", title: "Uma fé que se sustenta", text: "Constância possível para depois do dia 28." },
];

export function Journey() {
  return (
    <section
      className="relative overflow-hidden border-y py-14 lg:py-20"
      style={{ background: "var(--gradient-brown)", borderColor: "oklch(0.76 0.106 79 / 22%)" }}
      aria-labelledby="jornada-titulo"
    >
      <div className={`${container} relative`}>
        <p className="eyebrow">Jornada guiada</p>
        <h2 id="jornada-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
          28 dias com Deus
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-sand sm:text-lg">
          Uma sequência simples para criar constância sem cobrança: um dia de cada vez, no seu ritmo,
          podendo pausar e retomar quando quiser.
        </p>

        <div
          className="mt-9 h-1.5 w-full overflow-hidden rounded-full"
          style={{ backgroundColor: "oklch(0.76 0.106 79 / 18%)" }}
          aria-hidden="true"
        >
          <div
            className="h-full w-full rounded-full"
            style={{ background: "var(--gradient-gold)", opacity: 0.55 }}
          />
        </div>

        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {weeks.map((item, i) => (
            <li key={item.week} className="card-premium rounded-[20px] p-5">
              <span className="font-display text-sm text-gold/70">
                Dias {i * 7 + 1}–{i * 7 + 7}
              </span>
              <h3 className="mt-3 text-base text-gold-light">{item.week}</h3>
              <p className="mt-1 font-display text-lg text-ivory">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-sand">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------ emotional block --------------------------- */

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

/* -------------------------------- for who -------------------------------- */

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
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <figure
          className="overflow-hidden rounded-[24px] border p-2"
          style={{
            borderColor: "oklch(0.76 0.106 79 / 32%)",
            background: "var(--gradient-brown)",
            boxShadow: "var(--shadow-deep)",
          }}
        >
          <img
            src="/images/app-leitura-biblia-v3.webp"
            alt="Pessoa lendo a Bíblia com calma, em um momento comum do dia"
            width={1024}
            height={768}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-[18px]"
          />
        </figure>

        <div>
          <p className="eyebrow">Para quem é</p>
          <h2 id="para-quem-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
            O {BRAND} pode fazer sentido para você se…
          </h2>
          <ul className="mt-7 grid gap-4">
            {forWho.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-sand">
                <ConfirmBadge />
                <span className="min-w-0">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ trust section ----------------------------- */

const trust = [
  { icon: Lock, label: "Pagamento único" },
  { icon: ShieldCheck, label: "7 dias de garantia" },
  { icon: InfinityIcon, label: "Acesso vitalício ao conteúdo adquirido" },
  { icon: Mail, label: "Suporte por e-mail" },
  { icon: Sparkles, label: "Compra processada pela Perfect Pay" },
];

export function Trust() {
  return (
    <section className={`${container} py-12 lg:py-16`} aria-labelledby="confianca-titulo">
      <h2 id="confianca-titulo" className="text-2xl text-ivory sm:text-3xl">
        Compra tranquila, sem letras miúdas
      </h2>
      <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {trust.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-3 rounded-2xl border px-4 py-4 text-sm text-ivory"
            style={{
              borderColor: "oklch(0.76 0.106 79 / 25%)",
              background: "oklch(0.16 0.02 60 / 60%)",
            }}
          >
            <Icon className="h-5 w-5 shrink-0 text-gold-light" strokeWidth={1.6} aria-hidden="true" />
            <span className="min-w-0">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* --------------------------------- offer --------------------------------- */

const includedCompact = [
  "Biblioteca de orações",
  "Reflexões",
  "Jornada de 28 dias",
  "Diário privado",
  "Acesso pelo celular",
  "Sem mensalidade",
];

export function Offer() {
  const ref = useTrackInView<HTMLDivElement>("offer_view", 0.3);

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
          <h2 id="oferta-titulo" className="mt-4 text-2xl leading-snug text-ivory sm:text-3xl">
            Tudo isso para você ter um lugar para voltar quando precisar.
          </h2>

          <ul className="mt-7 grid gap-2 text-left sm:grid-cols-2">
            {includedCompact.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ivory">
                <ConfirmBadge />
                <span className="min-w-0">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-display text-lg text-sand sm:text-xl">
            Você não pagará {PRICE} todo mês.
          </p>
          <p className="mt-2 font-display text-5xl text-gold-light sm:text-6xl">{PRICE}</p>
          <p className="mt-2 font-display text-base text-gold sm:text-lg">uma única vez.</p>
          <p className="mt-4 text-sm text-sand">
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

/* -------------------------------- guarantee ------------------------------- */

export function Guarantee() {
  const ref = useTrackInView<HTMLDivElement>("guarantee_view", 0.4);

  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="garantia-titulo">
      <div
        ref={ref}
        className="card-premium flex flex-col items-center gap-8 rounded-[26px] p-7 text-center sm:flex-row sm:p-10 sm:text-left"
      >
        <div
          className="grid h-28 w-28 shrink-0 place-items-center rounded-full border text-ink"
          style={{ background: "var(--gradient-gold)", borderColor: "var(--gold-light)" }}
        >
          <ShieldCheck className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
          <span className="mt-1 font-display text-sm font-bold">7 DIAS</span>
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
          <p className="mt-4 text-sm text-sand">
            Dúvidas ou suporte:{" "}
            <a
              href="mailto:5minutosdefeapp@gmail.com"
              className="text-gold-light underline decoration-gold/40 underline-offset-4"
            >
              5minutosdefeapp@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- closing -------------------------------- */

export function Closing() {
  return (
    <section
      className="faith-section-bg border-t py-16 text-center lg:py-24"
      style={{ borderColor: "oklch(0.76 0.106 79 / 22%)" }}
      aria-labelledby="encerramento-titulo"
    >
      <div className={container}>
        <BrandLogo width={230} align="center" className="mb-8" />
        <h2
          id="encerramento-titulo"
          className="mx-auto max-w-3xl text-2xl leading-snug text-ivory sm:text-3xl lg:text-4xl"
        >
          Talvez você não precise de mais uma promessa para mudar sua vida. Talvez precise apenas de
          5 minutos para não atravessar tudo sozinho.
        </h2>
        <p className="mt-6 font-display text-lg text-gold-light sm:text-xl">
          Uma Palavra. Uma oração. Cinco minutos com Deus.
        </p>
        <div className="mx-auto mt-9 max-w-sm">
          <CheckoutButton location="encerramento" subLabel={priceLine}>
            QUERO TER MEUS 5 MINUTOS DE FÉ
          </CheckoutButton>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- footer -------------------------------- */

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
        <p className="text-xs text-sand/70">
          Suporte:{" "}
          <a
            href="mailto:5minutosdefeapp@gmail.com"
            className="underline decoration-gold/40 underline-offset-4 hover:text-gold-light"
          >
            5minutosdefeapp@gmail.com
          </a>
        </p>
        <p className="text-xs text-sand/70">© 2026 {BRAND}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

/* ------------------------------- sales page ------------------------------- */

export function SalesPage() {
  useScrollDepth();

  return (
    <>
      <Hero />
      <Moments />
      <ProductDemo />
      <AudioSample />
      <Verse
        text="Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês."
        reference="1 Pedro 5:7"
      />
      <Pillars />
      <Journey />
      <Emotional />
      <ForWho />
      <Trust />
      <Verse text="Aquietai-vos e sabei que eu sou Deus." reference="Salmos 46:10" />
      <Offer />
      <Guarantee />
      <Faq />
      <Closing />
      <StickyCta />
    </>
  );
}


