import { CoffeeCardContainer, TagsContainer } from './styles'

import { CoffeeTag } from './components/CoffeeTag'
import { Footer } from './components/Footer'
import { CoffeeInterface } from '../Coffees'

interface CoffeeCardProps extends CoffeeInterface {}

export function CoffeeCard({
  description,
  img,
  name,
  price,
  tags,
}: CoffeeCardProps) {
  const isThereAnyTag = tags ? tags.length > 0 : false

  return (
    <CoffeeCardContainer>
      <img src={img} alt="" />
      <TagsContainer>
        {isThereAnyTag
          ? tags?.map((tag) => {
              return <CoffeeTag tag={tag} key={tag} />
            })
          : null}
      </TagsContainer>
      <h2>{name}</h2>
      <h3>{description}</h3>

      <Footer price={price} />
    </CoffeeCardContainer>
  )
}
