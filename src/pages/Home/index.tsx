import { HomeContainer } from './styles'

import { Presentation } from './components/Presentation'
import { Shop } from './components/Shop'

export function Home() {
  return (
    <HomeContainer>
      <Presentation />

      <Shop />
    </HomeContainer>
  )
}
