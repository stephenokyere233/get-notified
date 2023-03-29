export interface INotifyMe {
  message: string
  link?: string
  linkText?:string
  customStyles?: any
  hasCta: boolean
  position?:string
}

export interface IPostition{
    top?:string
    bottom?:string
    left?:string,
    right?:string
    transform?:string
}