import produce from 'immer'
import { CoffeeInterface } from '../../pages/Home/components/Shop/Coffees'

import { actionTypes } from './actions'

export interface productInterface extends CoffeeInterface {
  quantity: number | null
}

export interface productCartState {
  products: productInterface[]
}

export function productCartReducer(state: productCartState, action: any) {
  switch (action.type) {
    case actionTypes.INCREASE_PRODUCT_QUANTITY: {
      return produce(state, (draft) => {
        const currentProduct = draft.products.find(
          (product) => product.id === action.payload.id,
        )

        if (currentProduct) {
          currentProduct.quantity!++
        } else {
          draft.products.unshift({ ...action.payload, quantity: 1 })
        }
      })
    }

    case actionTypes.DECREASE_PRODUCT_QUANTITY: {
      return produce(state, (draft) => {
        const currentProduct = draft.products.find(
          (product) => product.id === action.payload,
        )

        function currentProductQuantityIsGreaterThanZero() {
          if (currentProduct) {
            if (currentProduct.quantity! - 1 > 0) {
              return true
            }
          }
          return false
        }

        if (currentProduct) {
          if (currentProductQuantityIsGreaterThanZero()) {
            currentProduct.quantity!--
          } else {
            draft.products = draft.products.filter(
              (product) => product.id !== currentProduct.id,
            )
          }
        }
      })
    }
  }

  return state
}
