import { CoffeeInterface } from '../../pages/Home/components/Shop/Coffees'

export enum actionTypes {
  INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CLEAN_CART = 'CLEAN_CART',
}

export function increaseProductQuantityAction(product: CoffeeInterface) {
  return {
    type: actionTypes.INCREASE_PRODUCT_QUANTITY,
    payload: { ...product },
  }
}

export function decreaseProductQuantityAction(id: CoffeeInterface['id']) {
  return {
    type: actionTypes.DECREASE_PRODUCT_QUANTITY,
    payload: id,
  }
}

export function removeProductAction(id: CoffeeInterface['id']) {
  return {
    type: actionTypes.REMOVE_PRODUCT,
    payload: id,
  }
}

export function cleanCartAction() {
  return {
    type: actionTypes.CLEAN_CART,
  }
}
