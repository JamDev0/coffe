import styled from 'styled-components'

export const ShopContainer = styled.main`
  padding: 2rem 10rem;

  > h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;

    margin-bottom: 3.375rem;
  }
`

export const CoffeeCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 2rem;
  row-gap: 2.5rem;
`
