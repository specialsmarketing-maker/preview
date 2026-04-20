import styles from "./menu.module.css";

const ALLERGENS = [
  "A - Glutenhaltiges Getreide und daraus gewonnene Erzeugnisse",
  "B - Krebstiere und daraus gewonnene Erzeugnisse",
  "C - Eier von Geflügel und daraus gewonnene Erzeugnisse",
  "D - Fisch und daraus gewonnene Erzeugnisse (außer Gelatine)",
  "E - Erdnüsse und daraus gewonnene Erzeugnisse",
  "F - Sojabohnen und daraus gewonnene Erzeugnisse",
  "G - Milch von Säugetieren und Milcherzeugnisse",
  "H - Schalenfrüchte und daraus gewonnene Erzeugnisse",
  "L - Sellerie und daraus gewonnene Erzeugnisse",
  "M - Senf und daraus gewonnene Erzeugnisse",
  "N - Sesamsamen und daraus gewonnene Erzeugnisse",
  "O - Schwefeldioxid und Sulfite",
  "P - Lupinen und daraus gewonnene Erzeugnisse",
  "R - Weichtiere und daraus gewonnene Erzeugnisse",
];

export function FooterInfo() {
  return (
    <section className={styles.footerInfoSection} aria-labelledby="footer-info-title">
      <div className={styles.sectionCard}>
        <div className={styles.footerInfoWrap}>
          <h2 id="footer-info-title" className={styles.footerInfoTitle}>
            Frische und Qualität aus der Region
          </h2>

          <div className={styles.footerInfoMainText}>
            <p>
              Wir legen großen Wert auf regionale Zutaten und bereiten unsere Speisen frisch für Sie zu.
              Unsere Gerichte werden mit viel Liebe und Sorgfalt zubereitet, um Ihnen das Beste auf den
              Teller zu bringen.
            </p>
            <p>
              Bei Hari’s Bistro wird jede Speise frisch und individuell zubereitet. Bitte planen Sie
              ausreichend Zeit für Ihren Restaurantbesuch ein. Selbstverständlich können Sie den
              Schärfegrad Ihres Gerichts selbst bestimmen, von mild bis indisch scharf. Teilen Sie uns
              einfach bei der Bestellung Ihre Wünsche mit.
            </p>
            <p>Unsere erfahrenen Köche setzen alles daran, Ihre Vorstellungen perfekt umzusetzen.</p>
            <p>
              Wir freuen uns auf Ihren Besuch und sind stets bestrebt, Ihnen ein unvergessliches
              kulinarisches Erlebnis zu bereiten.
            </p>
          </div>

          <div className={styles.footerInfoNoteBlock}>
            <p>
              Alle Preise sind in Euro angegeben und verstehen sich inklusive der gesetzlich
              vorgeschriebenen Mehrwertsteuer.
            </p>
            <p>
              Wir möchten höflichst darauf hinweisen, dass wir pro Person € 2,00 Gedeck berechnen.
            </p>
            <p>Vielen Dank für Ihr Verständnis und Ihre Unterstützung für lokale Produzenten!</p>
          </div>

          <div className={styles.footerInfoAllergenBlock}>
            <h3 className={styles.footerInfoAllergenTitle}>Allergene:</h3>
            <div className={styles.footerInfoAllergenGrid}>
              {ALLERGENS.map((line) => (
                <p key={line} className={styles.footerInfoAllergenLine}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          <p className={styles.footerInfoBrand}>Hari1090 by Kumar’s Kitchen</p>
        </div>
      </div>
    </section>
  );
}
