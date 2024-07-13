import styles from "./styles.module.css";
import NoteCard from '../NoteCard/index';
import NoteCreate from '../NoteCreate/index';
import { createNote, getNote } from "../../services/api";
import { useEffect, useState } from 'react';

export function Dashboard() {
    const [notes, setNotes] = useState([]);


    const username = localStorage.getItem('username');

    useEffect(() => {
        getNote(username).then(listNote => setNotes(listNote));

    }, [username]);

    function handleSubmit() {
        createNote(username).then(note => {
            setNotes([...notes, note])
        })
    }

    return (
        <div className={styles.container}>
            <header>
                <h2>Welcome to Codeable Keep <span>{username}</span></h2>
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
                <NoteCreate notes={handleSubmit} />
                <div className={styles.notes}>
                    {
                        notes.map(note => <NoteCard key={note.id} title={note.title} body={note.body} color={note.color} />)
                    }
                </div>
            </div>

        </div>
    )
}