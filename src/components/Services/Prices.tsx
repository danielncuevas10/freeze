import styles from "./Prices.module.scss";
import type { PriceItem } from "./PriceRow";
import PriceRow from "./PriceRow";

type PriceCardProps = {
  categoryName: string;
  services: PriceItem[];
};

export default function PriceCard({ categoryName, services }: PriceCardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.categoryTitle}>{categoryName}</h2>
      <hr className={styles.divider} />
      <div className={styles.rowsContainer}>
        {services.map((service) => (
          <PriceRow key={service.id} item={service} />
        ))}
      </div>
    </div>
  );
}
