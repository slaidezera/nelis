/* eslint-disable @next/next/no-html-link-for-pages */
import styles from './styles.module.scss'
export function Navegation() {
    return (
        <>
            <nav className={styles.navegation}>
                <ul>
                    <li data-aos="fade-up"><a href="/#who">Quem sou</a></li>
                    <li data-aos="fade-up" data-aos-duration="2000"><a href="/#knowledge">Conhecimentos</a></li>
                    <li data-aos="fade-up" data-aos-duration="2500"><a href="/#frields">Amigos</a></li>
                </ul>
            </nav>
        </>
    )
}