
export type MenuProps = {
    name: string
    active: boolean
    child: MenuProps[]
    href?: string
    icon: string,
    id: number
    parentId?: number
}

export type ColorItemProps = {
    name: string
    active: boolean
}
