import { createContext, ReactNode, useContext, useReducer } from "react";
import { CoffeeInterface, Coffees } from "../pages/Home/components/Shop/Coffees";
import { addProductToProductsListAction } from "../reducers/productCartReducer/actions";
import { productCartReducer, productCartState } from "../reducers/productCartReducer/reducer";

interface productCartContext {
  addProductToProductsList: () => void
}

interface ProductCartProviderProps {
  children: ReactNode
}

const productCartContext = createContext<productCartContext>({} as productCartContext)

const initialProductCartState: productCartState = {
  products: []
}

export function ProductCartProvider({ children }: ProductCartProviderProps) {
  const [state, dispatch] = useReducer(productCartReducer, initialProductCartState)

  console.log('state: ', state)

  function addProductToProductsList() {
    dispatch(addProductToProductsListAction(Coffees[0]))
  }

  return(
    <productCartContext.Provider value={{ addProductToProductsList }}>
      {children}
    </productCartContext.Provider>
  )
}

export function useProductCart() {
  const context = useContext(productCartContext)
  return context
}