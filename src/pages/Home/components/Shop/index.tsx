import { CoffeeCard } from './CoffeeCard'

import { Coffees } from './Coffees'

import { CoffeeCardsContainer, ShopContainer } from './styles'

const isThereAnyCoffees = Coffees.length > 0

export function Shop() {
  return (
    <ShopContainer>
      <h2>Nossos cafés</h2>

      {isThereAnyCoffees ? (
        <CoffeeCardsContainer>
          {Coffees.map((Coffee) => (
            <CoffeeCard key={Coffee.id} />
          ))}
        </CoffeeCardsContainer>
      ) : null}
    </ShopContainer>
  )
}
