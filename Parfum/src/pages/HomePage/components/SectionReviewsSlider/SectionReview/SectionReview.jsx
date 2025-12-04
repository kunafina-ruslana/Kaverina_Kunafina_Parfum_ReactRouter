import styles from './SectionReview.module.css'

function SectionReview() {

    return (
        <>
            <div className={styles.comment}>
                <div className={styles.list_star}>
                    <img src="/src/public/icons/star.svg" alt="Star" loading="lazy"/>
                    <img src="/src/public/icons/star.svg" alt="Star" loading="lazy"/>
                    <img src="/src/public/icons/star.svg" alt="Star" loading="lazy"/>
                    <img src="/src/public/icons/star.svg" alt="Star" loading="lazy"/>
                    <img src="/src/public/icons/star.svg" alt="Star" loading="lazy"/>
                </div>

                <p className={styles.p_comment_descr}>“In love with these floral perfumes! The scents are balanced, not overpowering, and evoke a sense of serenity. I appreciate their commitment to sustainability too.”</p>
                <div className={styles.comment_avator}>
                    <img className={styles.img_comment_avator} src="/src/public/img/convertio.in_81e1b2dd11fa0e0944b6d3f6bd37a27ea2486149.webp" alt="Avator" loading="lazy"/>
                    <div >
                        <p className={styles.descrp_name_avator}>Samantha R.</p>
                        <p className={styles.descrp_country_avator}>Miami, Fl</p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default SectionReview