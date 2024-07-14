
import styles from './styles.module.css';
import { ColorsPalette } from '../ColorsPallete/index';
import { useState } from 'react';
import { func } from 'prop-types';

function NoteCard({ note, handleChangeColor, handleStatusNote, handlePermanentDelete, clickChange, handleStatusColor }) {

  const [showColorsPalette, setShowColorsPalette] = useState(false);
  const [backgroundColors, setBackgroundColors] = useState(note.color);
  const [deletedState, setDeletedState] = useState(note.deleted);

  function preventDefault(event) {
    event.preventDefault();
  }


  return (
    <div className={styles.note}
      style={{
        backgroundColor: backgroundColors
      }}>
      <div className={styles.noteDetails}>
        <input type="text" value={note.title} disabled />
        <textarea className={styles.noteBody} name="" id="" value={note.body} disabled></textarea>
      </div>
      <div className={styles.noteFooter}>
        {showColorsPalette && <ColorsPalette setBackgroundColor={setBackgroundColors} setShowColorsPalette={setShowColorsPalette} showColorsPalette={showColorsPalette} handleChangeColor={handleChangeColor} note={note} handleStatusColor={handleStatusColor} />}

        {
          clickChange === "Notes"
            ?
            <a onClick={() => setShowColorsPalette(!showColorsPalette)}>
              <img src="src/assets/palette.svg" alt="palette color" /> </a> :
            <a onClick={(event) => handleStatusNote(event, deletedState, setDeletedState, note)}>
              <img src="src/assets/restore.svg" alt="restore icon" /> </a>
        }

        <a href="" onClick={(event) => {
          preventDefault(event);
          if (note.deleted) {
            handlePermanentDelete(event, note);
          } else {
            handleStatusNote(event, deletedState, setDeletedState, note);
          }
        }}>
          <img src="/src/assets/delete-grey.svg" alt="trash icon" />
        </a>
      </div>
    </div>
  )
}

export default NoteCard;
