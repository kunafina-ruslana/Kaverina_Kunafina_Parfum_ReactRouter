import styles from './Post.module.css'
function Post() {

  return (
    <>
      <a href='/' className={styles.post}>
        <img className={styles.descrp_img_post} src="/src/public/img/Post.webp" alt="Parfum" />
        <div className={styles.descrp}>
          <div className={styles.type_news}>
            <div className={styles.ellipse}></div>
            <p className={styles.descrp_type_post}>NEWS</p>
          </div>
          <p className={styles.descrp_name_post}>Crafting your personal fragrance identity.</p>
          <p className={styles.descrp_date_post}>JULY 9, 2023 | 5 MIN READ</p>
        </div>
      </a>
    </>
  )
}

export default Post