import React, {useContext} from "react"
import store from "../../../layout/store";
import styles from "../../home/index.less";
import {MdPreview} from "md-editor-rt";
const BlogContent = () => {
  const { state } = useContext<any>(store)

  return <div className={styles.container}>
    <div style={{height: "calc(100% - 40px)" , width: "100%"}}>
      <MdPreview modelValue={state.blog.html} previewTheme={"github"} showCodeRowNumber={true}/>
    </div>
  </div>
}

export default BlogContent
