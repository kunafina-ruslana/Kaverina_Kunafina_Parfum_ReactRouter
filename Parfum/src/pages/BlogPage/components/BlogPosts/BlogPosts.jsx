import Post from "./Post/Post"
import styles from './BlogPosts.module.css'


function BlogPosts() {

    return (
      <>
      <section>
      <h2 className={styles.page_post}>All <em>posts</em></h2>
      <div className={styles.posts}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
      </section>
     
      </>
    )
  }
  
  export default BlogPosts