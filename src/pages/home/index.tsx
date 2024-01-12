import React, {useEffect, useState} from "react"
import styles from "./index.less"
import {Article} from "../../components/Article"
import axios from "axios";
import MarkdownFile from "../../components/MarkdownFile";
import {useNavigate} from "react-router-dom";


const Home = (props: any): React.ReactElement => {
    const navigate = useNavigate()
    const [listHtml, setListHtml] = useState([])
   useEffect(() => {


     getFile()

   }, [])

   const getFile = async () => {
    const arr: any = []
     for (const v of Object.keys(MarkdownFile)) {
       const url = `${window.origin}${MarkdownFile[v]}`
       const response =  await axios.get(url)
       const res = response.data
       arr.push(res)
     }
     setListHtml(arr)
  }

    return (
        <>
          <div className={styles.container} style={{marginTop: '10px'}}>
                <section>
                    <div className={styles.commended} onClick={() => {navigate("/personal")} }>
                        <div className={styles.commendedArticle}>
                            <Article/>
                        </div>

                        <div className={styles.avatar}>
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
