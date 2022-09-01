import styled, { css } from "styled-components";

interface PresentationDetailsIconContainerParams {
  type: 'cart' | 'package' | 'time' | 'coffee'
}

const presentationDetailsIconBackgroundColors = {
  cart: css`
    background-color: ${(params) => params.theme.colors.product.yellow[600]};
  `,
  package: css`
    background-color: ${(params) => params.theme.colors.base.title};
  `,
  time: css`
    background-color: ${(params) => params.theme.colors.product.yellow[500]};
  `,
  coffee: css`
    background-color: ${(params) => params.theme.colors.product.purple[500]};
  `,
}

export const PresentationDetailIconContainer = styled.div<PresentationDetailsIconContainerParams>`
  padding: 0.5rem;

  border-radius: 9999px;

  line-height: 0;

  ${(params) => presentationDetailsIconBackgroundColors[params.type]};

  > svg {
    width: 1rem;
    height: 1rem;

    color: ${(params) => params.theme.colors.base.background};
  }
`
