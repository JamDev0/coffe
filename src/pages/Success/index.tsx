import { DeliveryBoldInfo, DeliveryInfo, DeliveryInfosContainer, SuccessContainer, SuccessInfoContainer } from "./styles";

import SuccessImg from '../../assets/SuccessImg.png'
import { Icon } from "../../components/Icon";
import { CurrencyCircleDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
  return (
    <SuccessContainer>
      <SuccessInfoContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <DeliveryInfosContainer>
          <DeliveryInfo>
            <Icon svg={<MapPin weight="fill"/>} backgroundColor='purple' />
            <p>
              Entrega em <DeliveryBoldInfo>Rua João Daniel Martinelli, 102</DeliveryBoldInfo> 
              <br />
              Farrapos - Porto Alegre, RS
            </p>
          </DeliveryInfo>

          <DeliveryInfo>
            <Icon svg={<Timer weight="fill"/>} backgroundColor='yellow' />
            <p>
              Previsão de entrega 
              <br />
              <DeliveryBoldInfo>20 min - 30 min</DeliveryBoldInfo>
            </p>
          </DeliveryInfo>

          <DeliveryInfo>
            <Icon svg={<CurrencyCircleDollar weight="regular"/>} backgroundColor='darkYellow' />
            <p>
              Pagamento na entrega
              <br />
              <DeliveryBoldInfo>Cartão de Crédito</DeliveryBoldInfo>
            </p>
          </DeliveryInfo>
        </DeliveryInfosContainer>
      </SuccessInfoContainer>
      <img src={SuccessImg} alt=''/>
    </SuccessContainer>
  )
}