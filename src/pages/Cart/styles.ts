import styled from 'styled-components'

export const CartContainer = styled.main`
  display: flex;
  column-gap: 2rem;
  flex-wrap: wrap;
  row-gap: 4rem;

  padding: 0px 10rem;
`

export const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: fit-content;

  flex: 1;

  > h2 {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Baloo 2';
    color: ${(params) => params.theme.colors.base.title};

    margin-bottom: 0.9375rem;
  }
`
