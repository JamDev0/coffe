import styled from 'styled-components'

export const OrderListContainer = styled.div`
  width: 26rem;

  > h2 {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Baloo 2';
    color: ${(params) => params.theme.colors.base.title};

    margin-bottom: 0.9375rem;
  }
`

export const OrderContainer = styled.div`
  background-color: ${(params) => params.theme.colors.base.card};

  border-radius: 6px 44px 6px 44px;

  width: 100%;
  height: 500px;
`
