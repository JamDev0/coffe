import styled from 'styled-components'

interface ButtonContainerParams {
  itemsNumber: string | null
}

export const ButtonContainer = styled.button<ButtonContainerParams>`
  position: relative;

  background-color: ${(params) => params.theme.colors.product.yellow[300]};

  border-radius: 6px;
  border: 0;

  color: ${(params) => params.theme.colors.product.yellow[600]};

  padding: 0.5rem;

  line-height: 0;

  cursor: pointer;

  * {
    width: 1.375rem;
    height: 1.375rem;
  }

  ::after {
    content: '3';

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    right: 0;

    transform: translate(40%, -40%);

    width: 1.25rem;
    height: 1.25rem;

    border-radius: 9999px;

    font-size: 0.75rem;
    font-weight: bold;
    line-height: 0;
    color: ${(params) => params.theme.colors.base.white};

    background-color: ${(params) => params.theme.colors.product.yellow[600]};
  }
`
