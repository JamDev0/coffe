import produce from "immer"
import { CoffeeInterface } from "../../pages/Home/components/Shop/Coffees"

import { actionTypes } from "./actions"

interface product extends CoffeeInterface {
  quantity: number | null
}

export interface productCartState {
  products: product[]
}

export function productCartReducer(state: productCartState, action: any) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_PRODUCTS_LIST: {
      return produce(state, (draft) => {
        draft.products.push(action.payload)
      })
    }
  }

  return state
}