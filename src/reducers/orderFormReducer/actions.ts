import { OrderFormTypes } from "../../pages/Cart";

export enum actionTypes {
  REGISTER_FORM_VALUES = 'REGISTER_FORM_VALUES'
}

export function registerFormValuesAction(inputValues: OrderFormTypes) {
  return {
    type: actionTypes.REGISTER_FORM_VALUES,
    payload: inputValues,
  }
}