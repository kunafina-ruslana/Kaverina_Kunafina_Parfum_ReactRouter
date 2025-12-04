import ProductCard from "./ProductCard/ProductCard"
import ProductCardNoSale from "./ProductCard/ProductCardNoSale"
import styles from './SectionProducts.module.css'

function SectionProducts() {

  return (
    <>
      <section>
        <div className={styles.list_card}>
        <ProductCardNoSale/>
        <ProductCard/>
        <ProductCardNoSale/>
          <ProductCard />
          <ProductCardNoSale />
        <ProductCard/>
        <ProductCardNoSale/>
          <ProductCard />
          <ProductCardNoSale />
        </div>
      </section>

    </>
  )
}

export default SectionProducts