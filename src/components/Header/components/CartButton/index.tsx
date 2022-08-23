import { ShoppingCart } from 'phosphor-react'
import { ButtonContainer } from './styles'

export function CartButton() {
  return (
    <ButtonContainer itemsNumber="1">
      <ShoppingCart weight="fill" />
    </ButtonContainer>
  )
}
