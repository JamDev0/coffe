import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { usePaymentForm } from '../../../../hooks/usePaymentForm'
import {
  DescriptionContainer,
  PaymentTypeContainer,
  PayMethodCard,
  PayMethodCardsContainer,
} from './styles'

export function PaymentType() {
  const { changeSelectedPaymentForm, selectedPaymentForm } = usePaymentForm()

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
        <PayMethodCard
          onClick={() => {
            changeSelectedPaymentForm('credit')
          }}
          selected={selectedPaymentForm === 'credit'}
        >
          <CreditCard />
          Cartão de crédito
        </PayMethodCard>

        <PayMethodCard
          onClick={() => {
            changeSelectedPaymentForm('debit')
          }}
          selected={selectedPaymentForm === 'debit'}
        >
          <Bank />
          Cartão de débito
        </PayMethodCard>

        <PayMethodCard
          onClick={() => {
            changeSelectedPaymentForm('cash')
          }}
          selected={selectedPaymentForm === 'cash'}
        >
          <Money />
          Dinheiro
        </PayMethodCard>
      </PayMethodCardsContainer>
    </PaymentTypeContainer>
  )
}
