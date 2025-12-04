import styles from './Banner.module.css'
import Header from "../../../../components/Header/Header"

function BannerAbout() {

  return (
    <>
      <div className={styles.banner}>
        <Header />
        <div className={styles.banner_descr}>
          <h1>Our <em>guiding</em> principles</h1>
          <button className={styles.btn_banner}>Shop our fragrances</button>
        </div>
      </div>
    </>
  )
}

export default BannerAbout