import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;

  > span {
    display: flex;
    align-items: center;
    column-gap: 0.25rem;

    font-size: 0.875rem;
    line-height: 130%;

    color: ${(params) => params.theme.colors.base.text};

    margin-right: 1.4375rem;
  }
`

export const Price = styled.span`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 130%;

  color: ${(params) => params.theme.colors.base.text};
`

export const QuantityContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;

  padding: 0.75rem 0.5rem;

  font-size: 1rem;
  line-height: 130%;
  color: ${(params) => params.theme.colors.base.title};

  border-radius: 6px;

  background-color: ${(params) => params.theme.colors.base.button};

  margin-right: 0.5rem;
`

export const QuantityBtn = styled.button`
  display: flex;
  align-items: center;

  color: ${(params) => params.theme.colors.product.purple[500]};

  width: fit-content;
  height: fit-content;

  border: none;

  cursor: pointer;

  background-color: transparent;

  transition: color 250ms ease-in-out, transform 150ms ease-in;

  > svg {
    width: 0.875rem;
    height: 0.875rem;
  }

  :hover {
    color: ${(params) => params.theme.colors.product.purple[600]};

    transform: scale(120%);
  }
`

export const ShopCartBtn = styled.button`
  background-color: ${(params) => params.theme.colors.product.purple[600]};

  padding: 0.5rem;

  border-radius: 6px;
  border: none;

  color: ${(params) => params.theme.colors.base.card};

  line-height: 0;

  height: fit-content;

  cursor: pointer;

  transition: background-color 250ms ease-in-out;

  > svg {
    width: 1.375rem;
    height: 1.375rem;
  }

  :hover {
    background-color: ${(params) => params.theme.colors.product.purple[500]};
  }
`
