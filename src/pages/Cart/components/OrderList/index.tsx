import { CartCoffeeCard } from './components/CartCoffeeCard'
import { OrderSummary } from './components/CartCoffeeCard/components/OrderSummary'
import { OrderContainer, OrderListContainer } from './styles'

export function OrderList() {
  return (
    <OrderListContainer>
      <h2>Cafés selecionados</h2>

      <OrderContainer>
        <CartCoffeeCard />
        <OrderSummary />
      </OrderContainer>
    </OrderListContainer>
  )
}
