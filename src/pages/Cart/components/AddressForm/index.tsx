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
    const value = event.target.value

    const valueWithoutDash = value.replace('-', '')

    const shouldInsertDash = valueWithoutDash.length >= 5

    //@ts-ignore
    const inputData = event.nativeEvent.data

    let finalValue

    if (shouldInsertDash) {
      if (inputData === null && valueWithoutDash.length - 1 < 5) {
        finalValue = valueWithoutDash
      } else {
        finalValue =
          valueWithoutDash.substring(0, 5) +
          '-' +
          valueWithoutDash.substring(5, 8)
      }
    } else {
      finalValue = valueWithoutDash
    }

    setValue('cep', finalValue)
  }

  function formatFUInput(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value

    const finalValue = value.substring(0, 2)

    setValue('federativeUnit', finalValue)
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
          disabled={!isProductsLengthGreaterThanZero}
          {...register('cep')}
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
            onChange={(event) => formatFUInput(event)}
          />
        </SameLineInputsContainer>
      </InputsContainer>
    </AddressFormContainer>
  )
}
