import React, {useContext} from "react"
import store from "../../../layout/store";
import styles from "../../home/index.less";
import {MdPreview} from "md-editor-rt";
const BlogContent = () => {
  const { state } = useContext<any>(store)
  const {blog} = state

  return <div className={styles.container}>
    <div style={{height: "calc(100% - 40px)" , width: "100%", marginTop: '10px'}}>
      <h1 style={{textAlign: 'center'}}>{blog.name}</h1>
      <div style={{textAlign: 'center'}}>
        <img src={blog.img && blog.img[0] && blog.img[0].thumbUrl} alt=""/>
      </div>

      <MdPreview modelValue={blog.html} previewTheme={"github"} showCodeRowNumber={true}/>
    </div>
  </div>
}

export default BlogContent
