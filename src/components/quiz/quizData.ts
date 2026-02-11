export type QuizTypeSlug = "stress-esser" | "perfektionist" | "zeitmangel" | "regelbrecher";

export interface QuizType {
  slug: QuizTypeSlug;
  title: string;
  subtitle: string;
  description: string;
  tips: string[];
}

export interface QuizAnswer {
  text: string;
  type: QuizTypeSlug;
}

export interface QuizQuestion {
  question: string;
  answers: QuizAnswer[];
}

export const quizTypes: Record<QuizTypeSlug, QuizType> = {
  "stress-esser": {
    slug: "stress-esser",
    title: "Der Stress-Esser",
    subtitle: "Dein Körper nutzt Essen als Ventil.",
    description:
      "Du isst nicht aus Hunger, sondern aus Emotion. Stress, Langeweile, Frust – dein Körper hat gelernt, dass Essen kurzfristig hilft. Das Problem: Es löst nichts, und danach fühlst du dich schlechter als vorher.",
    tips: [
      "Erkenne den Auslöser: Bevor du zum Snack greifst, frag dich: \"Habe ich wirklich Hunger – oder fühle ich gerade etwas?\" Allein diese Pause verändert das Muster.",
      "Schaffe ein Alternativ-Ritual: Geh 5 Minuten an die frische Luft, trink ein grosses Glas Wasser, oder ruf jemanden an. Dein Gehirn braucht eine neue Verknüpfung für Stress.",
      "Plane dein Essen vor: Wenn du bereits weisst, was du heute isst, fällt die emotionale Spontan-Entscheidung weg. Struktur schlägt Willenskraft.",
    ],
  },
  perfektionist: {
    slug: "perfektionist",
    title: "Der Perfektionist",
    subtitle: "Alles oder nichts – und meistens nichts.",
    description:
      "Du hast hohe Ansprüche an dich selbst. Wenn du etwas machst, dann richtig. Das Problem: Sobald du einmal \"sündigst\", wirfst du alles hin. Ein Stück Kuchen wird zur ganzen Torte. Montag startest du dann \"wieder richtig\".",
    tips: [
      "Erlaube dir die 80%-Lösung: Perfekt ist der Feind von gut. Wenn du 5 von 7 Tagen solide isst, bist du weiter als 99% der Menschen.",
      "Streiche \"ab Montag\" aus deinem Wortschatz: Jede Mahlzeit ist ein Neuanfang. Ein schlechtes Mittagessen heisst nicht, dass der Tag verloren ist.",
      "Definiere \"gut genug\": Schreib dir auf, wie ein realistisch guter Tag aussieht. Nicht perfekt, sondern machbar. Das ist dein neuer Standard.",
    ],
  },
  zeitmangel: {
    slug: "zeitmangel",
    title: "Der Zeitmangel-Typ",
    subtitle: "Du hast für alles Zeit – ausser für dich.",
    description:
      "Dein Kalender ist voll, dein Kühlschrank leer. Du weisst, was du essen solltest, aber es fehlt dir schlicht die Zeit. Also wird es wieder Brot, Take-away oder einfach gar nichts – bis abends der Heisshunger zuschlägt.",
    tips: [
      "Investiere 30 Minuten am Sonntag: Plane deine 5 Mittagessen für die Woche. Nicht kochen – nur planen. Das allein halbiert deine schlechten Entscheidungen.",
      "Mach Convenience gesund: Tiefkühlgemüse, vorgewaschene Salate, Dosenlinsen – nicht alles muss frisch sein. \"Gut genug\" schlägt \"gar nicht\".",
      "Iss BEVOR du hungrig bist: Hunger ist kein guter Berater. Ein vorgeplanter Snack um 15 Uhr verhindert das abendliche Chaos.",
    ],
  },
  regelbrecher: {
    slug: "regelbrecher",
    title: "Der Regelbrecher",
    subtitle: "Du weisst alles – und tust nichts davon.",
    description:
      "Du hast mehr Ernährungsbücher gelesen als die meisten Ärzte. Du kennst Makros, Mikros, Intervallfasten und Darmgesundheit. Dein Problem ist nicht Wissen, sondern Umsetzung. Zwischen Theorie und Praxis liegt ein Graben.",
    tips: [
      "Wähle EINE Sache: Nicht drei Bücher, nicht fünf Regeln. Eine Veränderung, die du 30 Tage durchziehst. Mehr braucht es am Anfang nicht.",
      "Mach es dir lächerlich einfach: Dein erster Schritt sollte so klein sein, dass du dich fast schämst. \"Jeden Tag ein Glas Wasser vor dem Frühstück\" – das ist genug.",
      "Hol dir Accountability: Wissen allein reicht nicht. Du brauchst jemanden, der fragt: \"Hast du's gemacht?\" Das kann ein Coach, ein Freund oder eine App sein.",
    ],
  },
};

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Du kommst nach einem stressigen Tag nach Hause. Was passiert als Erstes?",
    answers: [
      { text: "Ich öffne den Kühlschrank und esse, was mir in die Hände fällt", type: "stress-esser" },
      { text: "Ich überlege, was ich gesundes kochen könnte – und bestelle dann doch Pizza", type: "perfektionist" },
      { text: "Ich habe sowieso nichts eingekauft, also wird es Toast oder Take-away", type: "zeitmangel" },
      { text: "Ich weiss genau, was ich essen sollte, aber ich habe keine Energie, es umzusetzen", type: "regelbrecher" },
    ],
  },
  {
    question: "Wie sieht dein typisches Mittagessen unter der Woche aus?",
    answers: [
      { text: "Kommt drauf an, wie mein Morgen war – manchmal gar nichts, manchmal viel zu viel", type: "stress-esser" },
      { text: "Entweder perfekt vorbereitetes Meal Prep oder Kantine-Chaos – dazwischen gibt's nichts", type: "perfektionist" },
      { text: "Schnell was vom Bäcker oder Tankstelle – Hauptsache es geht fix", type: "zeitmangel" },
      { text: "Ich weiss, was besser wäre, aber greife trotzdem zum Einfachsten", type: "regelbrecher" },
    ],
  },
  {
    question: "Du hast am Wochenende ordentlich zugeschlagen. Wie reagierst du am Montag?",
    answers: [
      { text: "Ich fühle mich schuldig und esse aus Frust gleich weiter schlecht", type: "stress-esser" },
      { text: "Ab Montag wird alles anders! Diesmal wirklich. Neuer Plan, neue Regeln.", type: "perfektionist" },
      { text: "Ich nehme es mir vor, aber die Woche ist schon wieder so voll...", type: "zeitmangel" },
      { text: "Ich analysiere, was schief ging, mache aber trotzdem dasselbe wie immer", type: "regelbrecher" },
    ],
  },
  {
    question: "Was ist deine grösste Frustration beim Thema Ernährung?",
    answers: [
      { text: "Dass Essen so emotional für mich ist – ich kann nicht einfach \"normal\" essen", type: "stress-esser" },
      { text: "Dass ich nie durchhalte – ich starte motiviert und scheitere nach 2 Wochen", type: "perfektionist" },
      { text: "Dass gesunde Ernährung so viel Zeit und Planung braucht", type: "zeitmangel" },
      { text: "Dass ich eigentlich alles weiss, aber trotzdem nichts ändere", type: "regelbrecher" },
    ],
  },
  {
    question: "Jemand bietet dir ein Stück Kuchen an. Wie gehst du damit um?",
    answers: [
      { text: "Kommt auf meinen Tag an – bei Stress sage ich definitiv ja (und nehme heimlich noch eins)", type: "stress-esser" },
      { text: "Entweder ich lehne komplett ab oder ich esse gleich drei Stücke – Mittelmass gibt's nicht", type: "perfektionist" },
      { text: "Klar, nehme ich – hab ja sonst eh nichts Vernünftiges dabei", type: "zeitmangel" },
      { text: "Ich weiss, dass ein Stück okay wäre, sage aber trotzdem ja zu dreien", type: "regelbrecher" },
    ],
  },
  {
    question: "Welche Aussage beschreibt dich am besten?",
    answers: [
      { text: "Essen ist mein Trost, wenn alles andere schwierig wird", type: "stress-esser" },
      { text: "Wenn ich schon einen Fehler mache, kann ich den Tag auch gleich abschreiben", type: "perfektionist" },
      { text: "Ich hätte gern mehr Zeit für gesunde Ernährung, aber mein Alltag lässt es nicht zu", type: "zeitmangel" },
      { text: "Ich bin ein wandelndes Ernährungslexikon, das sich von Fertiggerichten ernährt", type: "regelbrecher" },
    ],
  },
  {
    question: "Was müsste passieren, damit sich deine Ernährung nachhaltig verbessert?",
    answers: [
      { text: "Ich müsste lernen, mit Stress anders umzugehen als mit Essen", type: "stress-esser" },
      { text: "Ich müsste akzeptieren, dass \"gut genug\" reicht – nicht alles muss perfekt sein", type: "perfektionist" },
      { text: "Jemand müsste mir einen konkreten Plan geben, der in meinen Alltag passt", type: "zeitmangel" },
      { text: "Ich müsste endlich ins TUN kommen statt nur zu lesen und zu planen", type: "regelbrecher" },
    ],
  },
];

// Deterministic priority for tie-breaking
const typePriority: QuizTypeSlug[] = ["stress-esser", "perfektionist", "zeitmangel", "regelbrecher"];

export function calculateQuizResult(answers: QuizTypeSlug[]): QuizTypeSlug {
  const counts: Record<QuizTypeSlug, number> = {
    "stress-esser": 0,
    perfektionist: 0,
    zeitmangel: 0,
    regelbrecher: 0,
  };

  for (const answer of answers) {
    counts[answer]++;
  }

  let maxCount = 0;
  let winner: QuizTypeSlug = typePriority[0];

  for (const type of typePriority) {
    if (counts[type] > maxCount) {
      maxCount = counts[type];
      winner = type;
    }
  }

  return winner;
}
