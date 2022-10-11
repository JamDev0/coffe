import { createContext, ReactNode, useContext, useReducer } from 'react'
import { OrderFormTypes } from '../pages/Cart'
import { registerFormValuesAction } from '../reducers/orderFormReducer/actions'
import {
  orderFormReducer,
  orderFormState,
} from '../reducers/orderFormReducer/reducer'

interface orderFormContextInterface {
  registerFormValues: (inputValues: OrderFormTypes) => void
  inputsValues: orderFormState['inputsValues']
}

const orderFormContext = createContext<orderFormContextInterface>(
  {} as orderFormContextInterface,
)

const orderFormInitialState: orderFormState = {
  inputsValues: {
    cep: '',
    city: '',
    district: '',
    federativeUnit: '',
    street: '',
    streetNumber: 0,
  },
}

interface OrderFormProviderProps {
  children: ReactNode
}

export function OrderFormProvider({ children }: OrderFormProviderProps) {
  const [state, dispatch] = useReducer(orderFormReducer, orderFormInitialState)

  const inputsValues = state.inputsValues

  function registerFormValues(inputValues: OrderFormTypes) {
    dispatch(registerFormValuesAction(inputValues))
  }

  return (
    <orderFormContext.Provider value={{ registerFormValues, inputsValues }}>
      {children}
    </orderFormContext.Provider>
  )
}

export function useOrderForm() {
  const context = useContext(orderFormContext)

  return context
}
