import { FooterContent } from './footer'
import styles from './styles.module.scss'
export function Footer() {
    
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.grid}>
                <FooterContent />
            </div>
        </footer>
        </>
    )
}