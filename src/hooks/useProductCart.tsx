import { createContext, ReactNode, useContext, useReducer } from 'react'
import { CoffeeInterface } from '../pages/Home/components/Shop/Coffees'
import {
  decreaseProductQuantityAction,
  increaseProductQuantityAction,
} from '../reducers/productCartReducer/actions'
import {
  productCartReducer,
  productCartState,
  productInterface,
} from '../reducers/productCartReducer/reducer'

interface productCartContextInterface {
  increaseProductQuantity: (product: CoffeeInterface) => void
  decreaseProductQuantity: (id: CoffeeInterface['id']) => void
  products: productInterface[]
}

interface ProductCartProviderProps {
  children: ReactNode
}

const productCartContext = createContext<productCartContextInterface>(
  {} as productCartContextInterface,
)

const initialProductCartState: productCartState = {
  products: [],
}

export function ProductCartProvider({ children }: ProductCartProviderProps) {
  const [state, dispatch] = useReducer(
    productCartReducer,
    initialProductCartState,
  )

  const products = state.products

  function increaseProductQuantity(coffee: CoffeeInterface) {
    dispatch(increaseProductQuantityAction(coffee))
  }

  function decreaseProductQuantity(id: CoffeeInterface['id']) {
    dispatch(decreaseProductQuantityAction(id))
  }

  return (
    <productCartContext.Provider
      value={{ increaseProductQuantity, products, decreaseProductQuantity }}
    >
      {children}
    </productCartContext.Provider>
  )
}

export function useProductCart() {
  const context = useContext(productCartContext)
  return context
}
