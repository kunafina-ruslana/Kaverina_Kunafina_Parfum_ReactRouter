import styles from './Footer.module.css'

function Footer() {

    return (
        <>
            <section>
                <footer className={styles.footer}>
                    <div className={styles.footer_inner}>
                        <div className={styles.footer_top}>
                            <div className={styles.footer_left}>
                            <a href="/"><img src="/src/public/icons/iconoir_flower medium (1).svg" alt="icon_flower" loading="lazy"/></a>
                                <p className={styles.footer_subtitle}>
                                    We send <em>great</em> emails.
                                </p>
                                <form className={styles.footer_form}>
                                    <input type="input" placeholder="Enter your email" className={styles.footer_input} />
                                    <button type="sumbit" className={styles.footer_btn}>Subscribe</button>
                                </form>
                            </div>

                            <div className={styles.footer_cols}>
                                <div className={styles.footer_col}>
                                    <p className={styles.footer_col_title}>Company</p>
                                    <a href="/shop">Shop</a>
                                    <a href="/about">About</a>
                                    <a href="/blog">Blog</a>
                                    <a href="Contact">Contact</a>
                                    <a href="ST&Chop">ST&Chop</a>
                                </div>
                                <div className={styles.footer_col}>
                                    <p className={styles.footer_col_title}>Social</p>
                                    <a href="Tiktok">Tiktok</a>
                                    <a href="Instagram">Instagram</a>
                                    <a href="Facebook">Facebook</a>
                                    <a href="Youtube">Youtube</a>
                                </div>
                                <div className={styles.footer_col}>
                                    <p className={styles.footer_col_title}>Template</p>
                                    <a href="Style Guide">Style Guide</a>
                                    <a href="Changelog">Changelog</a>
                                    <a href="Licenses">Licenses</a>
                                    <a href="All Templates">All Templates</a>
                                </div>
                            </div>
                        </div>

                        <img className={styles.footer_img} src="/src/public/icons/PARFUM_white.svg" alt="PARFUM" loading="lazy"/>

                        <div className={styles.footer_bottom}>
                            <p>Powered by Webflow.</p>
                            <p>Website template by Callisto Digital Studio.</p>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default Footer