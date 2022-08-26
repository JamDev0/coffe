import { CartCoffeeCardContainer, CartCoffeeCardContentContainer, Price } from "./styles";

import Irlandes from '../../../../../assets/Coffees/Type=Irlandês.png'

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
        <h2>
          Irlandês
        </h2>
        <div>

        </div>
      </CartCoffeeCardContentContainer>
      <Price>
        R$ 9.99
      </Price>
    </CartCoffeeCardContainer>
  )
}