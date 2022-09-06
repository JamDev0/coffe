import { createContext } from 'react'
import { CoffeeCard } from './CoffeeCard'

import { CoffeeInterface, Coffees } from './Coffees'

import { CoffeeCardsContainer, ShopContainer } from './styles'

const isThereAnyCoffees = Coffees.length > 0

export const CoffeeCardPropsContext = createContext<CoffeeInterface>(
  {} as CoffeeInterface,
)

export function Shop() {
  return (
    <ShopContainer>
      <h2>Nossos cafés</h2>

      {isThereAnyCoffees ? (
        <CoffeeCardsContainer>
          {Coffees.map((Coffee) => (
            <CoffeeCardPropsContext.Provider value={Coffee} key={Coffee.id}>
              <CoffeeCard />
            </CoffeeCardPropsContext.Provider>
          ))}
        </CoffeeCardsContainer>
      ) : null}
    </ShopContainer>
  )
}
