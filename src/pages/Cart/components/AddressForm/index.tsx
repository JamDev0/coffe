import { MapPinLine } from 'phosphor-react'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useProductCart } from '../../../../hooks/useProductCart'
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
  const { register, watch, setValue } = useFormContext()

  const watchedComplement = watch('streetComplement')

  const { products } = useProductCart()

  const isProductsLengthGreaterThanZero = products.length > 0

  function formatCEPInput(event: React.ChangeEvent<HTMLInputElement>) {
    let value = event.target.value

    let valueWithoutDash = value.replace('-', '')

    const shouldInsertDash = value.length === 5

    const maxLengthReached = value.length > 9

    const dashInserted = value.includes('-') //Dar um jeito de ao clicar delete na - apagar ela e o numero atrás dela

    const inputData = event.nativeEvent.data

    if (shouldInsertDash && !dashInserted) {
      value = value + '-'
    } else {
      if (inputData === null && dashInserted) {
        console.log('Ops')

        const indexOfDash = value.indexOf('-')

        value.slice(1 - indexOfDash, indexOfDash)
      }
    }

    if (maxLengthReached) {

    }

    setValue('cep', value)

    console.log('Teste formatação: ', value, valueWithoutDash)
  }

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
        <CEPInput
          placeholder="CEP"
          // disabled={!isProductsLengthGreaterThanZero}
          {...register('cep', {
            required: true,
            valueAsNumber: true,
          })}
          onChange={(event) => formatCEPInput(event)}
        />

        <StreetInputs
          placeholder="Rua"
          type="text"
          {...register('street')}
          disabled={!isProductsLengthGreaterThanZero}
        />

        <SameLineInputsContainer>
          <StreetNumberInput
            placeholder="Número"
            type="number"
            disabled={!isProductsLengthGreaterThanZero}
            {...register('streetNumber', {
              valueAsNumber: true,
              required: true,
            })}
          />

          <StreetComplementInputWrapper>
            <StreetComplementInput
              placeholder="Complemento"
              type="text"
              disabled={!isProductsLengthGreaterThanZero}
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
            disabled={!isProductsLengthGreaterThanZero}
            {...register('district', { required: true })}
          />

          <CityInput
            placeholder="Cidade"
            type="text"
            {...register('city')}
            disabled={!isProductsLengthGreaterThanZero}
          />

          <FederativeUnitInput
            placeholder="UF"
            type="text"
            disabled={!isProductsLengthGreaterThanZero}
            {...register('federativeUnit', { required: true })}
          />
        </SameLineInputsContainer>
      </InputsContainer>
    </AddressFormContainer>
  )
}
