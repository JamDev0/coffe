import { createContext, ReactNode, useContext, useReducer } from 'react'
import { changeSelectedPaymentFormAction, clearAction } from '../reducers/paymentFormReducer/actions'
import {
  paymentFormReducer,
  paymentFormState,
} from '../reducers/paymentFormReducer/reducer'

interface paymentFormContextInterface {
  selectedPaymentForm: paymentFormState['selected']
  changeSelectedPaymentForm: (
    paymentToSelect: paymentFormState['selected']
  ) => void,
  clearPaymentForm: () => void
}

const paymentFormContext = createContext<paymentFormContextInterface>(
  {} as paymentFormContextInterface,
)

interface PaymentFormProviderProps {
  children: ReactNode
}

const paymentFormInitialState: paymentFormState = {
  selected: null,
}

export function PaymentFormProvider({ children }: PaymentFormProviderProps) {
  const [state, dispatch] = useReducer(
    paymentFormReducer,
    paymentFormInitialState,
  )

  const selectedPaymentForm = state.selected

  function changeSelectedPaymentForm(
    paymentToSelect: paymentFormState['selected'],
  ) {
    dispatch(changeSelectedPaymentFormAction(paymentToSelect))
  }

  function clearPaymentForm() {
    dispatch(clearAction())
  }

  return (
    <paymentFormContext.Provider
      value={{ selectedPaymentForm, changeSelectedPaymentForm, clearPaymentForm }}
    >
      {children}
    </paymentFormContext.Provider>
  )
}

export function usePaymentForm() {
  const context = useContext(paymentFormContext)

  return context
}
