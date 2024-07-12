import styles from "./styles.module.css";
import { NoteCreate } from "../NoteCreate";
import { NoteCard } from "../NoteCard";


export function Dashboard() {
    
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
                    <NoteCreate/>
                    <div className="notes">
                        <p>No notes</p>
                        <NoteCard/>
                    </div>
                </div>
            
        </div>
    )
}