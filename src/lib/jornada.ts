export const PERFECTPAY_CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQFP8D";

export const BRAND = "5 Minutos de Fé";
export const PRICE = "R$ 19,00";

export const ANSWERS_KEY = "cinco_min_quiz_answers";
export const UTM_KEY = "cinco_min_utms";

/* ---------------------------------- quiz ---------------------------------- */

export type CategoryId = "paz" | "direcao" | "esperanca" | "forca" | "confianca" | "presenca";

export type QuizOption = {
  label: string;
  scores: Partial<Record<CategoryId, number>>;
};

export type QuestionId = "sentir" | "situacao" | "orar" | "momento" | "depois" | "formato" | "entrega";

export type QuizQuestion = {
  id: QuestionId;
  label: string;
  options: QuizOption[];
};

export const questions: QuizQuestion[] = [
  {
    id: "sentir",
    label: "Como você tem se sentido nos últimos dias?",
    options: [
      { label: "Minha mente não para", scores: { paz: 3, confianca: 1 } },
      { label: "Estou cansado(a) e sobrecarregado(a)", scores: { forca: 3, paz: 1 } },
      { label: "Estou com medo ou inseguro(a)", scores: { confianca: 3, paz: 1 } },
      { label: "Estou passando por um recomeço", scores: { esperanca: 3, forca: 1 } },
      { label: "Tenho me sentido distante de Deus", scores: { presenca: 2, esperanca: 2 } },
      { label: "Estou bem, mas quero fortalecer minha fé", scores: { presenca: 3 } },
    ],
  },
  {
    id: "situacao",
    label: "Qual situação mais ocupa seus pensamentos hoje?",
    options: [
      { label: "Uma decisão importante", scores: { direcao: 3 } },
      { label: "Problemas financeiros ou trabalho", scores: { forca: 2, confianca: 2 } },
      { label: "Família ou relacionamento", scores: { confianca: 2, presenca: 1, paz: 1 } },
      {
        label: "Algo que perdi ou precisei deixar para trás",
        scores: { esperanca: 3, forca: 1 },
      },
      { label: "O futuro e o que pode acontecer", scores: { confianca: 3, direcao: 1 } },
      {
        label: "Não existe uma situação específica, só preciso de paz",
        scores: { paz: 3 },
      },
    ],
  },
  {
    id: "orar",
    label: "Quando você tenta orar, o que acontece com mais frequência?",
    options: [
      { label: "Não sei o que dizer", scores: { presenca: 2, paz: 1, esperanca: 1 } },
      { label: "Minha cabeça se distrai", scores: { paz: 3 } },
      { label: "Começo, mas não consigo manter uma rotina", scores: { esperanca: 2, presenca: 2 } },
      { label: "Só procuro Deus quando algo aperta", scores: { confianca: 2, esperanca: 1 } },
      { label: "Tenho vontade, mas falta tempo", scores: { forca: 2, presenca: 1 } },
      { label: "Consigo orar e quero aprofundar esse momento", scores: { presenca: 3 } },
    ],
  },
  {
    id: "momento",
    label: "Em qual momento do dia você mais sente que precisa parar?",
    options: [
      { label: "Logo ao acordar", scores: { presenca: 2, direcao: 1 } },
      { label: "No meio da correria", scores: { paz: 2, forca: 1 } },
      { label: "Quando algo dá errado", scores: { confianca: 2, forca: 1 } },
      { label: "No fim do dia", scores: { forca: 2, paz: 1 } },
      { label: "Antes de dormir", scores: { paz: 2, confianca: 1 } },
      { label: "Não tenho um horário definido", scores: { esperanca: 2 } },
    ],
  },
  {
    id: "depois",
    label: "O que você gostaria de sentir depois de alguns minutos de oração?",
    options: [
      { label: "Mais calma", scores: { paz: 3 } },
      { label: "Mais clareza", scores: { direcao: 3 } },
      { label: "Mais esperança", scores: { esperanca: 3 } },
      { label: "Mais força para continuar", scores: { forca: 3 } },
      { label: "Mais confiança em Deus", scores: { confianca: 3 } },
      { label: "Mais gratidão e presença", scores: { presenca: 3 } },
    ],
  },
  {
    id: "formato",
    label: "Qual formato parece mais natural para você hoje?",
    options: [
      { label: "Ouvir uma oração guiada", scores: { paz: 1, presenca: 1 } },
      { label: "Ler uma reflexão curta", scores: { direcao: 1, presenca: 1 } },
      { label: "Ouvir e refletir ao mesmo tempo", scores: { direcao: 1, confianca: 1 } },
      { label: "Escrever o que estou sentindo", scores: { esperanca: 1, presenca: 1 } },
      {
        label: "Quero algo simples e conduzido, sem precisar pensar muito",
        scores: { forca: 1, paz: 1 },
      },
    ],
  },
  {
    id: "entrega",
    label: "Se você pudesse entregar uma coisa a Deus agora, o que seria?",
    options: [
      { label: "Minha ansiedade e pensamentos", scores: { paz: 3 } },
      { label: "Uma decisão", scores: { direcao: 3 } },
      { label: "Meu cansaço", scores: { forca: 3 } },
      { label: "Uma dor ou perda", scores: { esperanca: 3 } },
      { label: "Meu medo do futuro", scores: { confianca: 3 } },
      { label: "Minha família ou relacionamento", scores: { confianca: 2, presenca: 1 } },
      { label: "Minha própria fé", scores: { presenca: 3 } },
    ],
  },
];

