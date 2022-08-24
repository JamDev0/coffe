import { CoffeeCardContainer } from './styles'

import Coffee from '../../../../../assets/Coffees/ExpressoTradicional.png'
import { CoffeeTag } from './components/CoffeeTag'
import { Footer } from './components/Footer'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={Coffee} alt="" />
      <CoffeeTag />
      <h2>Expresso Tradicional</h2>
      <h3>O tradicional café feito com água quente e grãos moídos</h3>

      <Footer />
    </CoffeeCardContainer>
  )
}
