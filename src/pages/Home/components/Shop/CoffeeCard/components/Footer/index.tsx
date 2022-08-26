import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  QuantityBtn,
  FooterContainer,
  Price,
  QuantityContainer,
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
      <QuantityContainer>
        <QuantityBtn>
          <Minus weight="bold" />
        </QuantityBtn>
        1
        <QuantityBtn>
          <Plus weight="bold" />
        </QuantityBtn>
      </QuantityContainer>
      <ShopCartBtn>
        <ShoppingCart weight="fill" />
      </ShopCartBtn>
    </FooterContainer>
  )
}
