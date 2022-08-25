import { useFormContext } from "react-hook-form";
import { AddressFormContainer, CEPInput, InputsContainer, SameLineInputsContainer } from "./styles";

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <AddressFormContainer>
      <InputsContainer>
        <CEPInput type='text' {...register('cep')}/>

        <input type='text' {...register('street')}/>

        <SameLineInputsContainer>
          <input type='text' {...register('streetNumber')}/>

          <input type='text' {...register('streetComplement')}/>
        </SameLineInputsContainer>

        <SameLineInputsContainer>
          <input type='text' {...register('district')}/>

          <input type='text' {...register('city')}/>

          <input type='text' {...register('federativeUnit')}/>
        </SameLineInputsContainer>
      </InputsContainer>
    </AddressFormContainer>
  )
}