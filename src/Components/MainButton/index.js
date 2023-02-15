import styles from "./MainButton.module.css";

export default function MainButton({ children, tamanho }) {
  return (
    <button
      className={`
  ${styles.botao}
  ${styles[tamanho]}`}
    >
      {children}
    </button>
  );
}
