import styled from "styled-components";

export const AddressFormContainer = styled.section`
  padding: 2.5rem;

  background-color: ${params => params.theme.colors.base.card};

  border-radius: 6px;
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
  border: 1px solid ${params => params.theme.colors.base.button};
  border-radius: 4px;

  background-color: ${params => params.theme.colors.base.input};

  padding: 0.75rem;

  color: ${params => params.theme.colors.base.text};
  font-size: 0.875rem;

  ::placeholder {
    color: ${params => params.theme.colors.base.label};
  }
`

export const CEPInput = styled(BaseInput)`
  width: 12.5rem;
`