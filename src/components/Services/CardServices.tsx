import styles from "./CardServices.module.scss";

export type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  bullets?: string[];
  alt?: string;
};

type Props = { service: Service };

export default function ServicesCard({ service }: Props) {
  return (
    <li className={`${styles.card} `}>
      <div className={styles.row}>
        <img src={service.icon} /> <h1>{service.title}</h1>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.text}>
        <p>{service.description}</p>
      </div>
      <ul>
        {service.bullets?.map((bullet, idx) => (
          <li key={idx} className={styles.bullet}>
            {bullet}
          </li>
        ))}
      </ul>
    </li>
  );
}
