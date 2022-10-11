import { createContext } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useProductCart } from '../../../../hooks/useProductCart'
import { productInterface } from '../../../../reducers/productCartReducer/reducer'
import { CartCoffeeCard } from './components/CartCoffeeCard'
import { ConcludeBtn } from './components/ConcludeBtn'
import { EmptyOrderSummary } from './EmptyOrderSummary'
import { OrderSummary } from './OrderSummary'
import {
  CartCoffeeCardsContainer,
  OrderContainer,
  OrderListContainerDesktop,
  OrderListContainerMobile
} from './styles'

export const productPropsContext = createContext<productInterface>(
  {} as productInterface,
)

export function OrderList() {
  const { products } = useProductCart()

  const isProductsLengthGreaterThanZero = products.length > 0

  const isBreakPoint1 = useMediaQuery({
    query: '(max-width: 1200px)'
  })

  const OrderListContainer = isBreakPoint1 ? OrderListContainerMobile : OrderListContainerDesktop

  return (
    <OrderListContainer>
      <h2>Cafés selecionados</h2>
      <OrderContainer>
        {isProductsLengthGreaterThanZero ? (
          <>
            <CartCoffeeCardsContainer>
              {products.map((product) => (
                <productPropsContext.Provider value={product} key={product.id}>
                  <CartCoffeeCard />
                </productPropsContext.Provider>
              ))}
            </CartCoffeeCardsContainer>
            <OrderSummary />
            <ConcludeBtn />
          </>
        ) : (
          <EmptyOrderSummary />
        )}
      </OrderContainer>
    </OrderListContainer>
  )
}
