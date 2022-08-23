import { HeaderContainer, LocationContainer, MapPinStyled } from './styles'

import logo from '../../assets/Logo.svg'
import { CartButton } from './components/CartButton'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="App logo" />

      <div>
        <LocationContainer>
          <MapPinStyled weight="fill" />
          São Paulo, SP
        </LocationContainer>
        <CartButton />
      </div>
    </HeaderContainer>
  )
}
