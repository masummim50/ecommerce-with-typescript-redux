import { IProduct } from "models/types";
import { actionTypes } from "./actions/actiontypeInterfaces";
import { cartActions } from "./actions/actionTypes";


export const cartReducer =(state=[] as IProduct[], action:actionTypes)=> {
  switch(action.type){
    case cartActions.ADD_TO_CART:{
      if(action.payload.quantity === undefined){
        const modified = {...action.payload, quantity:1}
        return [...state, modified]
      }else{
        return []
      }
    }
    case cartActions.REMOVE_FROM_CART:{
      const newstate = state.filter(item=> item.key !== action.payload)
      return newstate
    }
    case cartActions.CLEAR_CART:
      return []
    default:
      return state
  }

}