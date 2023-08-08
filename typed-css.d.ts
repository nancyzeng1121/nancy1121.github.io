declare module "*.module.css" {
    const classes: { readonly [key: string]: string }
    export default classes
}

declare module "*.less" {
    const classes: { readonly [key: string]: string }
    export default classes
}

declare module "*.module.less" {
    const classes: { readonly [key: string]: string }
    export default classes
}

declare module "*.webm" {
    const src: string
    export default src
}

declare module "*.mp4" {
    const src: string
    export default src
}
