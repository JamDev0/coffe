import styled from 'styled-components'

export const CartContainer = styled.main`
  display: flex;

  padding: 0px 10rem;
`

export const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 0.75rem;

  height: fit-content;

  > h2 {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Baloo 2';
    color: ${params => params.theme.colors.base.title};

    margin-bottom: 0.9375rem;
  }
`
