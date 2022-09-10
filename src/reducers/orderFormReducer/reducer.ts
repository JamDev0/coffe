import produce from "immer";
import { OrderFormTypes } from "../../pages/Cart";

import { actionTypes } from "./actions";

export interface orderFormState {
  inputsValues: OrderFormTypes
}

export function orderFormReducer(state: orderFormState, action: any) {
  switch(action.type) {
    case actionTypes.REGISTER_FORM_VALUES: {
      return produce(state, draft => {
        draft.inputsValues = action.payload
      })
    }
  }

  return state
}