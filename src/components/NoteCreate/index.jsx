import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { ColorsPalette } from '../ColorsPallete/index';

function NoteCreate() {
  
  const [showColorsPalette, setShowColorsPalette] = useState(false);

  return (
    <form className={styles.noteCreator}>
      <div className={styles.noteContainer}>
        <input
          type="text"
          placeholder="Title"
        />
        <textarea
          placeholder="Your note..."
          className={styles.noteBody}
        />
      </div>
      <div className={styles.noteActions} >
        {showColorsPalette && <ColorsPalette />}
        <a onClick={() => setShowColorsPalette(!showColorsPalette)}>
          <img src="src/assets/palette.svg" alt="palette color" />
        </a>
        <a href="/">
          <p>Keep it!</p>
        </a>
      </div>
    </form>
  );
}

// NoteCreate.propTypes = {
//   addNote: PropTypes.func.isRequired,
// };

export default NoteCreate;
