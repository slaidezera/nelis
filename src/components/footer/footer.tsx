/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'
import { BsArrowUpCircle } from 'react-icons/bs'
export function FooterContent() {
    return (
        <>
        <div className={styles.footerContent}>
            <span>© 2022 Nelis Santiago.</span>
            <a href="/#about_me" className={styles.return}>
                    <BsArrowUpCircle className={styles.svg} />
            </a>
        </div>
        </>
    )
}