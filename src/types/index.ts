export interface INotifyMe {
    message: string
    link?: string
    linkText?: string
    customStyles?: any
    hasCta: boolean
    position?: string
    options?: {
        style: {
            backgroundColor: string,
            color: string,
        },
    }
}

export interface IPostition {
    top?: string
    bottom?: string
    left?: string,
    right?: string
    transform?: string
}