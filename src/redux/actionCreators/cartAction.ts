import { IProduct } from "models/types"
import { actionTypes } from "redux/actions/actiontypeInterfaces"
import { cartActions } from "redux/actions/actionTypes"

export const addToCart =(payload:IProduct):actionTypes=> {
  return {
    type: cartActions.ADD_TO_CART,
  payload
  }
}

export const removeFromCart = (payload:string):actionTypes=> {
  return {
    type: cartActions.REMOVE_FROM_CART,
    payload
  }
}

export const clearCart = ():actionTypes=> {
  return {
    type: cartActions.CLEAR_CART
  }
}