import styles from "./menu.module.css";

type MainDish = {
  name: string;
  price: string;
  description: string;
  allergens: string;
};

type BiryaniItem = {
  name: string;
  description: string;
  price: string;
  isVeg?: boolean;
};

const MAIN_DISHES: MainDish[] = [
  {
    name: "Hari’s Ananas-Chicken mit Basmatireis",
    price: "21,90",
    description:
      "Zartes Hühnerfleisch, kunstvoll mariniert und in einer raffinierten Gewürzkomposition, serviert mit gewürzter Ananas – begleitet von duftendem Basmatireis. Eine exotische Spezialität mit Tiefe und Charakter.",
    allergens: "(G, M)",
  },
  {
    name: "Gegrillter Lachs in Kokos-Curry mit Basmatireis",
    price: "25,90",
    description:
      "Außen knusprig, innen zart – edles Lachsfilet vom Grill, serviert auf einer samtigen Curry-Sauce mit Kokosmilch und reifen Tomaten. Ein harmonisches Spiel aus feiner Würze und exotischer Frische.",
    allergens: "(D, G)",
  },
  {
    name: "Tandoori-Garnelen in Currysauce mit Basmatireis",
    price: "26,90",
    description:
      "Zart gegrillte Garnelen in einer aromatischen Tandoori-Gewürzmischung, serviert auf einer cremigen, fein abgeschmeckten Currysauce.",
    allergens: "(B, G, M)",
  },
  {
    name: "Tandoori Garnelen vom Grill mit Basmatireis",
    price: "25,90",
    description:
      "Saftig-zarte Garnelen, in einer aromatischen Joghurt-Gewürzmarinade veredelt und traditionell im Tandoori-Stil gegrillt. Serviert mit gerösteten Paprikastreifen und erfrischendem Minze-Chutney.",
    allergens: "(B, G, M)",
  },
  {
    name: "Lamm Curry mit Basmatireis",
    price: "26,90",
    description:
      "Zart geschmortes Lammfleisch in einem fein abgeschmeckten, aromatischen Curry und Karotten – nach traditionell-mughlaiischer Art zubereitet.",
    allergens: "(M)",
  },
];

const BIRYANIS: BiryaniItem[] = [
  {
    name: "Veg. Biryani",
    description: "(gegrilltes, saisonales Gemüse, veg.)",
    price: "21,90",
    isVeg: true,
  },
  {
    name: "Chicken Biryani",
    description: "(mariniertes, gegrilltes Hühnerfleisch)",
    price: "22,90",
  },
  {
    name: "Lamm Biryani",
    description: "(zartes geschmortes Lammfleisch)",
    price: "28,50",
  },
  {
    name: "Tandoori Garnelen Biryani",
    description: "(knusprig gegrillte Garnelen)",
    price: "29,50",
  },
];

export function MainDishes() {
  return (
    <section className={styles.mainDishesSection} aria-labelledby="indische-hauptspeisen-title">
      <div className={styles.sectionCard}>
        <header className={styles.mainDishesHeader}>
          <h2 id="indische-hauptspeisen-title" className={styles.mainDishesTitle}>
            INDISCHE HAUPTSPEISEN
          </h2>
          <p className={styles.mainDishesSubtitle}>SPEZIALITÄT DES HAUSES</p>
        </header>

        <div className={styles.mainDishesList}>
          {MAIN_DISHES.map((item) => (
            <article key={item.name} className={styles.mainDishItem}>
              <div className={styles.mainDishText}>
                <h3 className={styles.mainDishName}>{item.name}</h3>
                <p className={styles.mainDishDescription}>{item.description}</p>
                <p className={styles.mainDishAllergens}>{item.allergens}</p>
              </div>
              <p className={styles.mainDishPrice}>€ {item.price}</p>
            </article>
          ))}
        </div>

        <section className={styles.biryaniBox} aria-labelledby="biryani-title">
          <h3 id="biryani-title" className={styles.biryaniTitle}>
            Unsere beliebten Biryanis
          </h3>

          <div className={styles.biryaniIntro}>
            <p className={styles.biryaniIntroTitle}>Kumar’s Royal Biryani:</p>
            <p className={styles.biryaniIntroText}>
              Inspiriert von den königlichen Rezepturen Hyderabads & Lucknows – exklusiv bei Hari1090.
              Verfeinert vom Starkoch Hr. Vijay Kumar zu einem aromatischen Meisterwerk voller Gewürze,
              Raffinesse und Liebe zum Detail. Ein königlicher Genuss!
            </p>
            <p className={styles.biryaniIntroText}>
              Leicht würziges Reisgericht mit Mandeln, Nüsse und vielen Gewürzen (B,G,M,N). Empfehlung mit
              Raita (Joghurt mit Gewürzen)
            </p>
          </div>

          <div className={styles.biryaniList}>
            {BIRYANIS.map((item) => (
              <article key={item.name} className={styles.biryaniItem}>
                <div className={styles.biryaniMain}>
                  <div className={styles.biryaniTitleLine}>
                    <span className={styles.biryaniBullet} aria-hidden="true" />
                    <p className={styles.biryaniName}>{item.name}</p>
                    {item.isVeg ? <span className={`${styles.badge} ${styles.badgeVeg}`}>VEG</span> : null}
                  </div>
                  <p className={styles.biryaniDescription}>{item.description}</p>
                </div>
                <p className={styles.biryaniPrice}>€ {item.price}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
