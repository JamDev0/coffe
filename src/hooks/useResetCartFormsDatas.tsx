import { createContext, ReactNode, useContext } from "react";
import { useOrderForm } from "./useOrderForm";
import { usePaymentForm } from "./usePaymentForm";
import { useProductCart } from "./useProductCart";
import { useWebHistory } from "./useWebHistory";

interface resetCartFormsDatasContext {

}

const resetCartFormsDatasContext = createContext<resetCartFormsDatasContext>({});

interface ResetPaymentFormDatasProviderProps {
  children: ReactNode
}

export function ResetCartFormsDatasProvider({ children }: ResetPaymentFormDatasProviderProps) {
  const { history } = useWebHistory()

  const { clearPaymentForm, selectedPaymentForm } = usePaymentForm()

  const { cleanCart, products } = useProductCart()

  if(history[0] !== '/success' && history[1] === '/success') {
    clearPaymentForm()
  }

  if(history[0] === '/success') {
    cleanCart()
  }

  if(products.length <= 0) {
    if(selectedPaymentForm !== null) {
      clearPaymentForm()
    }
  }

  return (
    <resetCartFormsDatasContext.Provider value={{}}>
      {children}
    </resetCartFormsDatasContext.Provider>
  )
}

export function useResetCartFormsDatasProps() {
  const context = useContext(resetCartFormsDatasContext)

  return context
}