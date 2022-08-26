import styled from "styled-components";

export const CartCoffeeCardContainer = styled.div`
  display: flex;

  padding: 0.5rem 0.25rem;

  > img {
    width: 4rem;
    height: 4rem;
  }
`

export const CartCoffeeCardContentContainer = styled.div`
  > h2 {
    font-size: 1rem;
    color: ${params => params.theme.colors.base.subtitle};
  }
`

export const Price = styled.span`
  color: ${params => params.theme.colors.base.text};
  font-size: 1rem;
  font-weight: 700;
`