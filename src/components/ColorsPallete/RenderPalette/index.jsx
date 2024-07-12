import styles from "./styles.module.css";

export function RenderPalette({ color }) {
  return (
    <div
      // onClick={() => onColor(color)}
      className={`${styles.tooltipColor} ${styles[color]}`}
    ></div>
  );
}
