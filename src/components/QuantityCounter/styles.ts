import styled from "styled-components"

export const CounterContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;

  height: 2rem;
  width: 4.5rem;

  padding: 0.75rem 0.5rem;

  font-size: 1rem;
  line-height: 130%;
  color: ${(params) => params.theme.colors.base.title};

  border-radius: 6px;

  background-color: ${(params) => params.theme.colors.base.button};

  margin-right: 0.5rem;
`

export const CounterBtn = styled.button`
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