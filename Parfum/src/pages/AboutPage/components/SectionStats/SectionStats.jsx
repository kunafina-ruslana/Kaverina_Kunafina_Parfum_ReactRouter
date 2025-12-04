import styles from './SectionStats.module.css'

function SectionStats() {

    return (
        <>

            <section>
                <h2 className={styles.stat_title}>The <em>artisanal</em> difference.</h2>
                <div className={styles.stat_cards}>
                    <div className={styles.stat_card}>
                        <p className={styles.procent}>95%</p>
                        <p className={styles.procent_title}>Sustainability First</p>
                        <p className={styles.procent_descrp}>Over 95% of our ingredients are responsibly sourced, supporting local communities and preserving biodiversity. Our commitment to sustainability is more than a principle.</p>
                    </div>
                    <div className={styles.stat_card}>
                        <p className={styles.procent}>100%</p>
                        <p className={styles.procent_title}>Cruelty-Free Excellence</p>
                        <p className={styles.procent_descrp}>We are proudly cruelty-free, ensuring that none of our products are tested on animals. This principle is woven into our brand's DNA, and our dedication to ethical standards.</p>
                    </div>
                    <div className={styles.stat_card}>
                        <p className={styles.procent}>100%</p>
                        <p className={styles.procent_title}>Artistic Expression</p>
                        <p className={styles.procent_descrp}>Each of our fragrances is a result of creative vision. This commitment to artistic expression leads to scents that are 100% unique, testaments to our creativity and excellence.</p>
                    </div>
                </div>
            </section>
            
           
            <div className={styles.banner_passion}>
                <p className={styles.banner_passion_title}>Infusing <em>passion</em> into every bottle</p>
            </div>
        </>
    )
}

export default SectionStats