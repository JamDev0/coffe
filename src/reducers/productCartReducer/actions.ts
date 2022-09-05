import { CoffeeInterface } from "../../pages/Home/components/Shop/Coffees";

export enum actionTypes {
  ADD_PRODUCT_TO_PRODUCTS_LIST = 'ADD_PRODUCT_TO_PRODUCTS_LIST',
}

export function addProductToProductsListAction(product: CoffeeInterface) {
  return {
    type: actionTypes.ADD_PRODUCT_TO_PRODUCTS_LIST,
    payload: {...product, quantity: 1},
  }
}