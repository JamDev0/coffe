import { HeaderContainer, HomeBtn, LocationContainer, MapPinStyled } from './styles'

import logo from '../../assets/Logo.svg'
import { CartButton } from './components/CartButton'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <HomeBtn to={'/'}>
        <img src={logo} alt="App logo" />
      </HomeBtn>

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
