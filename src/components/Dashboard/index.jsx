import styles from "./styles.module.css";
import NoteCard from '../NoteCard/index';
import NoteCreate from '../NoteCreate/index';
import { createNote, getNote, editNote } from "../../services/api";
import { useEffect, useState } from 'react';

export function Dashboard() {

    const [notes, setNotes] = useState([]);
    const username = localStorage.getItem('username');

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
                        notes.map(note => <NoteCard key={note.id} title={note.title} body={note.body} color={note.color} handleChangeColor={handleChangeColor} id={note.id} />)
                    }
                </div>
            </div>

        </div>
    )
}