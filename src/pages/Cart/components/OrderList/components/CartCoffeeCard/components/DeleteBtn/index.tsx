import { Trash } from 'phosphor-react'
import { DeleteBtnContainer } from './styles'

export function DeleteBtn() {
  return (
    <DeleteBtnContainer>
      <Trash />
      <h2>Remover</h2>
    </DeleteBtnContainer>
  )
}
