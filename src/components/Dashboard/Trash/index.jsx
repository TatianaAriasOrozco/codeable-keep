import styles from "../styles.module.css/";
import NoteCard from "../../NoteCard";

export function Trash({ notes, setNotes, handleDelete, handlePermanentDelete, clickChange }) {
    return (
        <>
            <div className={styles.notes}>
                {notes.map((note) => (
                    <NoteCard
                        key={note.id}
                        note={note}
                        handleDelete={handleDelete}
                        handlePermanentDelete={handlePermanentDelete}
                        clickChange={clickChange}
                    />
                ))}
            </div>
        </>
    )
}