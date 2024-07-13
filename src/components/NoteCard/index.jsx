
import PropTypes, { func } from 'prop-types';
import styles from './styles.module.css';
import { ColorsPalette } from '../ColorsPallete/index';
import { useState } from 'react';

function NoteCard({ title, body, color, handleChangeColor, id }) {

  const [showColorsPalette, setShowColorsPalette] = useState(false);
  const [backgroundColors, setBackgroundColors] = useState(color);


  return (
    <div className={styles.note}
      style={{
        backgroundColor: backgroundColors
      }}>
      <div className={styles.noteDetails}>
        <input type="text" value={title} disabled />
        <textarea className={styles.noteBody} name="" id="" value={body} disabled></textarea>
      </div>
      <div className={styles.noteFooter}>
        {showColorsPalette && <ColorsPalette setBackgroundColor={setBackgroundColors} setShowColorsPalette={setShowColorsPalette} showColorsPalette={showColorsPalette} handleChangeColor={handleChangeColor} id={id} />}
        <a onClick={() => setShowColorsPalette(!showColorsPalette)}>
          <img src="src/assets/palette.svg" alt="palette color" />
        </a>
        <a href="">
          <img src="/src/assets/delete-grey.svg" alt="trash icon" />
        </a>
      </div>
    </div>
  )
}

export default NoteCard;
