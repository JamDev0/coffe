import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoffeeCardPropsContext } from '../../..'
import { QuantityCounter } from '../../../../../../../components/QuantityCounter'
import { FooterContainer, Price, ShopCartBtn } from './styles'

interface FooterProps {
  price: number
}

export function Footer({ price }: FooterProps) {
  const coffeeInfo = useContext(CoffeeCardPropsContext)

  const navigate = useNavigate()

  return (
    <FooterContainer>
      <span>
        R$ <Price>{price}</Price>
      </span>
      <QuantityCounter coffeeInfo={coffeeInfo} />
      <ShopCartBtn onClick={() => navigate('/cart')}>
        <ShoppingCart weight="fill" />
      </ShopCartBtn>
    </FooterContainer>
  )
}
