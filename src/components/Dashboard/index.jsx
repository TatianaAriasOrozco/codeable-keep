import styles from "./styles.module.css";
import NoteCard from '../NoteCard/index';
import NoteCreate from '../NoteCreate/index';
// import { useState } from 'react';

export function Dashboard() {
    // const [notes, setNotes] = useState([
    //     { id: 1, title: 'Nota Ejemplo', body: 'Cuerpo de nota de ejemplo', color: 'white' },
    //     { id: 2, title: 'Nota Ejemplo', body: 'Cuerpo de nota de ejemplo', color: 'red' },
    //     // Puedes agregar más notas aquí
    // ]);

    // const addNote = (note) => {
    //     setNotes([...notes, { ...note, id: Date.now() }]);
    // };

    // const deleteNote = (id) => {
    //     setNotes(notes.filter(note => note.id !== id));
    // };

    // const changeNoteColor = (id, color) => {
    //     setNotes(notes.map(note => (note.id === id ? { ...note, color } : note)));
    // };

    return (
        <div className={styles.container}>
            <header>
                <h2>Welcome to Codeable Keep <span>Tatiana</span></h2>
                <a href="/">
                    <p>Exit</p>
                </a>
            </header>

            <div className={styles.barSide}>
                <a className={`${styles.select} ${styles.items}`}>
                    <img src="/src/assets/corchetes.svg" alt="" />
                    <p>Notes</p>
                </a>
                <a className={styles.items}>
                    <img src="/src/assets/delete.svg" alt="" />
                    <p>Trash</p>
                </a>
            </div>
            <div className={styles.containerNotes}>
                <NoteCreate />
                <div className={styles.notes}>
                    <NoteCard />
                </div>
            </div>

        </div>
    )
}