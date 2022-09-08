import { Link } from "react-router-dom";
import styled from "styled-components";

export const EmptyOrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  align-items: center;

  width: 100%;

  margin-bottom: 1.5rem;

  > h1 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${params => params.theme.colors.base.title};
  }

  > h2 {
    text-align: center;

    font-size: 1.25rem;
    color: ${params => params.theme.colors.base.subtitle};
  }

  > img {
    width: 15rem;
    height: 15rem;
  }
`

export const LinkToHome = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${params => params.theme.colors.base.title};
  text-decoration: underline;
  text-align: center;
`