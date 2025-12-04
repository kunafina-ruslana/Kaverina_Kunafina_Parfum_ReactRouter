import styles from './Banner.module.css'
import Header from "../../../../components/Header/Header"

function BannerShop() {

  return (
    <>
      <div className={styles.banner}>
        <Header />
        <div className={styles.banner_descr}>
          <h1>All <em>fragrances</em></h1>
        </div>
      </div>
    </>
  )
}

export default BannerShop