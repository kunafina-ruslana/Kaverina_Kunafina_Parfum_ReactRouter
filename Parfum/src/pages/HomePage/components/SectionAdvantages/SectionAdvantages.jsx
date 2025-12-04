import SectionCardAdvantage from "./SectionCardAdvantage/SectionCardAdvantage"
import styles from './SectionAdvantages.module.css'

function SectionAdvantages() {

    return (
        <>
            <section>
                <div className={styles.block}>
                    <div className={styles.block_descrp}>
                        <h2 className={styles.h2}>Safe for you, safe for the <em>earth</em></h2>
                        <div className={styles.cards}>
                            <SectionCardAdvantage />
                            <SectionCardAdvantage />
                            <SectionCardAdvantage />
                            <SectionCardAdvantage />
                        </div>
                    </div>
                    <img className={styles.img_romashka} src="/src/public/img/Romashka.webp" alt="Romashka" loading="lazy" />
                </div>
            </section>

        </>
    )
}

export default SectionAdvantages