import { IconProp } from "@fortawesome/fontawesome-svg-core"

export type MenuProps = {
    name: string
    active: boolean
    child: MenuProps[]
    href: string
    icon: IconProp
    id: number
    isParent?: boolean
}

export type ColorItemProps = {
    name: string
    active: boolean
}
