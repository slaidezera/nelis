import { Navegation } from './navegation'
import { Social } from './social'
import styles from './styles.module.scss'
export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.grid}>
                <h2>Nelis Santiago.</h2>
                    <Navegation />
                    <Social />
            </div>
        </header>
    )
}