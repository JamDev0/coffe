import {
  DeliveryFeeContainer,
  ItemsTotalContainer,
  OrderSummaryContainer,
  TotalContainer,
} from './styles'

export function OrderSummary() {
  return (
    <OrderSummaryContainer>
      <ItemsTotalContainer>
        <span>Total de itens</span>
        <span>R$ 29,70</span>
      </ItemsTotalContainer>
      <DeliveryFeeContainer>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </DeliveryFeeContainer>
      <TotalContainer>
        <span>Total</span>
        <span>R$ 33,20</span>
      </TotalContainer>
    </OrderSummaryContainer>
  )
}
