import styled from "styled-components";

export const DeleteBtnContainer = styled.button`
  display: flex;
  column-gap: 0.25rem;
  align-items: center;

  height: 2rem;

  border-radius: 6px;
  border: none;

  padding: 0.5rem;

  background-color: ${params => params.theme.colors.base.button};

  cursor: pointer;

  transition: background-color 250ms 0s ease-in-out;

  > h2 {
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${params => params.theme.colors.base.text};
  }

  > svg {
    width: 1rem;
    height: 1rem;

    color: ${params => params.theme.colors.product.purple[500]};
  }

  :hover {
    background-color: ${params => params.theme.colors.base.hover};
  }
`