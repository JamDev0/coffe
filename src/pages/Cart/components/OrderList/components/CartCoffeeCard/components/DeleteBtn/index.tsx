import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { productPropsContext } from '../../../..'
import { useProductCart } from '../../../../../../../../hooks/useProductCart'
import { DeleteBtnContainer } from './styles'

export function DeleteBtn() {
  const { removeProduct } = useProductCart()

  const { id } = useContext(productPropsContext)

  return (
    <DeleteBtnContainer onClick={() => removeProduct(id)}>
      <Trash />
      <h2>Remover</h2>
    </DeleteBtnContainer>
  )
}
