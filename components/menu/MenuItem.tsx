import styles from "./menu.module.css";

export type MenuItemData = {
  name: string;
  description: string;
  price: string;
  allergens: string;
  isVeg: boolean;
  isNew: boolean;
};

export function MenuItem({ item }: { item: MenuItemData }) {
  return (
    <article className={styles.item}>
      <div className={styles.itemMain}>
        <div className={styles.titleLine}>
          <h3 className={styles.itemTitle}>{item.name}</h3>
          {item.isVeg ? <span className={`${styles.badge} ${styles.badgeVeg}`}>VEG</span> : null}
          {item.isNew ? <span className={`${styles.badge} ${styles.badgeNew}`}>NEW</span> : null}
        </div>
        <p className={styles.itemDescription}>{item.description}</p>
        {item.allergens ? <p className={styles.itemAllergens}>{item.allergens}</p> : null}
      </div>
      <p className={styles.price}>€ {item.price}</p>
    </article>
  );
}
