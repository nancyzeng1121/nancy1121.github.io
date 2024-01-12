import React, {useEffect, useState} from "react"
import styles from "./index.less"
import {Article} from "../../components/Article"
import axios from "axios";
import MarkdownFile from "../../components/MarkdownFile";

const Home = (props: any): React.ReactElement => {
    // const { theme } = props
    const [listHtml, setListHtml] = useState([])
   useEffect(() => {


     getFile()

   }, [])
/*  useEffect(() => {
    const markFile: any = MarkdownFile
    const list = Object.keys(markFile).map(v => v)
    fetch(markFile[`${list[0]}`])
      .then((resp) => resp.text())
      .then((txt) => console.log(txt));
  }, []); */

  console.log(window.origin, "===ll===")
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
          <div className={styles.container}>
                <section>
                    <div className={styles.commended}>
                        <div className={styles.commendedArticle}>
                            <Article/>
                        </div>

                        <div className={styles.avatar}>
                            <div className={styles.bg} />
                            <div className={styles.name}>なんでも</div>
                        </div>
                    </div>
                </section>

                <article>
                    <div className={styles.article}>
                      {listHtml.map((v, index) => <Article data={v} key={index} />)}

                    </div>
                </article>
            </div>
            {/* <Footer theme={theme} /> */}
        </>
    )
}

export default Home
