import { useEffect } from 'react'

import { FormProvider, useForm } from 'react-hook-form'

import * as zod from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { CartContainer, FormsContainer } from './styles'
import { AddressForm } from './components/AddressForm'

export function Cart() {
  const OrderFormValidationSchema = zod.object({
    cep: zod.number(),
    street: zod.string(),
    streetNumber: zod.number(),
    streetComplement: zod.optional(zod.string().or(zod.number())),
    district: zod.string(),
    city: zod.string(),
    federativeUnit: zod.string().max(2)
  })

  type OrderFormTypes = zod.infer<typeof OrderFormValidationSchema>

  const OrderForm = useForm<OrderFormTypes>(
    {
      resolver: zodResolver(OrderFormValidationSchema),
    },
  )

  useEffect(() => {
    document.title = 'Coffee Delivery  - Carrinho'
  }, [])

  return (
    <CartContainer>
      <FormsContainer>
        <h2>
          Complete seu pedido
        </h2>
        <FormProvider {...OrderForm}>
          <AddressForm />
        </FormProvider>    
      </FormsContainer>
    </CartContainer>
  )
}
