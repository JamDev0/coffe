import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { usePaymentForm } from '../../../../../../hooks/usePaymentForm'
import { ConcludeBtnContainer } from './styles'

export function ConcludeBtn() {
  const { handleSubmit } = useFormContext()

  const { selectedPaymentForm } = usePaymentForm()

  const navigate = useNavigate()

  function onSubmit(data) {
    const isPaymentFormSelected = selectedPaymentForm !== null

    if (isPaymentFormSelected) {
      navigate('/success')
    }
  }

  function onError(data) {
    console.log('Erro ', data)
  }

  return (
    <ConcludeBtnContainer onClick={() => handleSubmit(onSubmit, onError)()}>
      confirmar pedido
    </ConcludeBtnContainer>
  )
}
