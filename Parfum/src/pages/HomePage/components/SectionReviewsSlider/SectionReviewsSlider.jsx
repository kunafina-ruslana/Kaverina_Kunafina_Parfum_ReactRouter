import SectionReview from "./SectionReview/SectionReview"
import styles from './SectionReviewsSlider.module.css'

function SectionReviewsSlider() {

    return (
        <>
            <section>
                <h2 className={styles.h2}>Everyone is <em>enchanted</em> by us</h2>
                <div className={styles.cards}>
                    <SectionReview />
                    <SectionReview />
                    <SectionReview />
                </div>
            </section>


        </>
    )
}

export default SectionReviewsSlider