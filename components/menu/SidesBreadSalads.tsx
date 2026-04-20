import styles from "./menu.module.css";

type GroupItem = {
  name: string;
  price: string;
  description: string;
  allergens?: string;
};

type Group = {
  title: string;
  items: GroupItem[];
};

const GROUPS: Group[] = [
  {
    title: "BEILAGEN",
    items: [
      {
        name: "Reis",
        price: "3,50",
        description:
          "Aromatischer, locker gedämpfter Langkorn-Basmati-Reis – ein Klassiker der indischen Küche.",
      },
      {
        name: "Raita",
        price: "3,00",
        description:
          "Cremiger Joghurt mit aromatischen Gewürzen und frischen Kräutern – ein erfrischender Begleiter zu würzigen und scharfen Gerichten wie Biryani.",
        allergens: "(A, G)",
      },
    ],
  },
  {
    title: "BROT",
    items: [
      {
        name: "Naan plain (Fladenbrot)",
        price: "3,90",
        description: "Weiches Fladenbrot – ideal als Begleiter zu Currys.",
        allergens: "(A, G)",
      },
      {
        name: "Naan garlic (Fladenbrot)",
        price: "4,00",
        description: "Weiches Fladenbrot – ideal als Begleiter zu Currys.",
        allergens: "(A, G)",
      },
      {
        name: "Trüffelbutter Naan (Fladenbrot)",
        price: "6,50",
        description: "Weiches Fladenbrot mit Trüffelbutter – ideal als Begleiter zu Currys.",
        allergens: "(A, G)",
      },
      {
        name: "Paratha",
        price: "3,70",
        description:
          "Buttrig-blättriges Fladenbrot, goldbraun gebacken – herzhaft im Geschmack und wunderbar sättigend.",
        allergens: "(A, G)",
      },
      {
        name: "Roti",
        price: "2,70",
        description:
          "Dünnes Fladenbrot aus feinem Weizenvollkornmehl – leicht, bekömmlich und traditionell zubereitet.",
        allergens: "(A, G)",
      },
    ],
  },
  {
    title: "SALATE",
    items: [
      {
        name: "Blattsalat mit Mango-Clementin Dressing",
        price: "9,90",
        description: "Knackige Blattsalate, Mango-Clementinen-Dressing, Granatapfel, Walnüssen.",
        allergens: "(G, M, N)",
      },
      {
        name: "Hari’s Melon Salat",
        price: "13,90",
        description:
          "Wassermelone als Hauptakteur, kombiniert mit cremigem Feta-Käse, Beeren, Nüssen, feinen Kräutern, Honig und Olivenöl.",
        allergens: "(G, M, N)",
      },
    ],
  },
];

function GroupRow({ item }: { item: GroupItem }) {
  return (
    <article className={styles.groupedItem}>
      <div className={styles.groupedItemMain}>
        <h4 className={styles.groupedItemName}>{item.name}</h4>
        <p className={styles.groupedItemDescription}>{item.description}</p>
        {item.allergens ? <p className={styles.groupedItemAllergens}>{item.allergens}</p> : null}
      </div>
      <p className={styles.groupedItemPrice}>€ {item.price}</p>
    </article>
  );
}

export function SidesBreadSalads() {
  return (
    <section className={styles.sidesBreadSaladsSection} aria-labelledby="sides-bread-salads-title">
      <div className={styles.sectionCard}>
        <div className={styles.groupedContainer} id="sides-bread-salads-title">
          {GROUPS.map((group) => (
            <section key={group.title} className={styles.groupedBlock} aria-labelledby={`group-${group.title}`}>
              <h3 id={`group-${group.title}`} className={styles.groupedTitle}>
                {group.title}
              </h3>
              <div className={styles.groupedList}>
                {group.items.map((item) => (
                  <GroupRow key={item.name} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
