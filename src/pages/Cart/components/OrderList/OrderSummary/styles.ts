import styled from 'styled-components'

export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;

  width: 100%;

  margin-bottom: 1.5rem;
`
const BaseOrderSummaryInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 0.875rem;
    color: ${(params) => params.theme.colors.base.text};
  }
`

export const ItemsTotalContainer = styled(BaseOrderSummaryInnerContainer)``

export const DeliveryFeeContainer = styled(BaseOrderSummaryInnerContainer)``

export const TotalContainer = styled(BaseOrderSummaryInnerContainer)`
  span {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(params) => params.theme.colors.base.subtitle};
  }
`
