import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  DescriptionContainer,
  PaymentTypeContainer,
  PayMethodCard,
  PayMethodCardsContainer,
} from './styles'

export function PaymentType() {
  return (
    <PaymentTypeContainer>
      <DescriptionContainer>
        <CurrencyDollar />

        <div>
          <h2>Pagamento</h2>

          <h3>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </h3>
        </div>
      </DescriptionContainer>

      <PayMethodCardsContainer>
        <PayMethodCard>
          <CreditCard />
          Cartão de crédito
        </PayMethodCard>

        <PayMethodCard>
          <Bank />
          Cartão de débito
        </PayMethodCard>

        <PayMethodCard>
          <Money />
          Dinheiro
        </PayMethodCard>
      </PayMethodCardsContainer>
    </PaymentTypeContainer>
  )
}
