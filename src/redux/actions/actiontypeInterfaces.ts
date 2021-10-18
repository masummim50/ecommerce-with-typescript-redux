import { IProduct } from "models/types"
import { cartActions } from "./actionTypes"

interface IAddtocartAction{
  type:cartActions.ADD_TO_CART,
  payload:IProduct
}
interface IRemovefromcartaction{
  type:cartActions.REMOVE_FROM_CART,
  payload:string
}

interface IClearcartaction{
  type:cartActions.CLEAR_CART
}

export type actionTypes = IAddtocartAction | IRemovefromcartaction | IClearcartaction

