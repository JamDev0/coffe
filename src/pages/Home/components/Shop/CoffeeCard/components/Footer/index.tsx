import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  Btn,
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
        <Btn>
          <Minus weight="bold" />
        </Btn>
        1
        <Btn>
          <Plus weight="bold" />
        </Btn>
      </QuantityContainer>
      <ShopCartBtn>
        <ShoppingCart weight="fill" />
      </ShopCartBtn>
    </FooterContainer>
  )
}
