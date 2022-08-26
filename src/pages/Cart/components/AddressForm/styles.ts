import styled from 'styled-components'

export const AddressFormContainer = styled.section`
  padding: 2.5rem;

  background-color: ${(params) => params.theme.colors.base.card};

  border-radius: 6px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;

  margin-bottom: 2rem;

  > svg {
    width: 1.375rem;
    height: 1.375rem;

    color: ${(params) => params.theme.colors.product.yellow[600]};
  }

  > div {
    display: flex;
    flex-direction: column;

    > h2 {
      font-size: 1rem;
      color: ${(params) => params.theme.colors.base.subtitle};
    }

    > h3 {
      font-size: 0.875rem;
      color: ${(params) => params.theme.colors.base.text};
    }
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export const SameLineInputsContainer = styled.div`
  display: flex;
  column-gap: 0.75rem;
`

const BaseInput = styled.input`
  border: 1px solid ${(params) => params.theme.colors.base.button};
  border-radius: 4px;

  background-color: ${(params) => params.theme.colors.base.input};

  padding: 0.75rem;

  color: ${(params) => params.theme.colors.base.text};
  font-size: 0.875rem;

  ::placeholder {
    color: ${(params) => params.theme.colors.base.label};
  }
`

export const CEPInput = styled(BaseInput)`
  width: 12.5rem;
`

export const StreetInputs = styled(BaseInput)`
  width: 100%;
`

export const StreetNumberInput = styled(BaseInput)`
  width: 12.5rem;
`

export const StreetComplementInputWrapper = styled.div`
  position: relative;

  flex: 1;
`

export const StreetComplementInput = styled(BaseInput)`
  width: 100%;
`

export const StreetComplementInputAfter = styled.span`
  position: absolute;
  right: 0.75rem;
  top: 0;

  height: 100%;

  display: flex;
  align-items: center;

  font-size: 0.75rem;
  font-style: italic;
  color: ${(params) => params.theme.colors.base.label};
`

export const DistrictInput = styled(BaseInput)`
  width: 12.5rem;
`

export const CityInput = styled(BaseInput)`
  flex: 1;
`

export const FederativeUnitInput = styled(BaseInput)`
  width: 3.75rem;
`
