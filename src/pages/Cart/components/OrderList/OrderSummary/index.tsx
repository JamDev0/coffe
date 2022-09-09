import { useProductCart } from '../../../../../hooks/useProductCart'
import {
  DeliveryFeeContainer,
  ItemsTotalContainer,
  OrderSummaryContainer,
  TotalContainer,
} from './styles'

export function OrderSummary() {
  const { products } = useProductCart()

  const deliveryFee = 3.5

  let productTotal = 0

  products.forEach((product) =>  productTotal = productTotal + (product.price*product.quantity!))

  const total = productTotal + deliveryFee

  console.log(products)

  return (
    <OrderSummaryContainer>
      <ItemsTotalContainer>
        <span>Total de itens</span>
        <span>R$ {productTotal}</span>
      </ItemsTotalContainer>
      <DeliveryFeeContainer>
        <span>Entrega</span>
        <span>R$ {deliveryFee}</span>
      </DeliveryFeeContainer>
      <TotalContainer>
        <span>Total</span>
        <span>R$ {total}</span>
      </TotalContainer>
    </OrderSummaryContainer>
  )
}
