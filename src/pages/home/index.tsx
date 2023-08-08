import React from "react"
import styles from "./index.less"
import { Article } from "../../components/Article"
import { Banner } from "../../components/Banner"
import { Footer } from "../../components/Footer"

const Home = (props: any): React.ReactElement => {
    const { theme } = props
    return (
        <>
            <Banner />

            <div className={styles.container}>
                <section>
                    <div className={styles.commended}>
                        <div className={styles.commendedArticle}>
                            <Article />
                        </div>

                        <div className={styles.avatar}>
                            <div className={styles.bg} />
                            <div className={styles.name}>なんでも</div>
                        </div>
                    </div>
                </section>

                <article>
                    <div className={styles.article}>
                        <Article />
                    </div>
                </article>
            </div>
            <Footer theme={theme} />
        </>
    )
}

export default Home
