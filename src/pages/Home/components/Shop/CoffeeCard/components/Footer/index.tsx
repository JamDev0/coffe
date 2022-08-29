import { ShoppingCart } from 'phosphor-react'
import { QuantityCounter } from '../../../../../../../components/QuantityCounter'
import {
  FooterContainer,
  Price,
  ShopCartBtn,
} from './styles'

interface FooterProps {
  price: number
}

export function Footer({ price }: FooterProps) {
  return (
    <FooterContainer>
      <span>
        R$ <Price>{price}</Price>
      </span>
      <QuantityCounter />
      <ShopCartBtn>
        <ShoppingCart weight="fill" />
      </ShopCartBtn>
    </FooterContainer>
  )
}
