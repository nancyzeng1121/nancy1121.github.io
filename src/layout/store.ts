import * as React from "react"
import {
  SET_BASE, SET_BLOG, SET_MENUS, SET_THEME,
} from "./action"
import { State } from "./type"
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
const _ = require("loadsh")

const store = React.createContext({} as any)

export const initialState: State = {
  menuItem: [
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
  ],
  theme: "green",
  blog: ""
}

export const reducer = (state = initialState, obj: any) => {
  const newstate: State = _.cloneDeep(state)
  switch (obj.type) {
    case SET_BASE:
      newstate.theme = obj.value
      return { ...newstate }
    case SET_THEME:
      newstate.theme = obj.value
      return { ...newstate }
    case SET_MENUS:
      newstate.menuItem = obj.value
      return { ...newstate }
    case SET_BLOG:
      newstate.blog = obj.value
      return { ...newstate }
    default:
      console.log(obj)
      throw new Error(`没有找到${obj.type}`)
  }
}

export default store
