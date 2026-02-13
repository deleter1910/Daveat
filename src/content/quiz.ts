// ===================================================
// Alle Texte rund um das Quiz
// Bearbeite die Strings hier – das Layout bleibt unverändert.
// ===================================================

// === QUIZ INTRO ===
export const quizIntro = {
  headline: "Du tust das Richtige – aber es",
  headlineHighlight: "funktioniert nicht?",
  subline:
    "Die meisten scheitern nicht an Wissen oder Willenskraft. Sondern an einem Muster, das sie nicht sehen.",
  timeNote: "7 Fragen, 2 Minuten – und du weisst, was dich blockiert.",
  cta: "Meinen Typ herausfinden",
  bottomNote:
    "Die meisten kennen alle Regeln. Trotzdem ändert sich nichts. Dieses Quiz zeigt dir warum – und gibt dir 3 Tipps, die du heute noch umsetzen kannst.",
};

// === QUIZ E-MAIL ERFASSUNG ===
export const quizEmailCapture = {
  headline: "Dein Ergebnis steht fest.",
  subline:
    "Wir schicken dir deinen persönlichen Typ mit 3 Sofort-Tipps per E-Mail – damit du sie nicht vergisst.",
  submitButton: "Mein Ergebnis sichern",
  submittingButton: "Wird ausgewertet...",
  privacyNote: "Kein Spam. Deine Daten bleiben sicher.",
};

// === QUIZ ERGEBNIS-SEITE ===
export const quizResult = {
  resultLabel: "Dein Ergebnis",
  tipsHeadline: "Deine 3 persönlichen Tipps",
  ctaSubline:
    "Tipps sind der Anfang – aber was du als {type} wirklich brauchst, ist ein persönlicher Plan. Im kostenlosen Strategiegespräch finden wir heraus, welche konkreten Schritte für dich am meisten bewirken.",
  ctaUrgency: "Diesen Monat noch 4 Plätze frei.",
  ctaButton: "Kostenloses Gespräch sichern",
  retakeLink: "Quiz wiederholen",
  homeLink: "Zurück zur Startseite",
  notFoundHeadline: "Ergebnis nicht gefunden",
  notFoundText:
    "Dieses Quiz-Ergebnis existiert nicht. Mach das Quiz erneut, um deinen Typ herauszufinden.",
  notFoundButton: "Quiz neu starten",
};

// === QUIZ ERGEBNIS CTAs (pro Typ) ===
export const typeCTAs: Record<string, string> = {
  "stress-esser": "Willst du aufhören, Stress runterzuessen?",
  perfektionist:
    "Willst du endlich aufhören, bei jedem Fehler alles hinzuwerfen?",
  zeitmangel: "Willst du einen Plan, der in deinen vollen Alltag passt?",
  regelbrecher: "Willst du endlich vom Wissen ins Tun kommen?",
};

// === QUIZ-TYPEN ===
export const quizTypeTexts = {
  "stress-esser": {
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

// === QUIZ-FRAGEN ===
export const quizQuestionTexts = [
  {
    question:
      "Du kommst nach einem stressigen Tag nach Hause. Was passiert als Erstes?",
    answers: [
      "Ich öffne den Kühlschrank und esse, was mir in die Hände fällt",
      "Ich überlege, was ich gesundes kochen könnte – und bestelle dann doch Pizza",
      "Ich habe sowieso nichts eingekauft, also wird es Toast oder Take-away",
      "Ich weiss genau, was ich essen sollte, aber ich habe keine Energie, es umzusetzen",
    ],
  },
  {
    question:
      "Wie sieht dein typisches Mittagessen unter der Woche aus?",
    answers: [
      "Kommt drauf an, wie mein Morgen war – manchmal gar nichts, manchmal viel zu viel",
      "Entweder perfekt vorbereitetes Meal Prep oder Kantine-Chaos – dazwischen gibt's nichts",
      "Schnell was vom Bäcker oder Tankstelle – Hauptsache es geht fix",
      "Ich weiss, was besser wäre, aber greife trotzdem zum Einfachsten",
    ],
  },
  {
    question:
      "Du hast am Wochenende ordentlich zugeschlagen. Wie reagierst du am Montag?",
    answers: [
      "Ich fühle mich schuldig und esse aus Frust gleich weiter schlecht",
      "Ab Montag wird alles anders! Diesmal wirklich. Neuer Plan, neue Regeln.",
      "Ich nehme es mir vor, aber die Woche ist schon wieder so voll...",
      "Ich analysiere, was schief ging, mache aber trotzdem dasselbe wie immer",
    ],
  },
  {
    question:
      "Was ist deine grösste Frustration beim Thema Ernährung?",
    answers: [
      "Dass Essen so emotional für mich ist – ich kann nicht einfach \"normal\" essen",
      "Dass ich nie durchhalte – ich starte motiviert und scheitere nach 2 Wochen",
      "Dass gesunde Ernährung so viel Zeit und Planung braucht",
      "Dass ich eigentlich alles weiss, aber trotzdem nichts ändere",
    ],
  },
  {
    question:
      "Jemand bietet dir ein Stück Kuchen an. Wie gehst du damit um?",
    answers: [
      "Kommt auf meinen Tag an – bei Stress sage ich definitiv ja (und nehme heimlich noch eins)",
      "Entweder ich lehne komplett ab oder ich esse gleich drei Stücke – Mittelmass gibt's nicht",
      "Klar, nehme ich – hab ja sonst eh nichts Vernünftiges dabei",
      "Ich weiss, dass ein Stück okay wäre, sage aber trotzdem ja zu dreien",
    ],
  },
  {
    question: "Welche Aussage beschreibt dich am besten?",
    answers: [
      "Essen ist mein Trost, wenn alles andere schwierig wird",
      "Wenn ich schon einen Fehler mache, kann ich den Tag auch gleich abschreiben",
      "Ich hätte gern mehr Zeit für gesunde Ernährung, aber mein Alltag lässt es nicht zu",
      "Ich bin ein wandelndes Ernährungslexikon, das sich von Fertiggerichten ernährt",
    ],
  },
  {
    question:
      "Was müsste passieren, damit sich deine Ernährung nachhaltig verbessert?",
    answers: [
      "Ich müsste lernen, mit Stress anders umzugehen als mit Essen",
      "Ich müsste akzeptieren, dass \"gut genug\" reicht – nicht alles muss perfekt sein",
      "Jemand müsste mir einen konkreten Plan geben, der in meinen Alltag passt",
      "Ich müsste endlich ins TUN kommen statt nur zu lesen und zu planen",
    ],
  },
];
