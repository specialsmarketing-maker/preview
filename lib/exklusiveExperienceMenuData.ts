/**
 * Hari1090 Exklusive Experience / Culinarius Frühlingsgenusswoche (Speisekarte).
 */

export const exklusiveIntro = {
  title: "Hari1090 Exklusive Experience",
  subtitle: "Culinarius – Frühlingsgenusswoche (27.04.–03.05.2026)",
  description:
    "Eine kuratierte Genussreise, die die Aromen Indiens mit moderner, internationaler Raffinesse verbindet – stilvoll interpretiert von der Küche des Hari1090.",
} as const;

export type ExklusiveSimpleCourse = {
  kind: "simple";
  id: string;
  courseLabel: string;
  dishName: string;
  ingredients: string;
  tags: string;
  extraText?: string;
};

export type ExklusiveHauptCourse = {
  kind: "haupt";
  id: string;
  courseLabel: string;
  options: { title: string; lines: string[]; description?: string }[];
  vegetarian: { title: string; items: { name: string; line: string }[] };
};

export type ExklusiveDessertCourse = {
  kind: "dessert";
  id: string;
  courseLabel: string;
  options: { title: string; lines: string[]; extraLine?: string }[];
};

export const exklusiveVegetarischNote = {
  text: "Selbstverständlich servieren wir das Menü auf Wunsch auch in einer vegetarischen Variante. In diesem Fall wird das Fleisch durch indischen Paneer ersetzt. Eine Kombination aus vegetarischen und nicht-vegetarischen Varianten innerhalb desselben Menüs ist nicht möglich.",
} as const;

export const exklusiveFooter = {
  line1: "Mit großer Freude erwarten wir Sie, um Ihnen eine genussvolle Reise durch unsere Küche und einen unvergesslichen Abend zu schenken.",
  line2: "Hari1090 by Kumar’s Kitchen",
} as const;

export const exklusiveCourses: (ExklusiveSimpleCourse | ExklusiveHauptCourse | ExklusiveDessertCourse)[] = [
  {
    kind: "simple",
    id: "c1",
    courseLabel: "Erster Gang – Warmer Auftakt",
    dishName: "Hari’s Mango Avocado Tartare",
    ingredients:
      "Gegrillte Garnele | Mais | Koriander | knuspriges Tuile | Chili-Schaum | Papadam",
    tags: "(A, B)",
  },
  {
    kind: "simple",
    id: "c2",
    courseLabel: "Zweiter Gang – Signature Surprise",
    dishName: "Crispy Paneer Bites – Signature Surprise",
    ingredients:
      "Knusprig gebackener Paneer | feine Olivenfüllung | Rote-Beete- & Gurken-Carpaccio | Tamarinden-Minze-Chutney",
    tags: "(A, G)",
  },
  {
    kind: "simple",
    id: "c3",
    courseLabel: "Dritter Gang – Aromatische Eleganz",
    dishName: "Chicken Tikka mit Indo-Chimichurri",
    ingredients:
      "24 Stunden marinierte Hühnerstücke | im Ofen gegrillt | frisches Kräuter-Chimichurri | Ingwer | Minze-Chutney",
    tags: "(G)",
  },
  {
    kind: "haupt",
    id: "c4",
    courseLabel: "Vierter Gang – Hauptspeise",
    options: [
      {
        title: "Butter Chicken",
        lines: ["Erbsenpüree | Basmatireis"],
        description:
          "Zart gegartes Hühnerfleisch in raffinierter Gewürzkomposition – eine Signature-Spezialität mit Tiefe und Charakter",
      },
      {
        title: "Hari’s Ananas Chicken Curry",
        lines: [
          "Gegrillte Ananas | cremige Tomaten-Masala | Rote-Beete-Chutney | Basmatireis",
        ],
      },
    ],
    vegetarian: {
      title: "Vegetarische / Vegane Optionen",
      items: [
        { name: "Kumar’s Vegan VEG Fusion mit Gurken Kaviar", line: "" },
        { name: "Dal Makhni mit Basmatireis", line: "" },
      ],
    },
  },
  {
    kind: "dessert",
    id: "c5",
    courseLabel: "Fünfter Gang – Dessert",
    options: [
      {
        title: "Gulab Jamun – Modern Interpretation",
        lines: [
          "Rosensirup | belgische Schokolade | Pistaziencreme | Biskuitstreusel | geröstete Pistazien",
        ],
      },
      {
        title: "Pistazien-Tiramisu",
        lines: [],
        extraLine: "Cremig, zart und verführerisch nussig – stilvoll im Glas serviert",
      },
    ],
  },
];
