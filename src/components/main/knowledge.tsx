import Image from 'next/image'
import styles from './styles.module.scss'
import html from '../../../public/images/html.svg'
import css from '../../../public/images/css.svg'
import sass from '../../../public/images/sass.svg'
import styled from '../../../public/images/styled.svg'
import javascript from '../../../public/images/js.svg'
import tailwind from '../../../public/images/tailwind.svg'
import nextjs from '../../../public/images/next.svg'


export function KnowLedge() {  
    return (  
        <>
            <h2>Conhecimentos<span className={styles.span}>.</span></h2>
            <div className={styles.content}>
            <article className={styles.wrapper}>
                <div className={styles.react} id={styles.facebook}>
                <span className={styles.tooltip}>HTML</span>
                <Image src={html} width={80} height={80}/>
                </div>
            </article>
            <article className={styles.wrapper}>
                <div className={styles.react} id={styles.facebook}>
                <span className={styles.tooltip}>CSS</span>
                <Image src={css} width={80} height={80}/>
                </div>
            </article>
            <article className={styles.wrapper}>
                <div className={styles.react} id={styles.facebook}>
                <span className={styles.tooltip}>SCSS</span>
                <Image src={sass} width={80} height={80}/>
                </div>
            </article>
            <article className={styles.wrapper}>
                <div className={styles.react} id={styles.facebook}>
                <span className={styles.tooltip}>STYLED_COMPONENTS</span>
                <Image src={styled} width={80} height={80}/>
                </div>
            </article>
            <article className={styles.wrapper}>
                <div className={styles.react} id={styles.facebook}>
                <span className={styles.tooltip}>TAILWIND</span>
                <Image src={javascript} width={80} height={80}/>
                </div>
            </article>
            <article className={styles.wrapper}>
                <div className={styles.react} id={styles.facebook}>
                <span className={styles.tooltip}>JAVASCRIPT</span>
                <Image src={tailwind} width={80} height={80}/>
                </div>
            </article>
            <article className={styles.wrapper}>
                <div className={styles.react} id={styles.facebook}>
                <span className={styles.tooltip}>NEXTJS</span>
                <Image src={nextjs} width={80} height={80}/>
                </div>
            </article>
            </div>
        </>
    )
}

