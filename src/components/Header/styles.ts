import styled from 'styled-components'

import { MapPin } from 'phosphor-react'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.0625rem 10rem;

  > img {
    width: 5.3125rem;
    height: auto;

    cursor: pointer;
  }

  > div {
    display: flex;
    column-gap: 0.75rem;
  }
`

export const LocationContainer = styled.div`
  display: flex;
  column-gap: 0.25rem;
  align-items: center;

  font-size: 0.875rem;
  line-height: 130%;
  color: ${(params) => params.theme.colors.product.purple[600]};

  padding: 0.5rem;

  border-radius: 6px;

  background-color: ${(params) => params.theme.colors.product.purple[300]};
`

export const MapPinStyled = styled(MapPin)`
  height: 1.375rem;
  width: 1.375rem;

  color: ${(params) => params.theme.colors.product.purple[500]};
`
