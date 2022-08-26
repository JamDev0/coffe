import { CartCoffeeCard } from './CartCoffeeCard'
import { OrderContainer, OrderListContainer } from './styles'

export function OrderList() {
  return (
    <OrderListContainer>
      <h2>Cafés selecionados</h2>

      <OrderContainer>
        <CartCoffeeCard />
      </OrderContainer>
    </OrderListContainer>
  )
}
