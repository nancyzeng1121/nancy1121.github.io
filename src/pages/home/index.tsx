import React, {useEffect, useState} from "react"
import styles from "./index.less"
import {Article} from "../../components/Article"
// import {Footer} from "../../components/Footer"
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

   const getFile = async () => {
    const markFile: any = MarkdownFile
    const list = Object.keys(markFile).map(v => {
      return v
    })
    let arr: any = []
    if(list.length > 0) {
      list.map(async (v) => {
       const txt: any = await  fetch(markFile[`${v}`]).then(resp => resp.text())
        const params: any = {
          html: txt,
          desc:txt.replace(/<[^>]*>|/g,""),
          title: v
        }
        arr = [...arr, params]
        setListHtml(arr)
      })
    }

  }
  console.log(listHtml, "===ll====")
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
                      {listHtml.map(v => <Article data={v} />)}

                    </div>
                </article>
            </div>
            {/* <Footer theme={theme} /> */}
        </>
    )
}

export default Home
