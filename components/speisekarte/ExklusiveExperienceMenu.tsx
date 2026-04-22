import {
  exklusiveCourses,
  exklusiveFooter,
  exklusiveIntro,
  exklusiveVegetarischNote,
  type ExklusiveDessertCourse,
  type ExklusiveHauptCourse,
  type ExklusiveSimpleCourse,
} from "@/lib/exklusiveExperienceMenuData";
import menuStyles from "../menu/menu.module.css";
import styles from "./exklusive-experience.module.css";

const SIMPLE_DIETARY: Record<string, "veg" | "non-veg" | null> = {
  c1: "non-veg",
  c2: "veg",
  c3: "non-veg",
};

function SimpleCourse({ c, index }: { c: ExklusiveSimpleCourse; index: number }) {
  const diet = SIMPLE_DIETARY[c.id];
  return (
    <article
      className={styles.course}
      style={{ animationDelay: `${0.04 * index}s` }}
    >
      <p className={styles.courseLabel}>{c.courseLabel}</p>
      <h3 className={styles.dishName}>{c.dishName}</h3>
      {diet && (
        <div className={styles.badgeRow} aria-hidden="true">
          {diet === "veg" ? (
            <span className={styles.iconVeg} title="Vegetarisch">
              VEG
            </span>
          ) : (
            <span className={styles.iconNonVeg} title="Nicht vegetarisch">
              NON-VEG
            </span>
          )}
        </div>
      )}
      <p className={styles.ingredients}>{c.ingredients}</p>
      {c.extraText ? <p className={styles.narrative}>{c.extraText}</p> : null}
      {c.tags ? <p className={styles.tagLine}>{c.tags}</p> : null}
    </article>
  );
}

function HauptCourse({ c, index }: { c: ExklusiveHauptCourse; index: number }) {
  return (
    <article
      className={styles.course}
      style={{ animationDelay: `${0.04 * index}s` }}
    >
      <p className={styles.courseLabel}>{c.courseLabel}</p>
      {c.options.map((opt, oi) => (
        <div key={opt.title} className={styles.optionGroup}>
          {oi > 0 ? <p className={styles.oder}>Oder</p> : null}
          <h3 className={styles.dishName}>{opt.title}</h3>
          {opt.lines.map((line) => (
            <p key={line} className={styles.ingredients}>
              {line}
            </p>
          ))}
          {opt.description ? <p className={styles.narrative}>{opt.description}</p> : null}
        </div>
      ))}
      <div className={styles.vegCallout}>
        <p className={styles.vegCalloutTitle}>{c.vegetarian.title}</p>
        {c.vegetarian.items.map((it) => (
          <p key={it.name} className={styles.vegItem}>
            {it.name}
            {it.line ? ` – ${it.line}` : ""}
          </p>
        ))}
        <div className={styles.badgeRow} aria-hidden="true">
          <span className={styles.iconVeg} title="Vegetarisch / Vegan">
            VEG
          </span>
        </div>
      </div>
    </article>
  );
}

function DessertCourse({ c, index }: { c: ExklusiveDessertCourse; index: number }) {
  return (
    <article
      className={styles.course}
      style={{ animationDelay: `${0.04 * index}s` }}
    >
      <p className={styles.courseLabel}>{c.courseLabel}</p>
      {c.options.map((opt, oi) => (
        <div key={opt.title} className={styles.optionGroup}>
          {oi > 0 ? <p className={styles.oder}>Oder</p> : null}
          <h3 className={styles.dishName}>{opt.title}</h3>
          {opt.lines.map((line) => (
            <p key={line} className={styles.ingredients}>
              {line}
            </p>
          ))}
          {opt.extraLine ? <p className={styles.narrative}>{opt.extraLine}</p> : null}
        </div>
      ))}
    </article>
  );
}

export function ExklusiveExperienceMenu() {
  return (
    <div className={menuStyles.menuSection}>
      <div className={`${menuStyles.sectionCard} ${styles.exclusiveRoot}`}>
        <header className={styles.intro}>
          <h2 className={styles.mainTitle}>{exklusiveIntro.title}</h2>
          <p className={styles.subtitle}>{exklusiveIntro.subtitle}</p>
          <p className={styles.description}>{exklusiveIntro.description}</p>
        </header>

        {exklusiveCourses.map((c, i) => {
          if (c.kind === "simple") return <SimpleCourse key={c.id} c={c} index={i} />;
          if (c.kind === "haupt") return <HauptCourse key={c.id} c={c} index={i} />;
          return <DessertCourse key={c.id} c={c} index={i} />;
        })}

        <div className={styles.noteBlock}>
          <p className={styles.noteText}>{exklusiveVegetarischNote.text}</p>
        </div>

        <footer className={styles.closing}>
          <p className={styles.closingLine}>{exklusiveFooter.line1}</p>
          <p className={styles.brandLine}>{exklusiveFooter.line2}</p>
        </footer>
      </div>
    </div>
  );
}
