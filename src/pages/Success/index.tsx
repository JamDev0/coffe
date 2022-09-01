import { DeliveryInfoContainer, SuccessContainer, SuccessInfoContainer } from "./styles";

import SuccessImg from '../../assets/SuccessImg.jpg'

export function Success() {
  return (
    <SuccessContainer>
      <SuccessInfoContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <DeliveryInfoContainer>
          
        </DeliveryInfoContainer>
      </SuccessInfoContainer>
      <img src={SuccessImg} alt=''/>
    </SuccessContainer>
  )
}