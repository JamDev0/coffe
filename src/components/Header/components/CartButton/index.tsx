import { ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { ButtonContainer } from './styles'

import { useProductCart } from '../../../../hooks/useProductCart'

export function CartButton() {
  const navigate = useNavigate()

  const { products } = useProductCart()

  let productsQuantity = 0

  products.forEach(
    (product) => (productsQuantity = productsQuantity + product.quantity!),
  )

  return (
    <ButtonContainer
      itemsNumber={productsQuantity}
      onClick={() => navigate('/cart')}
    >
      <ShoppingCart weight="fill" />
    </ButtonContainer>
  )
}
