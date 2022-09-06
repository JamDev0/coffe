import { CoffeeCardContainer, TagsContainer } from './styles'

import { CoffeeTag } from './components/CoffeeTag'
import { Footer } from './components/Footer'
import { useContext } from 'react'
import { CoffeeCardPropsContext } from '..'

export function CoffeeCard() {
  const { description, tags, img, name, price } = useContext(
    CoffeeCardPropsContext,
  )

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
