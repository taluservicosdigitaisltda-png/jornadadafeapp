export const PERFECTPAY_CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQFKP5";

export const ANSWERS_KEY = "cinco_minutos_de_fe_quiz_answers";
export const UTM_KEY = "cinco_minutos_de_fe_utms";

export type QuizQuestion = {
  id: "momento" | "necessidade" | "obstaculo";
  label: string;
  options: string[];
};

export const questions: QuizQuestion[] = [
  {
    id: "momento",
    label: "Em qual momento do dia você mais sente falta de estar com Deus?",
    options: [
      "Logo ao acordar",
      "Durante a correria do dia",
      "Quando minha mente fica acelerada",
      "Antes de tomar uma decisão",
      "Antes de dormir",
    ],
  },
  {
    id: "necessidade",
    label: "O que você gostaria de encontrar nesses 5 minutos?",
    options: ["Paz", "Direção", "Esperança", "Gratidão", "Força"],
  },
  {
    id: "obstaculo",
    label: "O que normalmente impede você de manter esse momento?",
    options: [
      "Não sei como começar",
      "Falta de constância",
      "Conteúdos muito longos",
      "Dificuldade para compreender a Bíblia",
      "Minha rotina nunca é igual",
    ],
  },
];

export type Answers = Partial<Record<QuizQuestion["id"], string>>;

export type ResultProfile = {
  name: string;
  text: string;
  content: { title: string; excerpt: string };
};

const needProfiles: Record<string, Omit<ResultProfile, "text">> = {
  Paz: {
    name: "Paz e Presença",
    content: {
      title: "5 minutos para acalmar o coração",
      excerpt:
        "Respire com calma. Você não precisa encontrar as palavras perfeitas. Por alguns minutos, apenas permaneça na presença de Deus.",
    },
  },
  Direção: {
    name: "Clareza e Confiança",
    content: {
      title: "5 minutos para buscar direção",
      excerpt:
        "Nem toda resposta aparece de uma vez. Às vezes, a direção começa quando o coração desacelera e consegue enxergar o próximo passo possível.",
    },
  },
  Esperança: {
    name: "Recomeço e Esperança",
    content: {
      title: "5 minutos para renovar a esperança",
      excerpt:
        "Todo recomeço parece pequeno no início. Ainda assim, pode ser exatamente ali que a esperança volta a encontrar espaço.",
    },
  },
  Gratidão: {
    name: "Gratidão e Presença",
    content: {
      title: "5 minutos de gratidão",
      excerpt:
        "Gratidão não apaga o que foi difícil. Ela abre espaço para perceber também aquilo que acolheu e sustentou você até aqui.",
    },
  },
  Força: {
    name: "Força e Descanso",
    content: {
      title: "5 minutos para encontrar força",
      excerpt:
        "Você não precisa resolver tudo neste instante. Entregue a Deus o peso que não precisa carregar sozinho e siga um passo por vez.",
    },
  },
};

const momentCopy: Record<string, string> = {
  "Logo ao acordar": "Começar o dia com Palavra e oração pode ajudar você a seguir com mais presença e intenção.",
  "Durante a correria do dia": "Cinco minutos no meio da rotina podem devolver atenção ao que realmente importa.",
  "Quando minha mente fica acelerada": "Antes de continuar tentando resolver tudo, vale criar um pequeno espaço de silêncio e oração.",
  "Antes de tomar uma decisão": "Um momento de calma pode ajudar você a olhar suas escolhas com mais serenidade.",
  "Antes de dormir": "Encerrar o dia com uma oração breve pode ser uma forma simples de entregar o que ficou pesado.",
};

const obstacleCopy: Record<string, string> = {
  "Não sei como começar": "Por isso, sua recomendação já começa com palavras guiadas: você só precisa apertar o play.",
  "Falta de constância": "Por isso, a proposta é simples e possível: cinco minutos, sem metas rígidas e sem culpa se um dia não acontecer.",
  "Conteúdos muito longos": "Por isso, sua recomendação é curta e direta, pensada para caber até nos dias mais cheios.",
  "Dificuldade para compreender a Bíblia": "Por isso, cada reflexão usa linguagem simples e indica a passagem bíblica relacionada.",
  "Minha rotina nunca é igual": "Por isso, o conteúdo fica disponível para você escolher o melhor horário de cada dia.",
};

export const neutralResult: ResultProfile = {
  name: "Seu primeiro momento",
  text: "Um bom começo pode ser reservar cinco minutos, escolher o que seu coração precisa e apenas acompanhar uma oração narrada. Sem pressão e sem precisar saber as palavras certas.",
  content: {
    title: "5 minutos para começar",
    excerpt:
      "Antes de pedir qualquer coisa, respire. Estes minutos não precisam ser perfeitos. Eles só precisam ser verdadeiros.",
  },
};

export function resultFor(answers: Answers): ResultProfile {
  const need = answers.necessidade ? needProfiles[answers.necessidade] : undefined;
  if (!need) return neutralResult;

  const moment = answers.momento ? momentCopy[answers.momento] : "Cinco minutos já podem ser um começo possível.";
  const obstacle = answers.obstaculo ? obstacleCopy[answers.obstaculo] : "Comece no seu ritmo e retome sempre que precisar.";
  return { ...need, text: `${moment} ${obstacle}` };
}

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
      const params = new URLSearchParams(current);
      const stored = new URLSearchParams(sessionStorage.getItem(UTM_KEY) ?? "");
      params.forEach((value, key) => stored.set(key, value));
      sessionStorage.setItem(UTM_KEY, stored.toString());
    }
  } catch {
    /* ignore */
  }
}

export function storedQueryString(): string {
  if (typeof window === "undefined") return "";
  try {
    const current = window.location.search.replace(/^\?/, "");
    const stored = sessionStorage.getItem(UTM_KEY) ?? "";
    const params = new URLSearchParams(stored);
    new URLSearchParams(current).forEach((value, key) => params.set(key, value));
    params.delete("iniciar");
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
