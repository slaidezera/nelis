import styles from './styles.module.scss'
import { toast } from 'react-nextjs-toast'

import { BsInstagram, BsWhatsapp, BsCodeSlash } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import { BiUser } from 'react-icons/bi'
import { FiSmile, FiGithub } from 'react-icons/fi'
import { ToastContainer } from 'react-nextjs-toast'

export function MyBio() {

    function HandleCopyProfile() {
        const name = "Nelis Santiago#2022"
        navigator.clipboard.writeText(name)

        toast.notify(`${name}`, {
            duration: 5,
            type: "success",
            title: "Usuario Copiado!",
        })
    }
    
    return (
        <>
                 <main className={styles.main}>
                <div className={styles.welcome}>
                    <article className={styles.wrapper}>
                <div className={styles.react} id={styles.facebook}>
                <span className={styles.tooltip}>Hello, Welcome!</span>
                    <FiSmile />
                </div>
            </article>
                </div>
                <div className={styles.grid}>
                    <div className={styles.profile}>
                        <img src="https://github.com/slaidezera.png" alt="" />
                        <span>Nelis Santiago.</span>
                        <strong>Front-End Developer & Ui Designer.</strong>
                    </div>
                    <section className={styles.section_list}>
                        <div className={styles.links}>
                            <a href="">
                                <article className={styles.discord} onClick={HandleCopyProfile}>
                                <span><FaDiscord className={styles.icon} />Discord</span>
                                </article>
                            </a>
                            <a href="https://instagram.com/nelis_code">
                                <article className={styles.instagram}>
                                    <span><BsInstagram className={styles.icon} />Instagram</span>
                                </article>
                            </a>
                            <a href="">
                                <article className={styles.whatsapp}>
                                    <span><BsWhatsapp className={styles.icon} />Whatsapp</span>
                                </article>
                            </a>
                            <a href="https://www.nelissantiago.com.br/#frields">
                                <article className={styles.frield}>
                                    <span><BiUser className={styles.icon} />Amigos</span>
                                </article>
                            </a>
                            <a href="https://www.nelissantiago.com.br">
                                <article className={styles.portfolio}>
                                    <span><BsCodeSlash className={styles.icon} />Portfolio</span>
                                </article>
                            </a>
                            <a href="https://github.com/slaidezera">
                                <article className={styles.github}>
                                    <span><FiGithub className={styles.icon} />GitHub</span>
                                </article>
                            </a>
                        </div>
                    </section>
                </div>
            </main>
            <ToastContainer align="flex-end"/>
        </>
    )
}