import styles from "./menu.module.css";

type PlatterItem = {
  title: string;
  subtitle: string;
  description: string;
  extraLine: string;
  price: string;
};

const PLATTERS: PlatterItem[] = [
  {
    title: "Kleine Share-Platte – Tasting Selection",
    subtitle: "(1 Stück je Sorte)",
    description:
      "Eine feine Platte mit je 1 Stück aller fünf Vorspeisen – ideal, um jede Geschmacksnote zu probieren und einen ersten Einblick in unsere Vielfalt zu erhalten.",
    extraLine: "Für 1 Person.",
    price: "14,90",
  },
  {
    title: "Medium Share-Platte – Duo Selection",
    subtitle: "(2 Stück je Sorte)",
    description:
      "Je 2 Stück aller fünf Mini-Vorspeisen – perfekt für Paare oder Gäste, die gemeinsam genießen möchten.",
    extraLine: "Für 1–2 Personen.",
    price: "23,90",
  },
  {
    title: "Große Share-Platte – Trio Selection",
    subtitle: "(3 Stück je Sorte)",
    description:
      "Je 3 Stück aller fünf Vorspeisen, elegant angerichtet und ideal zum Teilen am Tisch – für alle, die Vielfalt lieben.",
    extraLine: "Für 2–3 Personen.",
    price: "34,90",
  },
];

export function SharePlatters() {
  return (
    <section className={styles.shareSection} aria-labelledby="vorspeisen-platten-title">
      <div className={styles.sectionCard}>
        <div className={styles.shareHeader}>
          <div className={styles.shareTitleRow}>
            <span className={styles.shareBadgeNew}>NEW</span>
            <h2 id="vorspeisen-platten-title" className={styles.shareTitle}>
              VORSPEISEN PLATTEN
            </h2>
          </div>

          <div className={styles.shareSubtitleBlock}>
            <p className={styles.shareSubtitleTitle}>Hari1090 SHARE PLATTERS</p>
            <p className={styles.shareSubtitleText}>
              Eine Auswahl unserer fünf beliebtesten Vorspeisen – raffiniert als elegante Mini-Portionen
              (je 3 Stück) präsentiert. Perfekt zum Entdecken, Teilen oder als feines persönliches Tasting.
            </p>
            <p className={styles.shareSubtitleText}>
              Bestehend aus Avocado-Tartare, Samosa, Aloo Tikki, Chicken Tikka und Papadams (A,G,M)
            </p>
          </div>
        </div>

        <div className={styles.shareList}>
          {PLATTERS.map((item) => (
            <article key={item.title} className={styles.shareItem}>
              <div className={styles.shareItemMain}>
                <h3 className={styles.shareItemTitle}>{item.title}</h3>
                <p className={styles.shareItemSubtitle}>{item.subtitle}</p>
                <p className={styles.shareItemDescription}>{item.description}</p>
                <p className={styles.shareItemExtra}>{item.extraLine}</p>
              </div>
              <p className={styles.shareItemPrice}>€ {item.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
