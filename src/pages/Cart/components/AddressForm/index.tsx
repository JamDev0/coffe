import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import {
  AddressFormContainer,
  CEPInput,
  InputsContainer,
  StreetNumberInput,
  SameLineInputsContainer,
  StreetInputs,
  StreetComplementInput,
  DistrictInput,
  CityInput,
  FederativeUnitInput,
  StreetComplementInputWrapper,
  StreetComplementInputAfter,
  DescriptionContainer,
} from './styles'

export function AddressForm() {
  const { register, watch } = useFormContext()

  const watchedComplement = watch('streetComplement')

  return (
    <AddressFormContainer>
      <DescriptionContainer>
        <MapPinLine />
        <div>
          <h2>Endereço de Entrega</h2>
          <h3>Informe o endereço onde deseja receber seu pedido</h3>
        </div>
      </DescriptionContainer>

      <InputsContainer>
        <CEPInput placeholder="CEP" type="text" {...register('cep')} />

        <StreetInputs placeholder="Rua" type="text" {...register('street')} />

        <SameLineInputsContainer>
          <StreetNumberInput
            placeholder="Número"
            type="text"
            {...register('streetNumber')}
          />

          <StreetComplementInputWrapper>
            <StreetComplementInput
              placeholder="Complemento"
              type="text"
              {...register('streetComplement')}
            />
            {!watchedComplement ? (
              <StreetComplementInputAfter>Optional</StreetComplementInputAfter>
            ) : null}
          </StreetComplementInputWrapper>
        </SameLineInputsContainer>

        <SameLineInputsContainer>
          <DistrictInput
            placeholder="Bairro"
            type="text"
            {...register('district')}
          />

          <CityInput placeholder="Cidade" type="text" {...register('city')} />

          <FederativeUnitInput
            placeholder="UF"
            type="text"
            {...register('federativeUnit')}
          />
        </SameLineInputsContainer>
      </InputsContainer>
    </AddressFormContainer>
  )
}
