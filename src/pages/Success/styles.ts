import styled, { css } from "styled-components";

export const SuccessContainer = styled.main`
  display: flex;
  justify-content: space-evenly;

  flex-wrap: wrap;

  padding: 5rem 10rem;

  > img {
    align-self: flex-end;

    width: 30.75rem;
    height: fit-content;
  }
`

export const SuccessInfoContainer = styled.section`
  > h1 {  
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${params => params.theme.colors.product.yellow[600]};
  }

  > h2 {
    font-size: 1.25rem;
    color: ${params => params.theme.colors.base.subtitle};

    margin-bottom: 2.5rem;
  }
`

export const DeliveryInfosContainer = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  width: 32.875rem;
  
  padding: 2.5rem;

  border-radius: 6px 36px;

  background-color: ${params => params.theme.colors.base.background};

  ::before {
    content: '';

    position: absolute;
    top: 0.0625rem;
    bottom: 0.0625rem;
    left: 0.0625rem;
    right: 0.0625rem;
    z-index: -1;

    border-radius: 8px 38px;

    background: rgb(219,172,44);
    background: linear-gradient(115deg, rgba(219,172,44,1) 0%, rgba(128,71,248,1) 100%);
  }
`

export const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;

  font-size: 1rem;
  color: ${params => params.theme.colors.base.text};
`

export const DeliveryBoldInfo = styled.span`
  font-weight: 700;
`