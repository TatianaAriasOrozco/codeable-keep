import NoteCard from '../../NoteCard/index';
import NoteCreate from '../../NoteCreate/index';
import styles from "../styles.module.css/";
import { createNote, getNote, editNote } from "../../../services/api";
import { useEffect, useState } from 'react';

export function Notes({username}) {
  
   const [notes, setNotes] = useState([]);
   

    useEffect(() => {
        getNote(username).then(listNote => setNotes(listNote));

    }, [username]);


    function handleSubmit(newNote) {
        createNote(username, newNote).then(note => {
            setNotes([...notes, note])
        })
    }

    function handleChangeColor(id, body) {
        editNote(username, id, body).then(response => {
            console.log(response.note);
        }).catch(error => {
            console.log(error);
        })
    }


  return(
  <div className={styles.containerNotes}>
    <NoteCreate notes={handleSubmit} />
    <div className={styles.notes}>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          title={note.title}
          body={note.body}
          color={note.color}
          handleChangeColor={handleChangeColor}
          id={note.id}
        />
      ))}
    </div>
  </div>);
}
