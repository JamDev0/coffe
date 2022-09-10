import { useEffect } from 'react'

import { FormProvider, useForm } from 'react-hook-form'

import * as zod from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { CartContainer, FormsContainer } from './styles'
import { AddressForm } from './components/AddressForm'
import { OrderList } from './components/OrderList'
import { PaymentType } from './components/PaymentTypeForm'

const OrderFormValidationSchema = zod.object({
  cep: zod.number().max(99999999).min(10000000),
  street: zod.string().min(1),
  streetNumber: zod.number().min(0),
  streetComplement: zod.optional(zod.string().or(zod.number())),
  district: zod.string().min(1),
  city: zod.string().min(1),
  federativeUnit: zod.string().max(2).min(2),
})

export type OrderFormTypes = zod.infer<typeof OrderFormValidationSchema>

export function Cart() {
  const OrderForm = useForm<OrderFormTypes>({
    resolver: zodResolver(OrderFormValidationSchema),
  })

  useEffect(() => {
    document.title = 'Coffee Delivery  - Carrinho'
  }, [])

  return (
    <CartContainer>
      <FormProvider {...OrderForm}>
        <FormsContainer>
          <h2>Complete seu pedido</h2>
          <AddressForm />
          <PaymentType />
        </FormsContainer>

        <OrderList />
      </FormProvider>
    </CartContainer>
  )
}
