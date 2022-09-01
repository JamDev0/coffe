import { CartCoffeeCard } from './components/CartCoffeeCard'
import { ConcludeBtn } from './components/ConcludeBtn'
import { OrderSummary } from './OrderSummary'
import { CartCoffeeCardsContainer, OrderContainer, OrderListContainer } from './styles'

export function OrderList() {
  return (
    <OrderListContainer>
      <h2>Cafés selecionados</h2>

      <OrderContainer>
        <CartCoffeeCardsContainer>
          <CartCoffeeCard />
          <CartCoffeeCard />
        </CartCoffeeCardsContainer>
        <OrderSummary />
        <ConcludeBtn />
      </OrderContainer>
    </OrderListContainer>
  )
}
