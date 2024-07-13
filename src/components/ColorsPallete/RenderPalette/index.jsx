import styles from "./styles.module.css";

export function RenderPalette({ color, onColor }) {
  return (
    <div
      onClick={() => onColor(color)}
      className={`${styles.tooltipColor} ${styles[color]}`}
    ></div>
  );
}
