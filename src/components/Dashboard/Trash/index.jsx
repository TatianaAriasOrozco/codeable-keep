import styles from "../styles.module.css/";
import NoteCard from "../../NoteCard";

export function Trash({ notes, setNotes, handleStatusNote, handlePermanentDelete, clickChange }) {
    return (
        <>
            <div className={styles.notes}>
                {notes.map((note) => (
                    <NoteCard
                        key={note.id}
                        note={note}
                        handleStatusNote={handleStatusNote}
                        handlePermanentDelete={handlePermanentDelete}
                        clickChange={clickChange}
                    />
                ))}
            </div>
        </>
    )
}