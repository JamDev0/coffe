import { paymentFormState } from './reducer'

export enum actionTypes {
  CHANGE_SELECTED_PAYMENT_FORM = 'CHANGE_SELECTED_PAYMENT_FORM',
}

export function changeSelectedPaymentFormAction(
  paymentToSelect: paymentFormState['selected'],
) {
  return {
    type: actionTypes.CHANGE_SELECTED_PAYMENT_FORM,
    payload: paymentToSelect,
  }
}
