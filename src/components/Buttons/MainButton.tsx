import styles from "./MainButton.module.scss";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export const MainButton = ({
  text,
  variant = "primary",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.mainButton} ${styles[variant]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
