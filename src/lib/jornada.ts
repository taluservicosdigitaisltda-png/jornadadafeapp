export const PERFECTPAY_CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQFKP5";

export const ANSWERS_KEY = "jornada_quiz_answers";
export const UTM_KEY = "jornada_utms";

/* ---------------------------------- quiz ---------------------------------- */

export type QuizQuestion = {
  id: "busca" | "dificuldade" | "tempo" | "formato";
  label: string;
  options: string[];
};

export const questions: QuizQuestion[] = [
  {
    id: "busca",
    label: "O que seu coração mais busca neste momento?",
    options: ["Paz", "Direção", "Esperança", "Gratidão", "Força"],
  },
  {
    id: "dificuldade",
    label: "O que mais dificulta sua caminhada hoje?",
    options: [
      "Não sei como começar a orar",
      "Tenho dificuldade para manter constância",
      "Quero compreender melhor a Palavra",
      "Minha mente anda muito acelerada",
      "Estou vivendo uma decisão importante",
    ],
  },
  {
    id: "tempo",
    label: "Quanto tempo você conseguiria reservar por dia?",
    options: [
      "Cerca de 5 minutos",
      "Entre 5 e 10 minutos",
      "Mais de 10 minutos",
      "Ainda não tenho uma rotina",
    ],
  },
  {
    id: "formato",
    label: "Como você prefere viver esse momento?",
    options: [
      "Ouvindo uma oração",
      "Lendo uma reflexão",
      "Escrevendo no meu diário",
      "Combinando as três formas",
    ],
  },
];

export type Answers = Partial<Record<QuizQuestion["id"], string>>;

export type ResultProfile = {
  name: string;
  text: string;
  content: { title: string; excerpt: string };
};

export const results: Record<string, ResultProfile> = {
  Paz: {
    name: "Paz e Presença",
    text: "Pelo que você respondeu, o silêncio parece ser o que mais falta nos seus dias. Um caminho possível é começar por orações curtas e narradas, que ajudam a desacelerar antes de qualquer outra coisa. Alguns minutos já são um bom começo.",
    content: {
      title: "Oração para acalmar o coração",
      excerpt:
        "Antes de pedir qualquer coisa, respire. Não é preciso encontrar as palavras perfeitas para permanecer em oração.",
    },
  },
  Direção: {
    name: "Clareza e Confiança",
    text: "Você parece estar diante de escolhas que pedem calma para serem olhadas de perto. Um caminho possível é unir uma oração breve a uma reflexão bíblica sobre discernimento — não para receber respostas prontas, mas para pensar com mais serenidade.",
    content: {
      title: "Reflexão: quando é preciso decidir",
      excerpt:
        "Discernir não é adivinhar o futuro. É olhar com honestidade para o que existe hoje e escolher o próximo passo possível.",
    },
  },
  Esperança: {
    name: "Recomeço e Perseverança",
    text: "Recomeçar costuma exigir mais coragem do que começar. Um caminho possível é uma sequência guiada, dia após dia, que não depende de você acertar sempre. Se um dia passar em branco, a caminhada continua no seguinte.",
    content: {
      title: "Oração de recomeço",
      excerpt:
        "Todo recomeço parece pequeno por dentro. E ainda assim é ali que a caminhada volta a acontecer.",
    },
  },
  Gratidão: {
    name: "Presença e Reconhecimento",
    text: "Quem busca gratidão normalmente já percebe algo de bom acontecendo. Um caminho possível é reservar um momento fixo para reconhecer isso, com uma oração narrada e algumas linhas no diário.",
    content: {
      title: "Reflexão: o que já foi recebido",
      excerpt:
        "Gratidão não ignora o que dói. Ela apenas escolhe também enxergar aquilo que sustentou você até aqui.",
    },
  },
  Força: {
    name: "Coragem e Descanso",
    text: "Há momentos em que a força pedida não é a de fazer mais, e sim a de descansar sem culpa. Um caminho possível é alternar orações de coragem com reflexões sobre entrega, respeitando o seu ritmo.",
    content: {
      title: "Oração para dias de cansaço",
      excerpt:
        "Você não precisa dar conta de tudo hoje. Entregue o peso que não é seu e siga um passo por vez.",
    },
  },
};

export const neutralResult: ResultProfile = {
  name: "Primeiros Passos",
  text: "Você chegou aqui sem responder o quiz, e isso não é problema. A sugestão neutra é simples: comece por uma oração curta narrada e siga a caminhada guiada no seu ritmo. Se quiser algo mais próximo do seu momento, o quiz leva menos de um minuto.",
  content: {
    title: "Oração para começar",
    excerpt: "Nem sempre sabemos o que dizer. Começar é apenas reservar um instante e permanecer.",
  },
};

export function durationFor(tempo?: string): string {
  switch (tempo) {
    case "Cerca de 5 minutos":
      return "4 min";
    case "Entre 5 e 10 minutos":
      return "8 min";
    case "Mais de 10 minutos":
      return "12 min";
    default:
      return "3 min";
  }
}

export function resultFor(answers: Answers): ResultProfile {
  const busca = answers.busca;
  if (busca && results[busca]) return results[busca]!;
  return neutralResult;
}

/* ------------------------------ session store ----------------------------- */

export function saveAnswers(answers: Answers) {
  try {
    sessionStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
  } catch {
    /* ignore */
  }
}

export function loadAnswers(): Answers {
  try {
    const raw = sessionStorage.getItem(ANSWERS_KEY);
    return raw ? (JSON.parse(raw) as Answers) : {};
  } catch {
    return {};
  }
}

export function clearAnswers() {
  try {
    sessionStorage.removeItem(ANSWERS_KEY);
  } catch {
    /* ignore */
  }
}

export function captureUtms() {
  if (typeof window === "undefined") return;
  try {
    const current = window.location.search.replace(/^\?/, "");
    if (current) {
      const stored = new URLSearchParams(sessionStorage.getItem(UTM_KEY) ?? "");
      new URLSearchParams(current).forEach((value, key) => stored.set(key, value));
      sessionStorage.setItem(UTM_KEY, stored.toString());
    }
  } catch {
    /* ignore */
  }
}

export function storedQueryString(): string {
  if (typeof window === "undefined") return "";
  try {
    const params = new URLSearchParams(sessionStorage.getItem(UTM_KEY) ?? "");
    new URLSearchParams(window.location.search.replace(/^\?/, "")).forEach((value, key) =>
      params.set(key, value),
    );
    return params.toString();
  } catch {
    return "";
  }
}

export function checkoutUrl(): string {
  const qs = storedQueryString();
  if (!qs) return PERFECTPAY_CHECKOUT_URL;
  const sep = PERFECTPAY_CHECKOUT_URL.includes("?") ? "&" : "?";
  return `${PERFECTPAY_CHECKOUT_URL}${sep}${qs}`;
}

/* -------------------------------- dataLayer ------------------------------- */

type DataLayerEvent = Record<string, unknown> & { event: string };

export function track(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  try {
    const w = window as unknown as { dataLayer?: DataLayerEvent[] };
    if (!Array.isArray(w.dataLayer)) w.dataLayer = [];
    w.dataLayer.push({ event, ...payload });
  } catch {
    /* ignore */
  }
}
