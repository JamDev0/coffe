import { ButtonsContainer, CartCoffeeCardContainer, CartCoffeeCardContentContainer, CartCoffeeCardContentPriceAndQuantityContainer, Price } from "./styles";

import Irlandes from '../../../../../assets/Coffees/Type=Irlandês.png'
import { QuantityCounter } from "../../../../../components/QuantityCounter";
import { DeleteBtn } from "./components/DeleteBtn";

interface CartCoffeeCardProps {
  img: string
  name: string
  price: number
}

export function CartCoffeeCard() {
  return (
    <CartCoffeeCardContainer>
      <img src={Irlandes}/>
      <CartCoffeeCardContentContainer>
        <CartCoffeeCardContentPriceAndQuantityContainer>
          <h2>
            Irlandês
          </h2>
          <ButtonsContainer>
            <QuantityCounter />
            <DeleteBtn />
          </ButtonsContainer>
        </CartCoffeeCardContentPriceAndQuantityContainer>
        <Price>
          R$ 9.99
        </Price>
      </CartCoffeeCardContentContainer>
    </CartCoffeeCardContainer>
  )
}