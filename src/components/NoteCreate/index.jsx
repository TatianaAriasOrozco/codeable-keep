import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { ColorsPalette } from '../ColorsPallete/index';


function NoteCreate({ notes }) {
  // const [notes, setNotes] = useState(notes);
  console.log(notes);
  const [showColorsPalette, setShowColorsPalette] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form className={styles.noteCreator}
      onSubmit={notes}>
      <div className={styles.noteContainer}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Your note..."
          className={styles.noteBody}

        // onChange={(event) => { setBody(event.target.value) }}
        />
      </div>
      <div className={styles.noteActions} >
        {showColorsPalette && <ColorsPalette />}
        <a onClick={() => setShowColorsPalette(!showColorsPalette)}>
          <img src="src/assets/palette.svg" alt="palette color" />
        </a>
        <button type='submit'>Keep it!</button>
      </div>
    </form>
  );
}

// NoteCreate.propTypes = {
//   addNote: PropTypes.func.isRequired,
// };

export default NoteCreate;
