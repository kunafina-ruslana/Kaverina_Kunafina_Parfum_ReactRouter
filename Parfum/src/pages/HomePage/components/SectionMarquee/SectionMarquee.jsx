
import styles from './SectionMarquee.module.css'

function SectionMarquee() {

    return (
        <>

            <marquee>
                <div className={styles.marquee}>
                    <div className={styles.marquee_element}><img src="/src/public/icons/iconoir_flower medium.svg" alt="icon_flower" loading="lazy"/>
                        <p className={styles.marquee_text}>Created for everyone</p></div>
                    <div className={styles.marquee_element}><img src="/src/public/icons/iconoir_flower medium.svg" alt="icon_flower" loading="lazy"/>
                        <p className={styles.marquee_text}>Created for everyone</p></div>
                    <div className={styles.marquee_element}><img src="/src/public/icons/iconoir_flower medium.svg" alt="icon_flower" loading="lazy"/>
                        <p className={styles.marquee_text}>Created for everyone</p></div>
                        <div className={styles.marquee_element}><img src="/src/public/icons/iconoir_flower medium.svg" alt="icon_flower" loading="lazy"/>
                        <p className={styles.marquee_text}>Created for everyone</p></div>
                    <div className={styles.marquee_element}><img src="/src/public/icons/iconoir_flower medium.svg" alt="icon_flower" loading="lazy"/>
                        <p className={styles.marquee_text}>Created for everyone</p></div>
                    <div className={styles.marquee_element}><img src="/src/public/icons/iconoir_flower medium.svg" alt="icon_flower" loading="lazy"/>
                        <p className={styles.marquee_text}>Created for everyone</p></div>
                        <div className={styles.marquee_element}><img src="/src/public/icons/iconoir_flower medium.svg" alt="icon_flower" loading="lazy"/>
                        <p className={styles.marquee_text}>Created for everyone</p></div>
                </div>

            </marquee>
        </>
    )
}

export default SectionMarquee