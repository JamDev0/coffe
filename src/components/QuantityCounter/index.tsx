import { Minus, Plus } from 'phosphor-react'
import { useProductCart } from '../../hooks/useProductCart'
import { CoffeeInterface } from '../../pages/Home/components/Shop/Coffees'
import { CounterBtn, CounterContainer } from './styles'

interface QuantityCounterProps {
  coffeeInfo?: CoffeeInterface
}

export function QuantityCounter({ coffeeInfo }: QuantityCounterProps) {
  const { increaseProductQuantity, products, decreaseProductQuantity } =
    useProductCart()

  const currentProduct = products.find(
    (product) => product.id === coffeeInfo?.id,
  )

  const wasCoffeeInfoGiven = !!coffeeInfo

  const isCurrentProductInTheProductList = !!currentProduct

  return (
    <CounterContainer>
      <CounterBtn
        onClick={() => {
          if (wasCoffeeInfoGiven) {
            decreaseProductQuantity(coffeeInfo.id)
          }
        }}
      >
        <Minus weight="bold" />
      </CounterBtn>
      {isCurrentProductInTheProductList ? currentProduct.quantity : 0}
      <CounterBtn
        onClick={() => {
          if (wasCoffeeInfoGiven) {
            increaseProductQuantity(coffeeInfo)
          }
        }}
      >
        <Plus weight="bold" />
      </CounterBtn>
    </CounterContainer>
  )
}
