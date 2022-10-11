import styled from 'styled-components'

const BaseOrderListContainer = styled.div`
  > h2 {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Baloo 2';
    color: ${(params) => params.theme.colors.base.title};

    margin-bottom: 0.9375rem;
  }
`

export const OrderListContainerDesktop = styled(BaseOrderListContainer)`
  width: 26rem;
`

export const OrderListContainerMobile = styled(BaseOrderListContainer)`
  width: 100%;
`

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(params) => params.theme.colors.base.card};

  border-radius: 6px 44px 6px 44px;

  width: 100%;

  padding: 2.5rem;
`

export const CartCoffeeCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  margin-bottom: 3rem;
`

