import { HomeContainer, PresentationContainer, PresentationTitles } from "./styles";

import CoffeeImage from '../../assets/CoffeeImage.png'

export function Home() {
  return (
    <HomeContainer>
      <PresentationContainer>
        <div>
          <PresentationTitles>
            <h1>
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </h2>
          </PresentationTitles>
        </div>
        <img src={CoffeeImage} />
      </PresentationContainer>
    </HomeContainer>
  )
}
