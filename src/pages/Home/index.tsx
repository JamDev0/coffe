import { HomeContainer } from './styles'

import { Presentation } from './components/Presentation'
import { Shop } from './components/Shop'
import { useEffect } from 'react'

export function Home() {
  useEffect(() => {
    document.title = 'Coffee Delivery - Home'
  }, [])

  return (
    <HomeContainer>
      <Presentation />

      <Shop />
    </HomeContainer>
  )
}
