import styles from "./styles.module.css";
import { Notes } from "./Notes/index";

export function Dashboard({username, setUsername}) {

   

    return (
        <div className={styles.container}>
            <header>
                <h2>Welcome to Codeable Keep <span>{username}</span></h2>
                <a onClick={() => setUsername("") }>
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

           <Notes username={username} />
        {/* NOTE COMPONENT */}
            {/* <div className={styles.containerNotes}>
                <NoteCreate notes={handleSubmit} />
                <div className={styles.notes}>
                    {
                        notes.map(note => <NoteCard key={note.id} title={note.title} body={note.body} color={note.color} handleChangeColor={handleChangeColor} id={note.id} />)
                    }
                </div>
            </div> */}

        </div>
    )
}