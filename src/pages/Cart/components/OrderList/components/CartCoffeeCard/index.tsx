import {
  ButtonsContainer,
  CartCoffeeCardContainer,
  CartCoffeeCardContentContainer,
  CartCoffeeCardContentPriceAndQuantityContainer,
  Price,
} from './styles'

import { QuantityCounter } from '../../../../../../components/QuantityCounter'
import { DeleteBtn } from './components/DeleteBtn'
import { useContext } from 'react'
import { productPropsContext } from '../..'

export function CartCoffeeCard() {
  const coffeeInfo = useContext(productPropsContext)

  const { name, price, img } = coffeeInfo

  return (
    <CartCoffeeCardContainer>
      <img src={img} alt="" />
      <CartCoffeeCardContentContainer>
        <CartCoffeeCardContentPriceAndQuantityContainer>
          <h2>{name}</h2>
          <ButtonsContainer>
            <QuantityCounter coffeeInfo={coffeeInfo} />
            <DeleteBtn />
          </ButtonsContainer>
        </CartCoffeeCardContentPriceAndQuantityContainer>
        <Price>R$ {price}</Price>
      </CartCoffeeCardContentContainer>
    </CartCoffeeCardContainer>
  )
}
