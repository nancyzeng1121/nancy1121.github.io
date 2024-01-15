import * as React from "react"
import {
  SET_BASE, SET_BLOG, SET_MENUS, SET_THEME,
} from "./action"
import { State } from "./type"
const _ = require("loadsh")

const store = React.createContext({} as any)

export const initialState: State = {
  menuItem: [
    {
      name: "首页",
      active: false,
      icon: 'icon-shouye',
      child: [],
      href: "/",
      id: 1
    },
    {
      id: 2,
      name: "文章",
      active: true,
      icon: "icon-listview",
      child: []
    },
    {
      id: 3,
      name: "组件",
      active: false,
      icon: "icon-youji",
      child: [
        {
          name: "布局",
          active: true,
          icon: "icon-youji",
          parentId: 3,
          id: 1,
          child: [
            {
              name: "flex",
              active: false,
              icon: "icon-youji",
              child: [],
              parentId: 1,
              href: "/flex",
              id: 1
            },
            {
              name: "float",
              active: false,
              icon: "icon-youji",
              child: [],
              parentId: 1,
              href: "/float",
              id: 2
            },
            {
              name: "grid",
              active: false,
              icon: "icon-youji",
              child: [],
              parentId: 1,
              href: "/grid",
              id: 3
            }
          ],
          href: "",
        },
        {
          name: "css",
          active: true,
          icon: "icon-youji",
          child: [
            {
              name: "Cybr",
              active: false,
              icon: "icon-youji",
              child: [],
              href: "/cybr",
              id: 1,
              parentId: 2,
            }
          ],
          href: "",
          id: 2
        },
        {
          name: "Webgl",
          active: true,
          icon: "icon-youji",
          child: [],
          href: "/webgl",
          id: 3
        },
        {
          name: "Three",
          active: true,
          icon: "icon-youji",
          id: 4,
          child: [
            {
              name: "boxWrap",
              active: true,
              icon: "icon-youji",
              child: [],
              href: "/boxWrap",
              id: 1,
              parentId: 4,
            }
          ],
          href: "",

        }
      ]
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
