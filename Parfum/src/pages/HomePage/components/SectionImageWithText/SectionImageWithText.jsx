import { useNavigate } from 'react-router-dom'
import styles from './SectionImageWithText.module.css'

function SectionImageWithText() {
    const navigator = useNavigate()

    return (
        <>
        <section className={styles.sect_descr}>
        <img className={styles.img_rose} src="/src/public/img/Rose.webp " alt="Rose" loading="lazy-loading"/>
        <div className={styles.block_descr}>
        <h2>Smell like a <em>dream</em></h2>
            <p>With every delicate spritz, our scents weave a tapestry of dreams, enveloping you in an irresistible aura that lingers like the sweetest reverie. Each note is meticulously crafted to transport you to a realm where your aspirations come alive, leaving an impression that's as lasting as the memory of a cherished dream.</p>
        <button type="submit" onClick={() => navigator("/blog")} className={styles.btn}>SHOP NOW</button>
        </div>
            
        </section>
           
        </>
    )
}

export default SectionImageWithText