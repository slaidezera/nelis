/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

import { AiFillInstagram } from 'react-icons/ai'

import { IoLogoWhatsapp } from 'react-icons/io'

import { toast } from 'react-nextjs-toast'

export function Frields() {

    function HandleCopyProfile() {
        const name = "Fabrício Aquiles#6083"
        navigator.clipboard.writeText(name)

        toast.notify(`${name}`, {
            duration: 5,
            type: "success",
            title: "Usuario Copiado!",
          })
    }

    function HandleCopyProfileTwo() {
        const name = "Matheus Ferreira#2331"
        navigator.clipboard.writeText(name)

        toast.notify(`${name}`, {
            duration: 5,
            type: "success",
            title: "Usuario Copiado!",
          })
    }

    function HandleCopyProfileThree() {
        const name = "DevLight#4136"
        navigator.clipboard.writeText(name)

        toast.notify(`${name}`, {
            duration: 5,
            type: "success",
            title: "Usuario Copiado!",
        })
    }

    function HandleCopyProfileFive() {
        const name = "Gabriel Santos#4770"
        navigator.clipboard.writeText(name)

        toast.notify(`${name}`, {
            duration: 5,
            type: "success",
            title: "Usuario Copiado!",
          })
    }

    return (  
        <>
        <h2>Amigos<span className={styles.span}>.</span></h2>
            <div className={styles.content}>
                <article className={styles.frield}>
                    <div className={styles.image}>
                        <img src="https://github.com/fabricioaquiles.png" alt="" />
                    </div>
                    <span>Fabricio Aquiles</span>
                    <p>Developer Full Stack</p>
                    <div className={styles.btn}>
                             <button type="button" onClick={HandleCopyProfile}>
                                Discord
                            </button>
                        <a href="https://www.instagram.com/fabricioaquiles_/" className={styles.inst}>
                            <AiFillInstagram />
                        </a>
                        <a href=""  className={styles.inst}>
                            <IoLogoWhatsapp />
                        </a>
                    </div>
                </article>
                <article className={styles.frield}>
                    <div className={styles.image}>
                        <img src="https://github.com/zMatheusPro.png" alt="" />
                    </div>
                    <span>Matheus Ferreira</span>
                    <p>Developer Full Stack</p>
                    <div className={styles.btn}>
                            <button type="button" onClick={HandleCopyProfileTwo}>
                                Discord
                            </button>
                        <a href="" className={styles.inst}>
                            <AiFillInstagram />
                        </a>
                        <a href="" className={styles.inst}>
                            <IoLogoWhatsapp />
                        </a>
                    </div>
                </article>
                <article className={styles.frield}>
                    <div className={styles.image}>
                        <img src="https://github.com/LightPlayBR.png" alt="" />
                    </div>
                    <span>Caio Vinicius</span>
                    <p>Developer Bukkit</p>
                    <div className={styles.btn}>
                            <button type="button" onClick={HandleCopyProfileThree}>
                                Discord
                            </button>
                        <a href="https://www.instagram.com/DevLightBR" className={styles.inst}>
                            <AiFillInstagram />
                        </a>
                        <a href="" className={styles.inst}>
                            <IoLogoWhatsapp />
                        </a>
                    </div>
                </article>
                <article className={styles.frield}>
                    <div className={styles.image}>
                        <img src="https://github.com/gabrielbs21.png" alt="" />
                    </div>
                    <span>Gabriel Santos</span>
                    <p>Developer Back-End</p>
                    <div className={styles.btn}>
                        <button onClick={HandleCopyProfileFive} type="button">
                                Discord
                        </button>
                        <a href="" className={styles.inst}>
                            <AiFillInstagram />
                        </a>
                        <a href="" className={styles.inst}>
                            <IoLogoWhatsapp />
                        </a>
                    </div>
                </article>
                
            </div>
        </>
    )
}

