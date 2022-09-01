import styled from "styled-components";

export const SuccessContainer = styled.main`
  display: flex;
  column-gap: 6.375rem;

  padding: 5rem 10rem;

  > img {
    width: 30.75rem;
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

export const DeliveryInfoContainer = styled.section`
  display: flex;
  
  padding: 2.5rem;

  border-radius: 6px 36px;
`