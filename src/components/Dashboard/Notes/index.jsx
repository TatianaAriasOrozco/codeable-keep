import NoteCard from '../../NoteCard/index';
import NoteCreate from '../../NoteCreate/index';
import styles from "../styles.module.css/";
import { createNote, getNote, editNote } from "../../../services/api";
import { useEffect, useState } from 'react';

export function Notes({ username, notes, setNotes, handleStatusNote, clickChange, handleChangeColor }) {

  function handleSubmit(newNote) {
    createNote(username, newNote).then(note => {
      setNotes([note, ...notes])
    })
  }

  return (
    <>
      <NoteCreate notes={handleSubmit} />
      <div className={styles.notes}>
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            handleChangeColor={handleChangeColor}
            handleStatusNote={handleStatusNote}
            clickChange={clickChange}
          />
        ))}
      </div>
    </>);
}
