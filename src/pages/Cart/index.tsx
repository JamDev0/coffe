import { useEffect } from 'react'

import { useForm } from 'react-hook-form'

import * as zod from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { CartContainer } from './styles'

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
      defaultValues: {
      },
    },
  )

  useEffect(() => {
    document.title = 'Coffee Delivery  - Carrinho'
  }, [])

  // form provider e state do form tbm useFormContext

  return <CartContainer></CartContainer>
}
