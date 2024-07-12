import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

function NoteCreate() {
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addNote({
  //     title,
  //     body,
  //     color: 'white'
  //   });
  //   setTitle('');
  //   setBody('');
  // };

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
        <a href="">
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
