import { createContext } from 'react'
import { useProductCart } from '../../../../hooks/useProductCart'
import { productInterface } from '../../../../reducers/productCartReducer/reducer'
import { CartCoffeeCard } from './components/CartCoffeeCard'
import { ConcludeBtn } from './components/ConcludeBtn'
import { OrderSummary } from './OrderSummary'
import {
  CartCoffeeCardsContainer,
  OrderContainer,
  OrderListContainer,
} from './styles'

export const productPropsContext = createContext<productInterface>(
  {} as productInterface,
)

export function OrderList() {
  const { products } = useProductCart()

  return (
    <OrderListContainer>
      <h2>Cafés selecionados</h2>

      <OrderContainer>
        <CartCoffeeCardsContainer>
          {products.map((product) => (
            <productPropsContext.Provider value={product} key={product.id}>
              <CartCoffeeCard />
            </productPropsContext.Provider>
          ))}
        </CartCoffeeCardsContainer>
        <OrderSummary />
        <ConcludeBtn />
      </OrderContainer>
    </OrderListContainer>
  )
}
