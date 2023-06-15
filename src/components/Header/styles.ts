import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 29.6rem;
  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  margin-top: -76px;
`
