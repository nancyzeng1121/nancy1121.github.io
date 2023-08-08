import styles from "./index.less"
import React from "react"
import { Link } from "react-router-dom"
import { BasePath } from "../../types/config"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { MenuProps } from "../../types"

export const Menu = (props: any) => {
    const { menuItem, callback } = props
    const renderMenu = (item: MenuProps, isChild: boolean) => {
        const handleActive = (item: MenuProps) => {
            callback && callback(item)
        }
        return (
            <div className={`${styles.menuWrap}`} key={item.id}>
                <Link to={`${item.isParent ? "#" : BasePath + item.href}`} className={styles.link}>
                    <div className={`${styles.menuItem} ${isChild ? styles.menuItemChild : ""}`}>
                        <div className={styles.menu}>
                            <FontAwesomeIcon icon={item.icon} />
                            <span className={styles.menuName}>{item.name}</span>
                        </div>
                        {item.child.length > 0 && (
                            <FontAwesomeIcon
                                icon={item.active ? faAngleUp : faAngleDown}
                                className={`${styles.icon}  ${styles.faAngleUp}`}
                                onClick={() => handleActive(item)}
                            />
                        )}
                    </div>
                </Link>
                {item.active && item.child && item.child.map((v: MenuProps) => renderMenu(v, true))}
            </div>
        )
    }
    return menuItem.map((v: MenuProps) => renderMenu(v, false))
}
