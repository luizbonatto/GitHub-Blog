import { HeaderContainer, Logo } from './styles'

import logoImg from '../../assets/logo.svg'
import leftEffectImg from '../../assets/leftEffect.svg'
import rightEffectImg from '../../assets/rightEffect.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={leftEffectImg} alt="" />
      <Logo src={logoImg} alt="" />
      <img src={rightEffectImg} alt="" />
    </HeaderContainer>
  )
}
