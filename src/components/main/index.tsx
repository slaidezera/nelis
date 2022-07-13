import { Frields } from "./frields";
import { Main } from "./home";
import { KnowLedge } from "./knowledge";
import { Project } from "./project";
import { Service } from "./service";
import { Who } from "./who";
import { ToastContainer } from 'react-nextjs-toast'

import styles from './styles.module.scss'

export function HomePage() {
    return (
        <>
            <main className={styles.main}>
                <section className={styles.home} id='about_me'>
                    <div className={styles.grid}>
                        <Main 
                            name="Ola, meu nome e"
                            title="Nelis Santiago"
                            typeWriter="<strong>Front-End </strong>Developer && Ui Designer."
                            link="https://instagram.com/nelis_code"
                        />
                    </div>
                </section>

                <section className={styles.who} id="who">
                    <div className={styles.grid} data-aos="fade-up">
                        <Who 
                            who="Quem sou?"
                            profile="https://github.com/slaidezera.png"
                            title="
                            Olá, meu nome e Nelis Santiago, sou freelancer como Front-end developer && Ui designer, desenvolvo aplicaçoes de alto nivel concentrado em performance, detalhes e responsivo.
                            "
                        />
                    </div>
                </section>

                <section className={styles.service}>
                    <div className={styles.grid} data-aos="fade-up">
                        <Service 
                            titleOne="Ui Designer"
                            titleTwo="Desenvolvimento"
                            titleTheree="Mobile"
                            paragraphOne="Desenho interface profisionais, que seja clara, que o usuario fique satisfeito pelo trabalho."
                            paragraphTwo="Desenvolvo websites profisionais, landing pages e e-commerce, portfolio e blogs etc..."
                            paragraphTheree="Faço o responsivo que seja de forma que o usuario mobile e tablet acesse com facilidade."
                        />
                    </div>
                </section>
                <section className={styles.project}>
                    <div className={styles.grid} data-aos="fade-up">
                        <Project 
                            titleOne="Em Breve"
                            titleTwo="Em Breve"
                            titleTheree="Em Breve"
                            paragraphOne="Pegue o café e espere um momento, estou desenvolvendo o projeto."
                            paragraphTwo="Pegue o café e espere um momento, estou desenvolvendo o projeto."
                            paragraphTheree="Pegue o café e espere um momento, estou desenvolvendo o projeto."
                        />
                    </div>
                </section>
                <section className={styles.Frields} id="frields">
                    <div className={styles.grid} data-aos="fade-up">
                        <Frields />
                    </div>
                </section>
                <section className={styles.knowledge} id="knowledge">
                    <div className={styles.grid} data-aos="fade-up">
                        <KnowLedge />
                    </div>
                </section>
                <ToastContainer align="flex-end"/>
            </main>
        </>
    )
}