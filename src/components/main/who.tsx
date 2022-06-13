/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

interface Props {
    who: string;
    profile: string;
    title: string;
}
export function Who({ who, title,profile }: Props) {
    return (
        <>
           <div className={styles.content}>
            <img src={profile} alt="logo_nelis_santiago" />
            <div className={styles.textwho}>
                <h2>{who}</h2>
                <p>
                    {title}
                </p>
            </div>
           </div>
        </>
    )
}