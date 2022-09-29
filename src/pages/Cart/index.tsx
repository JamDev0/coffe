import { useEffect } from 'react'

import { FormProvider, useForm } from 'react-hook-form'

import * as zod from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { CartContainer, FormsContainer } from './styles'
import { AddressForm } from './components/AddressForm'
import { OrderList } from './components/OrderList'
import { PaymentType } from './components/PaymentTypeForm'
import { useProductCart } from '../../hooks/useProductCart'

const OrderFormValidationSchema = zod.object({
  cep: zod.string(),
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

  const { products } = useProductCart()

  console.log('Values: ', OrderForm.getValues())

  if(products.length <= 0) {
    if(OrderForm.getValues().cep) {
      OrderForm.resetField('cep')
    }
    if(OrderForm.getValues().city) {
      OrderForm.resetField('city')
    }
    if(OrderForm.getValues().district) {
      OrderForm.resetField('district')
    }
    if(OrderForm.getValues().federativeUnit) {
      OrderForm.resetField('federativeUnit')
    }
    if(OrderForm.getValues().street) {
      OrderForm.resetField('street')
    }
    if(OrderForm.getValues().streetComplement) {
      OrderForm.resetField('streetComplement')
    }
    if(OrderForm.getValues().streetNumber) {
      OrderForm.resetField('streetNumber')
    }
  }

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
