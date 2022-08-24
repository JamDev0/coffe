import styled from 'styled-components'

export const CoffeeTagContainer = styled.span`
  color: ${(params) => params.theme.colors.product.yellow[600]};
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;

  padding: 0.25rem 0.5rem;

  background-color: ${(params) => params.theme.colors.product.yellow[300]};

  border-radius: 999px;

  margin-bottom: 16px;
`
