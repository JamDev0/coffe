import { useFormContext } from "react-hook-form";
import { AddressFormContainer, CEPInput, InputsContainer, StreetNumberInput, SameLineInputsContainer, StreetInputs, StreetComplementInput, DistrictInput, CityInput, FederativeUnitInput, StreetComplementInputWrapper, StreetComplementInputAfter } from "./styles";

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <AddressFormContainer>
      

      <InputsContainer>
        <CEPInput placeholder="CEP" type='text' {...register('cep')}/>

        <StreetInputs placeholder="Rua" type='text' {...register('street')}/>

        <SameLineInputsContainer>
          <StreetNumberInput placeholder="Número" type='text' {...register('streetNumber')}/>

          <StreetComplementInputWrapper>
            <StreetComplementInput placeholder="Complemento" type='text' {...register('streetComplement')}/>
            <StreetComplementInputAfter>Optional</StreetComplementInputAfter>
          </StreetComplementInputWrapper>
        </SameLineInputsContainer>

        <SameLineInputsContainer>
          <DistrictInput placeholder="Bairro" type='text' {...register('district')}/>

          <CityInput placeholder="Cidade" type='text' {...register('city')}/>

          <FederativeUnitInput placeholder="UF" type='text' {...register('federativeUnit')}/>
        </SameLineInputsContainer>
      </InputsContainer>
    </AddressFormContainer>
  )
}