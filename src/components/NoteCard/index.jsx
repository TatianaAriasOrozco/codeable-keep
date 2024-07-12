
import PropTypes, { func } from 'prop-types';
import styles from './styles.module.css';
import { ColorsPalette } from '../ColorsPallete/index';
import { useState } from 'react';

function NoteCard({title, body, color}) {

  const [showColorsPalette, setShowColorsPalette] = useState(false);
  const [backgroundColors, setBackgroundColors] = useState("white");

  function setColor(color) {
    console.log(color);
    // editNote(id, { color: color });
    setBackgroundColors(backgroundColors[color]);
  }

  return (
    <div className={styles.note}
      style={{
        backgroundColor: color
      }}>
      <div className={styles.noteDetails}>
        <input type="text" value={title} />
        <textarea className={styles.noteBody} name="" id="" value={body} ></textarea>
      </div>
      <div className={styles.noteFooter}>
        {showColorsPalette && <ColorsPalette />}
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

// NoteCard.propTypes = {
//   note: PropTypes.object.isRequired,
//   deleteNote: PropTypes.func.isRequired,
//   changeNoteColor: PropTypes.func.isRequired,
// };

export default NoteCard;
