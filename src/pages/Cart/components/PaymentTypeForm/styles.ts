import styled, { css } from 'styled-components'

interface PayMethodCardParams {
  selected?: boolean
}

export const PaymentTypeContainer = styled.section`
  padding: 2.5rem;

  background-color: ${(params) => params.theme.colors.base.card};

  border-radius: 6px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;

  margin-bottom: 2rem;

  > svg {
    width: 1.375rem;
    height: 1.375rem;

    color: ${(params) => params.theme.colors.product.purple[500]};
  }

  > div {
    display: flex;
    flex-direction: column;

    > h2 {
      font-size: 1rem;
      color: ${(params) => params.theme.colors.base.subtitle};
    }

    > h3 {
      font-size: 0.875rem;
      color: ${(params) => params.theme.colors.base.text};
    }
  }
`

export const PayMethodCardsContainer = styled.div`
  display: flex;
  column-gap: 0.75rem;

  width: 100%;
`

export const PayMethodCard = styled.button<PayMethodCardParams>`
  display: flex;
  column-gap: 0.75rem;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  border-radius: 6px;
  border: none;

  flex: 1;

  min-width: fit-content;

  background-color: ${(params) => params.theme.colors.base.button};

  cursor: pointer;

  transition: background-color 250ms 0s ease-in-out;

  > svg {
    width: 1rem;
    height: 1rem;

    color: ${(params) => params.theme.colors.product.purple[500]};
  }

  > span {
    max-width: fit-content;

    font-size: 0.75rem;
    line-height: 160%;
    color: ${(params) => params.theme.colors.base.text};
    text-transform: uppercase;
  }

  :disabled {
    opacity: 0.7;
    filter: brightness(0.85);

    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(params) => params.theme.colors.base.hover};
  }

  ${(params) =>
    params.selected
      ? css`
          &:not(:disabled) {
            box-shadow: 0px 0px 0px 1px
              ${params.theme.colors.product.purple[500]};
          }
        `
      : null}
`
