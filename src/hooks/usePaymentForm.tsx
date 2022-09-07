import { createContext, ReactNode, useContext, useReducer } from 'react'
import { changeSelectedPaymentFormAction } from '../reducers/paymentFormReducer/actions'
import {
  paymentFormReducer,
  paymentFormState,
} from '../reducers/paymentFormReducer/reducer'

interface paymentFormContextInterface {
  selectedPaymentForm: paymentFormState['selected']
  changeSelectedPaymentForm: (
    paymentToSelect: paymentFormState['selected'],
  ) => void
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

  console.log('state:', state)

  const selectedPaymentForm = state.selected

  function changeSelectedPaymentForm(
    paymentToSelect: paymentFormState['selected'],
  ) {
    dispatch(changeSelectedPaymentFormAction(paymentToSelect))
  }

  return (
    <paymentFormContext.Provider
      value={{ selectedPaymentForm, changeSelectedPaymentForm }}
    >
      {children}
    </paymentFormContext.Provider>
  )
}

export function usePaymentForm() {
  const context = useContext(paymentFormContext)

  return context
}
