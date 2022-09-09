import { CoffeeInterface } from '../../pages/Home/components/Shop/Coffees'

export enum actionTypes {
  INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
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
