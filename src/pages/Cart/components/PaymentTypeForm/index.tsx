import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { usePaymentForm } from '../../../../hooks/usePaymentForm'
import { useProductCart } from '../../../../hooks/useProductCart'
import { paymentFormState } from '../../../../reducers/paymentFormReducer/reducer'
import {
  DescriptionContainer,
  PaymentTypeContainer,
  PayMethodCard,
  PayMethodCardsContainer,
} from './styles'

export function PaymentType() {
  const { changeSelectedPaymentForm, selectedPaymentForm } = usePaymentForm()

  const { products } = useProductCart()

  const isProductsLengthGreaterThanZero = products.length > 0

  function handlePaymentFormClick(type: paymentFormState['selected']) {
    if (isProductsLengthGreaterThanZero) {
      changeSelectedPaymentForm(type)
    }
  }

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
            handlePaymentFormClick('credit')
          }}
          selected={selectedPaymentForm === 'credit'}
          disabled={!isProductsLengthGreaterThanZero}
        >
          <CreditCard />
          <span>Cartão de crédito</span>
        </PayMethodCard>

        <PayMethodCard
          onClick={() => {
            handlePaymentFormClick('debit')
          }}
          selected={selectedPaymentForm === 'debit'}
          disabled={!isProductsLengthGreaterThanZero}
        >
          <Bank />
          <span>Cartão de débito</span>
        </PayMethodCard>

        <PayMethodCard
          onClick={() => {
            handlePaymentFormClick('cash')
          }}
          selected={selectedPaymentForm === 'cash'}
          disabled={!isProductsLengthGreaterThanZero}
        >
          <Money />
          <span>Dinheiro</span>
        </PayMethodCard>
      </PayMethodCardsContainer>
    </PaymentTypeContainer>
  )
}
