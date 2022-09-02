import styled, { css } from "styled-components";

interface PresentationDetailsIconContainerParams {
  backgroundColor: 'darkYellow' | 'gray' | 'yellow' | 'purple'
}

const presentationDetailsIconBackgroundColors = {
  darkYellow: css`
    background-color: ${(params) => params.theme.colors.product.yellow[600]};
  `,
  gray: css`
    background-color: ${(params) => params.theme.colors.base.title};
  `,
  yellow: css`
    background-color: ${(params) => params.theme.colors.product.yellow[500]};
  `,
  purple: css`
    background-color: ${(params) => params.theme.colors.product.purple[500]};
  `,
}

export const PresentationDetailIconContainer = styled.div<PresentationDetailsIconContainerParams>`
  padding: 0.5rem;

  border-radius: 9999px;

  line-height: 0;

  height: fit-content;

  ${(params) => presentationDetailsIconBackgroundColors[params.backgroundColor]};

  > svg {
    width: 1rem;
    height: 1rem;

    color: ${(params) => params.theme.colors.base.background};
  }
`
