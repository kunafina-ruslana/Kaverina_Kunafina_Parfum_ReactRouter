import styles from './SectionCardAdvantage.module.css'
function SectionCardAdvantage() {

    return (
        <>
            <div className={styles.card}>
                <img src="/src/public/icons/Group.svg" alt="icon_advantage" loading="lazy" />
                <h3 className={styles.h3}>Sustainable Sourcing</h3>
                <p>We meticulously source our ingredients from sustainable and eco-friendly suppliers, ensuring that the delicate balance of nature is preserved.</p>
            </div>

        </>
    )
}

export default SectionCardAdvantage