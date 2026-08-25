import { AppFrame, CHECKOUT_URL, ConfirmBadge, CtaButton, logoUrl } from "./shared";

const container = "mx-auto w-full max-w-[1140px] px-5 sm:px-8";

export function ConfirmationBar() {
  return (
    <aside
      aria-label="Confirmação da compra"
      className="border-b"
      style={{
        backgroundColor: "var(--ink)",
        borderColor: "oklch(0.76 0.106 79 / 30%)",
      }}
    >
      <div className={`${container} flex flex-col items-center gap-3 py-4 text-center sm:flex-row sm:text-left`}>
        <ConfirmBadge size="md" />
        <div className="min-w-0">
          <p className="font-display text-base text-ivory sm:text-lg">Compra aprovada com sucesso!</p>
          <p className="text-sm text-sand">
            Seu acesso à Jornada da Fé será enviado para o e-mail cadastrado.
          </p>
        </div>
      </div>
    </aside>
  );
}

const trustItems = ["Acesso imediato", "Compra segura", "Garantia de 7 dias"];

export function Hero() {
  return (
    <section className={`${container} grid items-center gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20`}>
      <div>
        <img
          src={logoUrl}
          alt="Jornada da Fé"
          width={960}
          height={360}
          className="h-auto w-[240px] max-w-full sm:w-[300px]"
        />
        <p className="eyebrow mt-8 block">Uma oportunidade especial antes de você continuar</p>
        <h1 className="mt-4 text-3xl leading-tight text-ivory sm:text-4xl lg:text-[2.9rem]">
          Leve sua Jornada da Fé com você, todos os dias
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-sand sm:text-lg">
          Tenha orações e reflexões narradas no celular para ouvir quando precisar de serenidade,
          direção e fortalecimento espiritual.
        </p>

        <div className="card-premium mt-9 rounded-[22px] p-6 sm:p-7">
          <p className="eyebrow">Oferta exclusiva nesta página</p>
          <p className="mt-3 font-display text-4xl text-gold-light sm:text-5xl">R$ 19,00</p>
          <p className="mt-1 text-sm text-sand">pagamento único · acesso vitalício</p>
          <div className="mt-6">
            <CtaButton subLabel="Acesso liberado após a confirmação">
              QUERO ADICIONAR O APLICATIVO
            </CtaButton>
          </div>
        </div>

        <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
          {trustItems.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-sand">
              <ConfirmBadge />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="pb-10 sm:pb-8">
        <AppFrame floating />
      </div>
    </section>
  );
}

const benefits = [
  {
    title: "21 reflexões narradas",
    text: "Conteúdos breves e profundos para diferentes momentos da sua caminhada espiritual.",
  },
  {
    title: "Novidades todos os meses",
    text: "Novas orações e reflexões serão adicionadas para manter sua experiência sempre renovada.",
  },
  {
    title: "Acesso pelo celular",
    text: "Ouça em casa, no intervalo do trabalho, antes de dormir ou quando sentir necessidade.",
  },
  {
    title: "Acesso vitalício",
    text: "Faça um único pagamento e mantenha o aplicativo disponível, sem mensalidades.",
  },
];

export function Benefits() {
  return (
    <section className={`${container} py-14 lg:py-20`} aria-labelledby="beneficios-titulo">
      <p className="eyebrow">Sua fé também pode acompanhar a sua rotina</p>
      <h2 id="beneficios-titulo" className="mt-4 max-w-2xl text-2xl text-ivory sm:text-3xl lg:text-4xl">
        Um momento de oração ao alcance das suas mãos
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-sand">
        Abra o aplicativo, escolha uma reflexão e permita-se alguns minutos de silêncio, Palavra e
        oração.
      </p>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <li
            key={b.title}
            className="card-premium rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60"
          >
            <span className="font-display text-sm text-gold/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg text-gold-light">{b.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-sand">{b.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const experience = [
  {
    title: "Escolha pelo que está vivendo",
    text: "Ansiedade, espera, recomeço, decisões, perdão, família e outros temas.",
  },
  {
    title: "Aperte o play e desacelere",
    text: "Narração serena, ritmo contemplativo e uma oração breve ao final.",
  },
  {
    title: "Continue depois das 21 reflexões",
    text: "Receba novos conteúdos todos os meses, sem pagar novamente.",
  },
];

export function Experience() {
  return (
    <section className={`${container} grid items-center gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20`}>
      <AppFrame />
      <div>
        <p className="eyebrow">Um complemento para o curso que você acaba de adquirir</p>
        <h2 className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
          Transforme pequenos intervalos em momentos de presença
        </h2>
        <p className="mt-4 text-base leading-relaxed text-sand">
          O aplicativo foi pensado para ajudar você a manter a fé presente na vida cotidiana, mesmo
          nos dias mais corridos.
        </p>

        <ul className="mt-8 space-y-6">
          {experience.map((item) => (
            <li key={item.title} className="flex gap-4">
              <ConfirmBadge size="md" />
              <div className="min-w-0">
                <h3 className="text-lg text-gold-light">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-sand">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-xl border border-gold/40 px-5 py-3 text-sm font-semibold text-gold-light transition-colors hover:bg-gold/10"
        >
          Adicionar o aplicativo à minha Jornada →
        </a>
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section className={`${container} py-14 lg:py-20`}>
      <div className="card-premium flex flex-col items-center gap-8 rounded-[26px] p-7 text-center sm:flex-row sm:p-10 sm:text-left">
        <div
          className="grid h-28 w-28 shrink-0 place-items-center rounded-full border text-center font-display text-lg text-ink"
          style={{ background: "var(--gradient-gold)", borderColor: "var(--gold-light)" }}
        >
          7 DIAS
        </div>
        <div className="min-w-0">
          <p className="eyebrow">Experimente com tranquilidade</p>
          <h2 className="mt-3 text-2xl text-ivory sm:text-3xl">Sua decisão está protegida</h2>
          <p className="mt-3 text-sm leading-relaxed text-sand sm:text-base">
            Você terá 7 dias após a compra para conhecer o aplicativo. Se entender que ele não faz
            sentido para a sua caminhada, poderá solicitar o reembolso dentro desse período.
          </p>
        </div>
      </div>
    </section>
  );
}

const finalList = [
  "21 reflexões narradas",
  "Novos conteúdos mensais",
  "Acesso vitalício",
  "Garantia de 7 dias",
];

export function FinalOffer() {
  return (
    <section
      className="relative overflow-hidden border-y py-14 lg:py-20"
      style={{ background: "var(--gradient-brown)", borderColor: "oklch(0.76 0.106 79 / 25%)" }}
      aria-labelledby="oferta-final-titulo"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-40"
        style={{
          background: "radial-gradient(60% 100% at 50% 0%, oklch(0.76 0.106 79 / 22%), transparent)",
        }}
        aria-hidden="true"
      />
      <div className={`${container} relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <p className="eyebrow">Oferta complementar e opcional</p>
          <h2 id="oferta-final-titulo" className="mt-4 text-2xl text-ivory sm:text-3xl lg:text-4xl">
            Continue sua Jornada da Fé também pelo celular
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sand">
            Sua compra principal já está confirmada. Se desejar, adicione agora o aplicativo com
            pagamento único e acesso vitalício.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {finalList.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ivory">
                <ConfirmBadge />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-premium rounded-[26px] p-7 text-center sm:p-9">
          <p className="eyebrow">Condição especial nesta página</p>
          <p className="mt-4 font-display text-5xl text-gold-light">R$ 19,00</p>
          <p className="mt-2 text-sm text-sand">pagamento único · sem mensalidades</p>
          <div className="mt-7">
            <CtaButton subLabel="Adicionar à minha Jornada da Fé">SIM, QUERO O APLICATIVO</CtaButton>
          </div>
          <p className="mt-4 text-xs text-sand">
            🔒 Pagamento processado com segurança pela Perfect Pay
          </p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-12" style={{ borderColor: "oklch(0.76 0.106 79 / 20%)" }}>
      <div className={`${container} flex flex-col items-center gap-4 text-center`}>
        <img
          src={logoUrl}
          alt="Jornada da Fé"
          width={960}
          height={360}
          loading="lazy"
          className="h-auto w-[200px] max-w-full"
        />
        <p className="text-sm text-sand">
          Uma caminhada de oração, Palavra e fé para a vida cotidiana.
        </p>
        <p className="text-xs text-sand/70">© 2026 Jornada da Fé. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