export type Answers = Partial<Record<QuestionId, string>>;

/* -------------------------------- profiles -------------------------------- */

export type Profile = {
  id: CategoryId;
  category: string;
  name: string;
  paragraphs: string[];
  needs: string[];
  prayer: string;
  reflection: string;
  step: string;
  duration: string;
  closing: string;
  image: string;
  imageAlt: string;
};

export const profiles: Record<CategoryId, Profile> = {
  paz: {
    id: "paz",
    category: "Paz e Desacelerar",
    name: "Seu coração está pedindo espaço para respirar",
    paragraphs: [
      "Pelo que você respondeu, parece existir muito ruído interno agora. Não é necessariamente algo grave: é a soma de pensamentos que se acumulam sem pausa e de dias em que quase não sobra silêncio.",
      "Quando a mente está acelerada, orar pode parecer mais difícil do que é. Não porque falte fé, mas porque falta um instante de calma antes das palavras.",
      "Talvez o mais útil hoje não seja tentar resolver tudo, e sim reduzir o ritmo por alguns minutos e entregar apenas uma coisa.",
    ],
    needs: [
      "Um momento curto e conduzido, sem precisar pensar muito",
      "Respiração e silêncio antes de qualquer pedido",
      "Uma oração simples para acalmar o pensamento",
    ],
    prayer: "Oração para acalmar o coração",
    reflection: "Quando a mente não consegue desligar",
    step: "Respire devagar por alguns instantes, escolha a preocupação que mais pesa agora e entregue apenas ela em oração.",
    duration: "pausa de até 5 minutos",
    closing: "Você não precisa silenciar tudo. Só precisa de um pequeno espaço para respirar com Deus.",
    image: "/images/app-oracao-noite-v2.webp",
    imageAlt: "Momento de silêncio à noite, com luz quente e Bíblia aberta",
  },
  direcao: {
    id: "direcao",
    category: "Direção e Discernimento",
    name: "Você não precisa decidir tudo de uma vez",
    paragraphs: [
      "Suas respostas apontam para um momento de escolhas. Existe algo esperando resposta, e a sensação é de que qualquer caminho carrega peso.",
      "Discernir raramente acontece de uma vez. Costuma acontecer aos poucos, quando conseguimos olhar com honestidade para o que já está diante de nós.",
      "Um bom começo é reduzir a pergunta: em vez de resolver o caminho inteiro, orar pelo próximo passo possível.",
    ],
    needs: [
      "Clareza sobre o que realmente está em jogo",
      "Uma reflexão bíblica sobre escolhas e espera",
      "Coragem para dar apenas o próximo passo",
    ],
    prayer: "Oração antes de tomar uma decisão",
    reflection: "Clareza para o próximo passo",
    step: "Escreva em uma frase qual decisão está diante de você e ore somente pelo próximo passo possível.",
    duration: "pausa de até 5 minutos",
    closing: "Um passo por dia também é caminho.",
    image: "/images/app-leitura-biblia-v3.webp",
    imageAlt: "Bíblia aberta sobre a mesa em leitura reflexiva com luz de janela",
  },
  esperanca: {
    id: "esperanca",
    category: "Esperança e Recomeço",
    name: "Talvez este seja um tempo de reconstruir por dentro",
    paragraphs: [
      "Pelo conjunto das suas respostas, você parece estar em um tempo de transição: algo mudou, terminou ou precisou ser deixado para trás.",
      "Recomeçar costuma exigir mais coragem do que começar, porque agora você já sabe o que dói. E ainda assim, é ali que a caminhada volta a acontecer.",
      "Talvez o que ajude não seja um plano completo, mas um passo pequeno que você consiga dar hoje.",
    ],
    needs: [
      "Uma oração de recomeço, sem cobrança por resultados",
      "Perceber o que já foi atravessado até aqui",
      "Um passo pequeno, do tamanho do dia de hoje",
    ],
    prayer: "Oração para recomeçar",
    reflection: "Sua história não terminou aqui",
    step: "Pense no menor passo que você consegue dar hoje, sem tentar resolver o caminho inteiro.",
    duration: "pausa de até 5 minutos",
    closing: "Recomeçar em silêncio também é recomeçar.",
    image: "/images/app-oracao-manha-v2.webp",
    imageAlt: "Início de manhã com luz suave entrando pela janela e momento de oração",
  },
  forca: {
    id: "forca",
    category: "Força e Descanso",
    name: "Você pode estar tentando carregar mais do que precisa",
    paragraphs: [
      "Suas respostas falam de cansaço. Não apenas do corpo: também daquele cansaço de manter tudo funcionando enquanto ninguém percebe o esforço.",
      "Em dias assim, a força que falta talvez não seja para fazer mais, mas para descansar sem culpa.",
      "Uma pausa curta não resolve a rotina, mas pode devolver um pouco de ar antes do próximo passo.",
    ],
    needs: [
      "Permissão para descansar sem culpa",
      "Uma oração para dias em que a energia acabou",
      "Deixar algo esperar por alguns minutos",
    ],
    prayer: "Oração para dias de cansaço",
    reflection: "Você não precisa dar conta de tudo hoje",
    step: "Escolha uma responsabilidade que pode esperar e permita-se alguns minutos sem resolver nada.",
    duration: "pausa de até 5 minutos",
    closing: "Descansar também é um ato de fé.",
    image: "/images/app-pausa-trabalho-v2.webp",
    imageAlt: "Pausa breve no meio do trabalho, com café e ambiente iluminado por luz quente",
  },
  confianca: {
    id: "confianca",
    category: "Confiança e Entrega",
    name: "Há coisas que não estão sob o seu controle",
    paragraphs: [
      "O que você respondeu aponta para preocupações que envolvem o futuro ou pessoas que você ama — justamente aquilo que não depende só de você.",
      "Confiar não é ter certeza de tudo. Muitas vezes é continuar caminhando com perguntas ainda abertas.",
      "Talvez ajude nomear o que está fora do seu alcance e transformar isso em uma frase simples de entrega.",
    ],
    needs: [
      "Nomear o medo em vez de carregá-lo em silêncio",
      "Uma oração de entrega para o que não se controla",
      "Confiar sem exigir todas as respostas hoje",
    ],
    prayer: "Oração para entregar o medo do amanhã",
    reflection: "Confiar sem ter todas as respostas",
    step: "Nomeie o que você não consegue controlar e transforme isso em uma frase curta de entrega a Deus.",
    duration: "pausa de até 5 minutos",
    closing: "Você não precisa segurar tudo sozinho(a) hoje.",
    image: "/images/app-oracao-igreja-v2.webp",
    imageAlt: "Momento contemplativo em ambiente de fé, com luz dourada e silêncio",
  },
  presenca: {
    id: "presenca",
    category: "Presença e Gratidão",
    name: "Sua fé pode crescer também nos dias comuns",
    paragraphs: [
      "Suas respostas indicam alguém que quer estar mais perto de Deus não apenas nas urgências, mas também na rotina.",
      "A fé costuma se fortalecer nos dias comuns: no café da manhã, no caminho, nos poucos minutos antes de dormir.",
      "Reservar um momento fixo, ainda que curto, tende a sustentar mais do que grandes intenções ocasionais.",
    ],
    needs: [
      "Um momento fixo e simples no seu dia",
      "Reconhecer o que já sustenta você",
      "Uma prática curta que caiba na rotina real",
    ],
    prayer: "Oração de gratidão pelo dia de hoje",
    reflection: "Perceber o que ainda sustenta você",
    step: "Reconheça três coisas simples que estiveram presentes no seu dia e agradeça por elas.",
    duration: "pausa de até 5 minutos",
    closing: "Deus também está nos dias em que nada de extraordinário acontece.",
    image: "/images/app-cafe-manha-v3.webp",
    imageAlt: "Café da manhã tranquilo com leitura devocional e luz natural",
  },
};

