import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  Btn,
  FooterContainer,
  Price,
  QuantityContainer,
  ShopCartBtn,
} from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <span>
        R$ <Price>9,99</Price>
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
