import styled from "styled-components";

export const CartCoffeeCardContainer = styled.div`
  display: flex;
  column-gap: 1.25rem;

  padding: 0.5rem 0.25rem;

  > img {
    width: 4rem;
    height: 4rem;
  }
`

export const CartCoffeeCardContentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`

export const CartCoffeeCardContentPriceAndQuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h2 {
    font-size: 1rem;
    color: ${params => params.theme.colors.base.subtitle};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
`

export const Price = styled.span`
  color: ${params => params.theme.colors.base.text};
  font-size: 1rem;
  font-weight: 700;
`