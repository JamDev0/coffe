import {
  DeliveryBoldInfo,
  DeliveryInfo,
  DeliveryInfosContainer,
  SuccessContainer,
  SuccessInfoContainer,
} from './styles'

import SuccessImg from '../../assets/SuccessImg.png'
import { Icon } from '../../components/Icon'
import { CurrencyCircleDollar, MapPin, Timer } from 'phosphor-react'
import { useOrderForm } from '../../hooks/useOrderForm'
import { usePaymentForm } from '../../hooks/usePaymentForm'

export function Success() {
  const { inputsValues } = useOrderForm()

  const { selectedPaymentForm } = usePaymentForm()

  function selectedPaymentFormTextToDisplay() {
    switch (selectedPaymentForm) {
      case 'cash':
        return 'Dinheiro'

      case 'credit':
        return 'Cartão de Crédito'

      case 'debit':
        return 'Cartão de Débito'
    }
  }

  return (
    <SuccessContainer>
      <SuccessInfoContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <DeliveryInfosContainer>
          <DeliveryInfo>
            <Icon svg={<MapPin weight="fill" />} backgroundColor="purple" />
            <p>
              Entrega em{' '}
              <DeliveryBoldInfo>
                {inputsValues.street}, {inputsValues.streetNumber}{' '}
                {inputsValues.streetComplement
                  ? '- ' + inputsValues.streetComplement
                  : null}
              </DeliveryBoldInfo>
              <br />
              {inputsValues.district} - {inputsValues.city},{' '}
              {inputsValues.federativeUnit}
            </p>
          </DeliveryInfo>

          <DeliveryInfo>
            <Icon svg={<Timer weight="fill" />} backgroundColor="yellow" />
            <p>
              Previsão de entrega
              <br />
              <DeliveryBoldInfo>20 min - 30 min</DeliveryBoldInfo>
            </p>
          </DeliveryInfo>

          <DeliveryInfo>
            <Icon
              svg={<CurrencyCircleDollar weight="regular" />}
              backgroundColor="darkYellow"
            />
            <p>
              Pagamento na entrega
              <br />
              <DeliveryBoldInfo>
                {selectedPaymentFormTextToDisplay()}
              </DeliveryBoldInfo>
            </p>
          </DeliveryInfo>
        </DeliveryInfosContainer>
      </SuccessInfoContainer>
      <img src={SuccessImg} alt="" />
    </SuccessContainer>
  )
}
