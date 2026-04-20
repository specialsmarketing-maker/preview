import styles from "./menu.module.css";

type ClassicItem = {
  name: string;
  price: string;
  description: string;
  allergens: string;
  isVeg?: boolean;
};

type DipItem = {
  name: string;
  price: string;
};

const KLASSIKER_ITEMS: ClassicItem[] = [
  {
    name: "Chicken Tikka Masala mit Basmatireis",
    price: "22,90",
    description:
      "Saftig gegrillte und zarte Hühnerfleisch, in Joghurt und einer fein abgestimmten Gewürzkomposition mariniert – vollendet in einem cremig-leicht-würzigen Masala-Curry. Serviert mit duftendem Basmatireis.",
    allergens: "(G, M)",
  },
  {
    name: "Butter Chicken mit Basmatireis",
    price: "20,90",
    description:
      "Zart gegrillte, marinierte Hühnerfleisch in einer cremigen, buttrig-milden Currysauce mit feiner Tomatennote. Serviert mit duftendem Basmatireis.",
    allergens: "(G, M)",
  },
];

const VEGETARIAN_ITEMS: ClassicItem[] = [
  {
    name: "Kumar’s Vegan Fusion mit Basmatireis",
    price: "19,90",
    description:
      "Schonend sautiertes, saisonales Gemüse in einem cremigen Kokos-Curry mit feiner Gewürznote. Serviert mit duftendem Basmatireis – pflanzlicher Genuss in seiner elegantesten Form.",
    allergens: "(vegan)",
    isVeg: true,
  },
  {
    name: "Shahi Paneer mit Basmatireis",
    price: "19,90",
    description:
      "Indischer Frischkäse in einer samtig-cremigen Curry-Sauce mit milden Gewürzen – ein königlicher Klassiker der nordindischen Küche.",
    allergens: "(G, M, vegetarisch)",
    isVeg: true,
  },
  {
    name: "Dal Makhani mit Basmatireis",
    price: "18,90",
    description:
      "Langsam geschmorte schwarze Linsen, verfeinert mit Butter, Sahne und ausgewählten Gewürzen – cremig, aromatisch und tief im Geschmack.",
    allergens: "(G, M, vegetarisch)",
    isVeg: true,
  },
  {
    name: "Palak Paneer mit Basmatireis",
    price: "19,90",
    description:
      "Zarter, indischer Frischkäse in einer samtigen Spinatcreme, fein gewürzt und harmonisch abgeschmeckt.",
    allergens: "(G, M, vegetarisch)",
    isVeg: true,
  },
];

const DIPS_LEFT: DipItem[] = [
  { name: "Tikka Masala Dip", price: "1,50" },
  { name: "Garlic Dip", price: "1,20" },
  { name: "Mayo", price: "1,00" },
];

const DIPS_RIGHT: DipItem[] = [
  { name: "Minze Dip", price: "1,20" },
  { name: "Tamarinde Dip", price: "1,20" },
  { name: "Mango Dip", price: "1,20" },
  { name: "Hot Chili Dip", price: "1,00" },
  { name: "Ketchup", price: "0,70" },
];

function ClassicRow({ item }: { item: ClassicItem }) {
  return (
    <article className={styles.classicsItem}>
      <div className={styles.classicsItemMain}>
        <div className={styles.classicsTitleLine}>
          <h3 className={styles.classicsItemTitle}>{item.name}</h3>
          {item.isVeg ? <span className={`${styles.badge} ${styles.badgeVeg}`}>VEG</span> : null}
        </div>
        <p className={styles.classicsItemDescription}>{item.description}</p>
        <p className={styles.classicsItemAllergens}>{item.allergens}</p>
      </div>
      <p className={styles.classicsItemPrice}>€ {item.price}</p>
    </article>
  );
}

function DipColumn({ items }: { items: DipItem[] }) {
  return (
    <div className={styles.dipsColumn}>
      {items.map((item) => (
        <div key={item.name} className={styles.dipRow}>
          <p className={styles.dipName}>{item.name}</p>
          <p className={styles.dipPrice}>€ {item.price}</p>
        </div>
      ))}
    </div>
  );
}

export function ClassicsAndDips() {
  return (
    <section className={styles.classicsSection} aria-labelledby="klassiker-title">
      <div className={styles.sectionCard}>
        <header className={styles.classicsHeader}>
          <h2 id="klassiker-title" className={styles.classicsTitle}>
            INDISCHE HAUPTSPEISEN
          </h2>
          <p className={styles.classicsSubtitle}>DIE KLASSIKER</p>
        </header>

        <div className={styles.classicsList}>
          {KLASSIKER_ITEMS.map((item) => (
            <ClassicRow key={item.name} item={item} />
          ))}
        </div>

        <section className={styles.vegetarianBlock} aria-labelledby="vegetarians-title">
          <h3 id="vegetarians-title" className={styles.vegetarianTitle}>
            FOR VEGETARIANS
          </h3>
          <div className={styles.classicsList}>
            {VEGETARIAN_ITEMS.map((item) => (
              <ClassicRow key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className={styles.dipsBlock} aria-labelledby="dips-title">
          <h3 id="dips-title" className={styles.dipsTitle}>
            OUR HOMEMADE DIPS
          </h3>
          <p className={styles.dipsNote}>(vegan)</p>
          <div className={styles.dipsGrid}>
            <DipColumn items={DIPS_LEFT} />
            <DipColumn items={DIPS_RIGHT} />
          </div>
        </section>
      </div>
    </section>
  );
}
