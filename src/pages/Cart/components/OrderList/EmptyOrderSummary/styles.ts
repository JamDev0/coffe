import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const EmptyOrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  align-items: center;

  width: 100%;

  margin-bottom: 1.5rem;

  > h1 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(params) => params.theme.colors.base.title};
  }

  > h2 {
    text-align: center;

    font-size: 1.25rem;
    color: ${(params) => params.theme.colors.base.subtitle};
  }

  > img {
    width: 15rem;
    height: 15rem;
  }
`

export const LinkToHome = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(params) => params.theme.colors.base.title};
  text-decoration: underline;
  text-decoration-color: ${(params) => params.theme.colors.product.yellow[500]};
  text-align: center;

  border-radius: 6px;

  :focus {
    outline-offset: 1px;

    text-decoration-color: ${(params) =>
      params.theme.colors.product.purple[500]};
  }
`
