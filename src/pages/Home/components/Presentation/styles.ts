import styled, { css } from 'styled-components'

import PresentationBackground from '../../../../assets/PresentationBackground.png'

interface PresentationDetailsIconContainerParams {
  type: 'cart' | 'package' | 'time' | 'coffee'
}

export const PresentationContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 4.8125rem;

  padding: 5.75rem 10rem;

  background-image: url(${PresentationBackground});
  background-size: cover;
  background-repeat: no-repeat;

  > div {
    display: flex;
    flex-direction: column;
    row-gap: 4.125rem;
  }

  > img {
    width: 22.5rem;
  }
`

export const PresentationTitles = styled.div`
  > h1 {
    font-family: 'Baloo 2', serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(params) => params.theme.colors.base.title};
  }

  > h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(params) => params.theme.colors.base.subtitle};
  }
`
export const PresentationDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2.5rem;
  justify-content: space-between;
`

export const PresentationDetailsSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
`

export const PresentationDetailContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;

  > h3 {
    line-height: 130%;
    font-size: 1rem;
    color: ${(params) => params.theme.colors.base.text};
  }
`