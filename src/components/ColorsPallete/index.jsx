import styles from "../ColorsPallete/colorspalette.module.css";
// import { useState } from 'react'
import { RenderPalette } from "./RenderPalette/index";

export function ColorsPalette({ setBackgroundColor, setShowColorsPalette, showColorsPalette, handleChangeColor, id }) {

  const backgroundColors = {
    white: "white",
    red: "#f28b82",
    orange: "#fbbc04",
    yellow: "#fff475",
    green: "#ccff90",
    cian: "#a7ffeb",
    blue: "#cbf0f8",
    azure: "#aecbfa",
    purple: "#d7aefb",
    pink: "#fdcfe8",
  };

  function setColor(color) {
    console.log(color);
    setShowColorsPalette(!showColorsPalette);
    setBackgroundColor(backgroundColors[color]);
    handleChangeColor(id, { color: backgroundColors[color] });
  }

  return (
    <div className={styles.colors}>
      {Object.keys(backgroundColors).map((color) => (
        <RenderPalette
          key={Math.random()}
          color={color}
          onColor={setColor}
        />
      ))}
    </div>
  );
}

