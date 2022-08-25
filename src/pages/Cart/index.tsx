import { useEffect } from 'react'

import { useForm } from 'react-hook-form'

import * as zod from 'zod'

import { CartContainer } from './styles'

export function Cart() {
  const OrderFormValidationSchema = zod.object({
    cep: zod.number(),
  })

  const OrderForm = useForm()

  useEffect(() => {
    document.title = 'Coffee Delivery  - Carrinho'
  }, [])

  return <CartContainer></CartContainer>
}
