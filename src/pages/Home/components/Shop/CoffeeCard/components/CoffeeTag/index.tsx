import { CoffeeTagContainer } from './styles'

interface CoffeeTagProps {
  tag: string
}

export function CoffeeTag({ tag }: CoffeeTagProps) {
  return <CoffeeTagContainer>{tag}</CoffeeTagContainer>
}
