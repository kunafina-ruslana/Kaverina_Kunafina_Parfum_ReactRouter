
import styles from './ProductCard.module.css'
function ProductCardNoSale() {

    return (
        <>
        <div className={styles.card}>
        <img className={styles.descrp_img_product} src="/src/public/img/Parfum.webp" alt="Parfum" />
            <div className={styles.descrp}>
                <p className={styles.descrp_name_product}>Meadow</p>
                <p className={styles.descrp_name_company}>BREEZY & JOYFUL</p>
                <p className={styles.descrp_price_product}>$39.95</p>
            </div>
            <button className={styles.btn} href="/">SHOP NOW</button>
        </div>
            
        </>
    )
}

export default ProductCardNoSale