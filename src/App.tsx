import React, { useEffect, useReducer, useState} from "react"
import { Router } from "./routers"
import { Avatar } from "./components/Avatar"
import { Menu } from "./components/Menu"
import {BrowserRouter, Link} from "react-router-dom"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { ThemeItem } from "./components/ThemeItem"
import styles from "./App.less"
import { ColorItemProps, MenuProps } from "./types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {BasePath} from "./types/config";
import store, {initialState, reducer} from "./layout/store";
import {colorList} from "./utils/default";

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [isShowAside, setIsShowAside] = useState<boolean>(false)
    const [menuItem, setMenuItem] = useState<MenuProps[]>([])
    const [colorItem, setColorItem] = useState<ColorItemProps[]>([])
    useEffect(() => {
        const name: string = localStorage.getItem("theme") || ""
        const data = colorList.map(v => {
            return {
                ...v,
                active: v.name === name
            }
        })

        setMenuItem(state.menuItem)
        setColorItem(data)
        dispatch({ type: "SET_THEME", value: name })
    }, [])

    const handleAside = () => {
        if (isShowAside) {
            setIsShowAside(!isShowAside)
        }
    }

    const handleAngleUp = (item: MenuProps) => {
        const data: MenuProps[] = menuItem.map(v => {
            return {
                ...v,
                active: v.id === item.id && !v.active
            }
        })
        setMenuItem(data)
    }

    const themeClass = (name: string) => {
        const data = colorItem.map(v => {
            return {
                ...v,
                active: v.name === name
            }
        })
        dispatch({ type: "SET_THEME", value: name })
        setColorItem(data)
    }

    const onChangeTheme = (value: boolean) => {
        setIsShowAside(value)
    }



    return (
      <store.Provider value={{state, dispatch}}>
        <div className={styles.App}>
            <BrowserRouter>
                {isShowAside && (
                    <aside>
                        <div className={styles.asideHeader}>
                            <div className={styles.avatar}>
                                <Avatar />
                            </div>
                            <div>
                                <div className={styles.asideName}>なんでも</div>
                                <div className={styles.asideDesc}>なんでも</div>
                            </div>
                        </div>
                        <Menu menuItem={menuItem} callback={handleAngleUp} />
                        <ThemeItem callback={themeClass} theme={state.theme} colorItem={colorItem} />
                    </aside>
                )}
                <div className={styles.content} onClick={handleAside}>
                    {isShowAside && <div className={styles.mask} />}
                    <header>
                        <div className={`${styles.headerBg} ${styles[state.theme]}`}>
                            <div className={styles.headerMenu}>
                                <div className={styles.menu} onClick={() => onChangeTheme(true)}>
                                    <FontAwesomeIcon icon={solid("bars")} />
                                </div>
                                <div>
                                  <Link to={`${BasePath}/blog`} className={styles.link}>博客编辑</Link>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className={styles.nav}>
                        <nav>
                            <Router onChnageTheme={onChangeTheme} theme={state.theme} />
                        </nav>
                    </div>
                </div>
            </BrowserRouter>
        </div>
      </store.Provider>
    )
}

export default App
