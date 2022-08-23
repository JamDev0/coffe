import { ShoppingCart } from 'phosphor-react'
import { ButtonContainer } from './styles'

export function CartButton() {
  return (
    <ButtonContainer itemsNumber={null}>
      <ShoppingCart weight="fill" />
    </ButtonContainer>
  )
}
