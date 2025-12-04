import Header from "../../../../components/Header/Header"
import styles from './Banner.module.css'

function Banner() {

  return (
    <>
      <div className={styles.banner}>
        <Header />
        <div className={styles.banner_descr}>
          <h1>Elevate <em>everyday</em> moments to extraordinary</h1>
          <button className={styles.btn_banner}>Shop our fragrances</button>
        </div>
      </div>
    </>
  )
}

export default Banner