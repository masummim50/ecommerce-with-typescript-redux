import { IProduct } from "models/types";
import { actionTypes } from "./actions/actiontypeInterfaces";
import { cartActions } from "./actions/actionTypes";


export const cartReducer =(state=[] as IProduct[], action:actionTypes)=> {
  switch(action.type){
    case cartActions.ADD_TO_CART:{
      console.log('consoling state', state)
        if((state.filter(item=> item.key === action.payload.key)).length === 1){
          const newstate = state.filter(item=> item.key !== action.payload.key)
          const prev = state.filter(item=> item.key === action.payload.key)[0].quantity;
          const modified = {...action.payload, quantity:prev as number + 1
          }
          return [...newstate, modified]
        }else{
          const newobject = {...action.payload, quantity: 1}
          return [...state, newobject]
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