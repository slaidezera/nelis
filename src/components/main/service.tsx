/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import styles from './styles.module.scss'
import Ui from '../../../public/images/ui.svg'
import Desen from '../../../public/images/code.svg'
import Responsive from '../../../public/images/mobile.svg'

interface Props {
    titleOne: string;
    titleTwo: string;
    titleTheree: string;
    paragraphOne: string;
    paragraphTwo: string;
    paragraphTheree: string;
}

export function Service({titleOne, titleTwo, titleTheree, paragraphOne, paragraphTwo, paragraphTheree}: Props) {
    return (
        <>
            <h2>Serviços<span>.</span></h2>
            <div className={styles.ServiceContent}>
                <article className={styles.list}>
                    <Image src={Ui} />
                     <h3>{titleOne}</h3>
                     <p>
                        {paragraphOne}
                     </p>
                </article>
                <article className={styles.list}>
                    <Image src={Desen} />
                     <h3>{titleTwo}</h3>
                     <p>
                        {paragraphTwo}
                     </p>
                </article>
                <article className={styles.list}>
                    <Image src={Responsive} />
                     <h3>{titleTheree}</h3>
                     <p>
                        {paragraphTheree}
                     </p>
                </article>
               
            </div>
        </>
    )
}
