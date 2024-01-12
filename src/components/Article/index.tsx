import React, {useContext} from "react"
import styles from "./index.less"
import { Avatar } from "../Avatar"
import moment from "moment";
import { useNavigate } from "react-router-dom";
import store from "../../layout/store";
import {SET_BLOG} from "../../layout/action";

export const Article = (props: any) => {
  const {data} = props
  const navigate = useNavigate()
  const { dispatch } = useContext<any>(store)
  const handleClick = () => {
    navigate("/blogContent")
    dispatch({type: SET_BLOG, value: data})

  }
    return (
        <div className={styles.articleWrap}>
            <div className={styles.articleBg} onClick={() => handleClick()}>
                <div className={styles.fuzzy}>
                    <div className={styles.title}>{data?.name}</div>
                    <div className={styles.date}>{moment(data?.time).format("YYYY/MM/DD")}</div>
                </div>
            </div>
            <div className={styles.author}>
                <div className={styles.avatar}>
                    <Avatar />
                </div>

                <div className={styles.name}>なんでも</div>
            </div>
        </div>
    )
}
