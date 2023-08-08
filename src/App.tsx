import React, { useEffect, useState } from "react"
import { Router } from "./routers"
import { Avatar } from "./components/Avatar"
import { Menu } from "./components/Menu"
import { BrowserRouter } from "react-router-dom"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { ThemeItem } from "./components/ThemeItem"
import styles from "./App.less"
import { ColorItemProps, MenuProps } from "./types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const App = () => {
    const [isShowAside, setIsShowAside] = useState<boolean>(false)
    const [menuItem, setMenuItem] = useState<MenuProps[]>([])
    const [theme, setTheme] = useState<string>("pink")
    const [colorItem, setColorItem] = useState<ColorItemProps[]>([])
    useEffect(() => {
        const item: MenuProps[] = [
            {
                name: "首页",
                active: false,
                icon: solid("home"),
                child: [],
                href: "/",
                id: 1
            },

            {
                name: "布局",
                active: true,
                icon: solid("dice-three"),
                isParent: true,
                child: [
                    {
                        name: "flex",
                        active: false,
                        icon: solid("dice-three"),
                        child: [],
                        href: "/flex",
                        id: 1
                    },
                    {
                        name: "float",
                        active: false,
                        icon: solid("dice-three"),
                        child: [],
                        href: "/float",
                        id: 2
                    },
                    {
                        name: "grid",
                        active: false,
                        icon: solid("dice-three"),
                        child: [],
                        href: "/grid",
                        id: 3
                    }
                ],
                href: "",
                id: 2
            },
            {
                name: "css",
                active: true,
                isParent: true,
                icon: solid("dice-three"),
                child: [
                    {
                        name: "Cybr",
                        active: false,
                        icon: solid("dice-three"),
                        child: [],
                        href: "/cybr",
                        id: 1
                    }
                ],
                href: "",
                id: 3
            },
            {
                name: "Webgl",
                active: true,
                icon: solid("dice-three"),
                child: [],
                href: "/webgl",
                id: 4
            },
            {
                name: "Three",
                active: true,
                icon: solid("dice-three"),
                isParent: true,
                child: [
                    {
                        name: "boxWrap",
                        active: true,
                        icon: solid("dice-three"),
                        child: [],
                        href: "/boxWrap",
                        id: 1
                    }
                ],
                href: "",
                id: 5
            }
        ]
        const colorList: ColorItemProps[] = [
            {
                name: "red",
                active: false
            },
            {
                name: "green",
                active: false
            },
            {
                name: "blue",
                active: false
            },
            {
                name: "pink",
                active: false
            }
        ]
        const name: string = localStorage.getItem("theme") || ""
        const data = colorList.map(v => {
            return {
                ...v,
                active: v.name === name
            }
        })
        setMenuItem(item)
        setColorItem(data)

        setTheme(name)
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
        localStorage.setItem("theme", name)
        const data = colorItem.map(v => {
            return {
                ...v,
                active: v.name === name
            }
        })
        setColorItem(data)
        setTheme(name)
    }

    const onChangeTheme = (value: boolean) => {
        setIsShowAside(value)
    }

    return (
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
                        <ThemeItem callback={themeClass} theme={theme} colorItem={colorItem} />
                    </aside>
                )}
                <div className={styles.content} onClick={handleAside}>
                    {isShowAside && <div className={styles.mask} />}
                    <header>
                        <div className={`${styles.headerBg} ${styles[theme]}`}>
                            <div className={styles.headerMenu}>
                                <div className={styles.menu} onClick={() => onChangeTheme(true)}>
                                    <FontAwesomeIcon icon={solid("bars")} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={solid("search")} />
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className={styles.nav}>
                        <nav>
                            <Router onChnageTheme={onChangeTheme} theme={theme} />
                        </nav>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
