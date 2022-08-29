import { Minus, Plus } from "phosphor-react";
import { CounterBtn, CounterContainer } from "./styles";

export function QuantityCounter() {
  return (
    <CounterContainer>
      <CounterBtn>
        <Minus weight="bold" />
      </CounterBtn>
      1
      <CounterBtn>
        <Plus weight="bold" />
      </CounterBtn>
    </CounterContainer>
  )
}