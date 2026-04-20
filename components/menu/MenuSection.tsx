import { MenuItem, type MenuItemData } from "./MenuItem";
import styles from "./menu.module.css";

export function MenuSection({ title, items }: { title: string; items: MenuItemData[] }) {
  return (
    <section className={styles.menuSection} aria-labelledby="vorspeisen-title">
      <div className={styles.sectionCard}>
        <h2 id="vorspeisen-title" className={styles.sectionTitle}>
          {title}
        </h2>
        {items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
