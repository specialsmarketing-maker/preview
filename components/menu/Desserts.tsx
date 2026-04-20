import styles from "./menu.module.css";

type DessertItem = {
  name: string;
  price: string;
  description: string;
  allergens: string;
  isHighlight?: boolean;
};

const DESSERT_ITEMS: DessertItem[] = [
  {
    name: "Pistazientiramisu",
    price: "9,50",
    description: "Unser Highlight und Publikumsliebling: himmlisch zart und unwiderstehlich.",
    allergens: "(A, C, G, H)",
    isHighlight: true,
  },
  {
    name: "Indischer Safran Milchreis (Kheer)",
    price: "8,90",
    description: "Cremiger Milchreis – mit Safrangeschmack & Kardamom.",
    allergens: "(G)",
  },
  {
    name: "Gajar ka Halwa – Indischer Karottenpudding",
    price: "8,50",
    description: "Karotte, Vanilleeis und Rosensirup.",
    allergens: "(G, H, C)",
  },
  {
    name: "Gulab Jamun – gebackene Grießbällchen",
    price: "8,90",
    description: "Gulab Jamun mit Pistazien-Creme, Schokolade, Kokosflocken und Kardamom-Sirup.",
    allergens: "(A, G, H, C)",
  },
  {
    name: "Affogato",
    price: "7,90",
    description:
      "Cremiges Vanilleeis trifft auf intensiven, heißen Espresso – minimalistisch, elegant, perfekt ausbalanciert.",
    allergens: "(G)",
  },
];

export function Desserts() {
  return (
    <section className={styles.dessertsSection} aria-labelledby="desserts-title">
      <div className={styles.sectionCard}>
        <header className={styles.dessertsHeader}>
          <h2 id="desserts-title" className={styles.dessertsTitle}>
            NACHSPEISEN
          </h2>
        </header>

        <div className={styles.dessertsList}>
          {DESSERT_ITEMS.map((item) => (
            <article key={item.name} className={styles.dessertItem}>
              <div className={styles.dessertMain}>
                <div className={styles.dessertTitleRow}>
                  <h3 className={styles.dessertName}>{item.name}</h3>
                  {item.isHighlight ? <span className={styles.highlightBadge}>HIGHLIGHT</span> : null}
                </div>
                <p className={styles.dessertDescription}>{item.description}</p>
                <p className={styles.dessertAllergens}>{item.allergens}</p>
              </div>
              <p className={styles.dessertPrice}>€ {item.price}</p>
            </article>
          ))}
        </div>

        <div className={styles.dessertFooterRecommendation}>
          <span className={styles.coffeeIcon} aria-hidden="true">
            ☕
          </span>
          <p className={styles.dessertFooterText}>
            ZU UNSEREN FEINEN DESSERTS EMPFEHLEN WIR IHNEN UNSEREN PREMIUM-BARISTA-KAFFEE – PERFEKT
            ABGESTIMMT FÜR DEN VOLLENDETEN GENUSS.
          </p>
        </div>
      </div>
    </section>
  );
}
