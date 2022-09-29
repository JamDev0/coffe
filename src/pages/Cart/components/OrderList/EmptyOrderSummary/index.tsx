import { EmptyOrderSummaryContainer, LinkToHome } from './styles'

import CoffeeShop from '../../../../../assets/CoffeeShop.svg'

export function EmptyOrderSummary() {
  return (
    <EmptyOrderSummaryContainer>
      <h1>Ops 😔</h1>

      <h2>
        parece que <br /> você não escolheu nenhum café
      </h2>

      <LinkToHome to="/">Volte a loja para explorar nossas opções</LinkToHome>

      <img src={CoffeeShop} alt="Uma imagem ilustrativa de uma loja de café" />
    </EmptyOrderSummaryContainer>
  )
}
