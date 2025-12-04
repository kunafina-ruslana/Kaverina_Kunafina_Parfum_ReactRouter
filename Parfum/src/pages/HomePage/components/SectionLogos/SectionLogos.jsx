import styles from './SectionLogos.module.css'

function SectionLogos() {

    return (
        <>
            <section className={styles.sect_logo}>
                <p >As seen in</p>
                <div className={styles.list_logo}>
                    <img src="/src/public/icons/flow.svg" alt="flow" loading="lazy"/>
                    <img src="/src/public/icons/NINO.svg" alt="NINO" loading="lazy"/>
                    <img src="/src/public/icons/InTrend.svg" alt="InTrend" loading="lazy"/>
                    <img src="/src/public/icons/JUNE.svg" alt="JUNE" loading="lazy"/>
                    <img src="/src/public/icons/ZINE.svg" alt="ZINE" loading="lazy"/>
                    <img src="/src/public/icons/MAX.svg" alt="MAX" loading="lazy"/>
                </div>

            </section>

        </>
    )
}

export default SectionLogos