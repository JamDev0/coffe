import styled from "styled-components";

export const ConcludeBtnContainer = styled.button`
  width: 100%;

  font-size: 0.875rem;
  text-transform: uppercase;
  line-height: 160%;
  font-weight: 700;
  color: ${params => params.theme.colors.base.white};

  border: none;
  border-radius: 6px;

  padding: 0.75rem 0;

  background-color: ${params => params.theme.colors.product.yellow[500]};

  cursor: pointer;

  transition: background-color 250ms 0s ease-in-out;

  :hover {
    background-color: ${params => params.theme.colors.product.yellow[600]};
  }
`