import { ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { ButtonContainer } from './styles'

export function CartButton() {
  const navigate = useNavigate()

  return (
    <ButtonContainer itemsNumber={null} onClick={() => navigate('/cart')}>
      <ShoppingCart weight="fill" />
    </ButtonContainer>
  )
}
