import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { OrderFormTypes } from '../../../..'
import { useOrderForm } from '../../../../../../hooks/useOrderForm'
import { usePaymentForm } from '../../../../../../hooks/usePaymentForm'
import { ConcludeBtnContainer } from './styles'

export function ConcludeBtn() {
  const { handleSubmit, getValues } = useFormContext()

  const { selectedPaymentForm } = usePaymentForm()

  const { registerFormValues } = useOrderForm()

  const navigate = useNavigate()

  function onSubmit() {
    const isPaymentFormSelected = selectedPaymentForm !== null

    if (isPaymentFormSelected) {
      navigate('/success')
      registerFormValues(getValues() as OrderFormTypes)
    }
  }

  function onError(data: any) {
    console.log('Erro ', data)
  }

  return (
    <ConcludeBtnContainer onClick={() => handleSubmit(onSubmit, onError)()}>
      confirmar pedido
    </ConcludeBtnContainer>
  )
}
