import { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.module.css';

function NoteCreate({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      title,
      body,
      color: 'white'
    });
    setTitle('');
    setBody('');
  };

  return (
    <form className="note-creator" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        className="note-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Your note..."
        className="note-body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="note-actions">
        <button type="submit" className="save-btn">Keep it!</button>
      </div>
    </form>
  );
}

NoteCreate.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteCreate;
