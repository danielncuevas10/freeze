import styles from "./PriceRow.module.scss";

export type PriceItem = {
  id: string;
  title: string;
  time: string;
  thePrice: string;
};

export default function PriceRow({ item }: { item: PriceItem }) {
  return (
    <div className={styles.serviceRow}>
      <div className={styles.info}>
        <h4>{item.title}</h4>
        <p>{item.time}</p>
      </div>
      <div className={styles.priceTag}>
        <span>{item.thePrice}</span>
      </div>
    </div>
  );
}
