import produce from 'immer'
import { actionTypes } from './actions'

export interface paymentFormState {
  selected: 'debit' | 'credit' | 'cash' | null
}

export function paymentFormReducer(state: paymentFormState, action: any) {
  switch (action.type) {
    case actionTypes.CHANGE_SELECTED_PAYMENT_FORM: {
      return produce(state, (draft) => {
        draft.selected = action.payload
      })
    }
  }

  return state
}
