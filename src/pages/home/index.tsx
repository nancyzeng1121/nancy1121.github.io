import React, {useEffect, useState} from "react"
import styles from "./index.less"
import {Article} from "../../components/Article"
import {useNavigate} from "react-router-dom";
import {getFile} from "../../utils";


const Home = (props: any): React.ReactElement => {
    const navigate = useNavigate()
    const [listHtml, setListHtml] = useState([])
   useEffect(() => {
     getList()

   }, [])

  const getList = async () => {
    const arr = await getFile()
    setListHtml(arr)
  }

    return (
        <>
          <div className={styles.container} style={{marginTop: '10px'}}>
                <section>
                    <div className={styles.commended} >
                        <div className={styles.commendedArticle}>
                            <Article data={listHtml[0]} key={'commend'}/>
                        </div>

                        <div className={styles.avatar} onClick={() => {navigate("/personal")}}>
                            <div className={`${styles.bg} ${styles.personal}`} />
                            <div className={styles.name}>个人介绍</div>
                        </div>
                    </div>
                </section>

                <article>
                    <div className={styles.article}>
                      {listHtml.map((v, index) => <Article data={v} key={index} />)}
                    </div>
                </article>
            </div>

        </>
    )
}

export default Home
