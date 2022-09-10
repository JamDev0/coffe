import { createContext, ReactNode, useContext, useReducer } from 'react'
import { CoffeeInterface } from '../pages/Home/components/Shop/Coffees'
import {
  cleanCartAction,
  decreaseProductQuantityAction,
  increaseProductQuantityAction,
  removeProductAction,
} from '../reducers/productCartReducer/actions'
import {
  productCartReducer,
  productCartState,
  productInterface,
} from '../reducers/productCartReducer/reducer'

interface productCartContextInterface {
  increaseProductQuantity: (product: CoffeeInterface) => void
  decreaseProductQuantity: (id: CoffeeInterface['id']) => void
  removeProduct: (id: CoffeeInterface['id']) => void
  cleanCart: () => void
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

  function removeProduct(id: CoffeeInterface['id']) {
    dispatch(removeProductAction(id))
  }

  function cleanCart() {
    dispatch(cleanCartAction())
  }

  return (
    <productCartContext.Provider
      value={{
        increaseProductQuantity,
        products,
        decreaseProductQuantity,
        removeProduct,
        cleanCart,
      }}
    >
      {children}
    </productCartContext.Provider>
  )
}

export function useProductCart() {
  const context = useContext(productCartContext)
  return context
}
