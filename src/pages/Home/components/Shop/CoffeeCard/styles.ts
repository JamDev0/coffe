import styled from 'styled-components'

export const CoffeeCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: fit-content;

  max-width: 17rem;

  background-color: ${(params) => params.theme.colors.base.card};

  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  padding: 1.25rem 1.5rem;

  text-align: center;

  > img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: calc(-1.25rem - 1.25rem);

    margin-bottom: 12px;
  }

  > h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    margin-bottom: 8px;
  }

  > h3 {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(params) => params.theme.colors.base.label};

    margin-bottom: 2.0625rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.25rem;

  margin-bottom: 1rem;
`
