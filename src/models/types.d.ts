

export interface IProduct{
  _id?:string,
  key:string,
  category:string,
  name: string,
  seller: string,
  wholePrice: string,
  priceFraction: string,
  stock: number,
  star: number,
  starCount: number,
  img: string,
  url: string,
  features: [], 
  price: number,
  shipping: number,
  quantity?:number
}

export interface IFooter{
  menuTitle?: string,
  name?: string,
  link?: string
}