import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import CoffeeImage from '../../../../assets/CoffeeImage.png'
import { Icon } from '../../../../components/Icon'

import {
  PresentationContainer,
  PresentationDetailContainer,
  PresentationDetailsContainer,
  PresentationDetailsSubContainer,
  PresentationTitles,
} from './styles'

export function Presentation() {
  return (
    <PresentationContainer>
      <div>
        <PresentationTitles>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </PresentationTitles>

        <PresentationDetailsContainer>
          <PresentationDetailsSubContainer>
            <PresentationDetailContainer>
              <Icon
                svg={<ShoppingCart weight="fill" />}
                backgroundColor="darkYellow"
              />
              <h3>Compra simples e segura</h3>
            </PresentationDetailContainer>

            <PresentationDetailContainer>
              <Icon svg={<Timer weight="fill" />} backgroundColor="yellow" />
              <h3>Entrega rápida e rastreada</h3>
            </PresentationDetailContainer>
          </PresentationDetailsSubContainer>

          <PresentationDetailsSubContainer>
            <PresentationDetailContainer>
              <Icon svg={<Package weight="fill" />} backgroundColor="gray" />
              <h3>Embalagem mantém o café intacto</h3>
            </PresentationDetailContainer>

            <PresentationDetailContainer>
              <Icon svg={<Coffee weight="fill" />} backgroundColor="purple" />
              <h3>O café chega fresquinho até você</h3>
            </PresentationDetailContainer>
          </PresentationDetailsSubContainer>
        </PresentationDetailsContainer>
      </div>
      <img src={CoffeeImage} />
    </PresentationContainer>
  )
}
