
import PropTypes from 'prop-types';
import './styles.module.css';

function NoteCard({ note, deleteNote, changeNoteColor }) {
  return (
    <div className="note-card" style={{ backgroundColor: note.color }}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <div className="note-actions">
        <button onClick={() => changeNoteColor(note.id, 'red')}>Red</button>
        <button onClick={() => changeNoteColor(note.id, 'blue')}>Blue</button>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </div>
    </div>
  );
}

NoteCard.propTypes = {
  note: PropTypes.object.isRequired,
  deleteNote: PropTypes.func.isRequired,
  changeNoteColor: PropTypes.func.isRequired,
};

export default NoteCard;
