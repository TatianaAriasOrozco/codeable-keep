import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { ColorsPalette } from '../ColorsPallete/index';


function NoteCreate({ notes }) {

  const [showColorsPalette, setShowColorsPalette] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#FFF");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <form className={styles.noteCreator}
      onSubmit={(event) => {
        event.preventDefault();
        const newNote = { title: title, body: body, color: backgroundColor };
        notes(newNote)
      }}>
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
          onChange={handleBodyChange}
        />
      </div>
      <div className={styles.noteActions} >
        {showColorsPalette && <ColorsPalette setBackgroundColor={setBackgroundColor} setShowColorsPalette={setShowColorsPalette} showColorsPalette={showColorsPalette} />}
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