const order: CategoryId[] = ["paz", "direcao", "esperanca", "forca", "confianca", "presenca"];

function optionFor(qid: QuestionId, label?: string): QuizOption | undefined {
  if (!label) return undefined;
  return questions.find((q) => q.id === qid)?.options.find((o) => o.label === label);
}

export function scoreAnswers(answers: Answers): Record<CategoryId, number> {
  const totals = order.reduce(
    (acc, id) => ({ ...acc, [id]: 0 }),
    {} as Record<CategoryId, number>,
  );
  for (const q of questions) {
    const option = optionFor(q.id, answers[q.id]);
    if (!option) continue;
    for (const [key, value] of Object.entries(option.scores)) {
      totals[key as CategoryId] += value ?? 0;
    }
  }
  return totals;
}

/** Winner = highest total; ties broken by Q7 ("entrega"), then Q5 ("depois"). */
export function profileFor(answers: Answers): Profile {
  const totals = scoreAnswers(answers);
  const max = Math.max(...order.map((id) => totals[id]));
  if (max === 0) return profiles.presenca;

  const leaders = order.filter((id) => totals[id] === max);
  if (leaders.length === 1) return profiles[leaders[0]!];

  for (const qid of ["entrega", "depois"] as QuestionId[]) {
    const option = optionFor(qid, answers[qid]);
    if (!option) continue;
    const preferred = leaders.find((id) => (option.scores[id] ?? 0) > 0);
    if (preferred) return profiles[preferred];
  }
  return profiles[leaders[0]!];
}

export function hasAnswers(answers: Answers): boolean {
  return Object.keys(answers).length > 0;
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
    // dedupe result_view per quiz run (SPA remounts can double-fire it)
    if (event === "quiz_start") window.sessionStorage.removeItem("rv_fired");
    if (event === "result_view") {
      if (window.sessionStorage.getItem("rv_fired")) return;
      window.sessionStorage.setItem("rv_fired", "1");
    }
    const w = window as unknown as { dataLayer?: DataLayerEvent[] };
    if (!Array.isArray(w.dataLayer)) w.dataLayer = [];
    w.dataLayer.push({ event, ...payload });
  } catch {
    /* ignore */
  }
}

