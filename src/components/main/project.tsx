import styles from './styles.module.scss'

interface Props {
    titleOne: string;
    titleTwo: string;
    titleTheree: string;
    paragraphOne: string;
    paragraphTwo: string;
    paragraphTheree: string;
}
export function Project({titleOne, titleTwo, titleTheree, paragraphOne,paragraphTwo, paragraphTheree}: Props) {
    return (
        <>
           <h2>Projetos<span>.</span></h2>
            <div className={styles.Projectcontent}>
                <article className={styles.list}>
                     <h3>{titleOne}</h3>
                     <p>
                        {paragraphOne}
                     </p>
                </article>
                <article className={styles.list}>
                    <h3>{titleTwo}</h3>
                     <p>
                        {paragraphTwo}
                     </p>
                </article>
                <article className={styles.list}>
                    <h3>{titleTheree}</h3>
                     <p>
                        {paragraphTheree}
                     </p>
                </article>
            </div>
        </>
    )
}