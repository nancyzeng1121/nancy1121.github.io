import styles from "./index.less"
import React, {useContext} from "react"
import { useNavigate } from "react-router-dom"
import { MenuProps } from "../../types"
import {SET_BLOG} from "../../layout/action";
import store from "../../layout/store";

export const Menu = (props: any) => {
    const { menuItem = [], callback } = props
  const navigate = useNavigate()
  const { dispatch } = useContext<any>(store)

  const handleActive = (item: MenuProps) => {
    callback && callback(item)
  }

  const handleToHref = ( item: any) => {
    navigate(item.href)
    if(item.html){dispatch({type: SET_BLOG, value: item})}

  }
    const renderMenu = (item: MenuProps, isChild: boolean) => {
        return (
            <div className={`${styles.menuWrap}`} key={item.id}>
                <div className={styles.link}>
                    <div className={`${styles.menuItem} ${isChild ? styles.menuItemChild : ""}`}>
                        <div className={styles.menu} onClick={() => handleToHref(item)}>
                            <span className={`icon iconfont ${item.icon}`}></span>
                            <span className={styles.menuName}>{item.name}</span>
                        </div>
                        {item.child && item.child.length > 0 && (
                          <span className={`icon iconfont ${item.active ? 'icon-shouqi' : 'icon-xiala'}`} onClick={() => handleActive(item)}></span>
                        )}
                    </div>
                </div>
                {item.active ? item.child.map((v: any) => renderMenu(v, true)) : null}
            </div>
        )
    }
    return <>{menuItem.map((v: any) => renderMenu(v, false))}</>
}
