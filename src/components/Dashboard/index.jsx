import styles from "./styles.module.css";
import { Notes } from "./Notes/index";
import { Trash } from "./Trash";
import { useState, useEffect } from "react";
import { getNote, editNote, deleteNote } from "../../services/api";

export function Dashboard({ username, setUsername }) {

    const [clickChange, setClickChange] = useState("Notes");
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNote(username).then(listNote => setNotes(listNote));
    }, [username]);


    function handleChangeColor(note, editedColor) {
        const editedNote = { ...note };
        editedNote.color = editedColor;
        const copyNotes = [...notes];
        const index = copyNotes.findIndex((note) => note.id === editedNote.id);
        copyNotes.splice(index, 1, editedNote);
        setNotes(copyNotes);
        editNote(username, note.id, { color: editedColor }).then(response => {
            console.log(response.note);
        }).catch(error => {
            console.log(error);
        })
    }

    function handleStatusNote(event, deletedState, setDeletedState, note) {
        event.preventDefault();
        setDeletedState(!deletedState);
        const editedNote = { ...note };
        editedNote.deleted = !note.deleted;
        const copyNotes = [...notes];
        const index = copyNotes.findIndex((note) => note.id === editedNote.id);
        copyNotes.splice(index, 1, editedNote);
        setNotes(copyNotes);
        editNote(username, note.id, { deleted: editedNote.deleted }).then(response => {
            console.log(response.note);
        }).catch(error => {
            console.log(error);
        })
    }

    function handlePermanentDelete(event, note) {
        event.preventDefault();
        const eliminatedNote = { ...note };
        const copyNotes = [...notes];
        const realNotes = copyNotes.filter((note) => note.id !== eliminatedNote.id);
        setNotes(realNotes);
        deleteNote(username, note.id).then(eliminatedNote);
    }

    return (
        <div className={styles.container}>
            <header>
                <h2>Welcome to Codeable Keep <span>{username}</span></h2>
                <a onClick={() => {
                    setUsername("");
                }}>
                    <p>Exit</p>
                </a>
            </header>

            <div className={styles.barSide}>
                <a className={`${clickChange === "Notes" && styles.select} ${styles.items}`} onClick={() => setClickChange("Notes")}>
                    <img src="/src/assets/corchetes.svg" alt="" />
                    <p>Notes</p>
                </a>
                <a className={`${clickChange !== "Notes" && styles.select} ${styles.items}`} onClick={() => setClickChange("Trash")}>
                    <img src="/src/assets/delete.svg" alt="" />
                    <p>Trash</p>
                </a>
            </div>

            <div className={styles.containerNotes}>
                {
                    clickChange === "Notes" ?
                        <Notes username={username} handleStatusNote={handleStatusNote} notes={notes.filter((note) => !note.deleted)}
                            setNotes={setNotes} clickChange={clickChange} handleChangeColor={handleChangeColor} />
                        : <Trash handleStatusNote={handleStatusNote} notes={notes.filter((note) => note.deleted)} setNotes={setNotes} handlePermanentDelete={handlePermanentDelete} clickChange={clickChange} />
                }
            </div>
        </div>
    )
}