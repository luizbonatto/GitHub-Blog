import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 3.2rem;
  display: flex;
  gap: 3.2rem;

  img {
    width: 14.8rem;
    height: 14.8rem;
    border-radius: 8px;
  }

  p {
    margin: 8px 0 12px;
  }
`

export const DetailsProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  h1 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.8rem;
  }
`

export const NameSession = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  div {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  a {
    font-weight: 700;
    font-size: 1.2rem;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    text-decoration: none;
  }
`

export const DetailsSession = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  color: ${(props) => props.theme['base-subtitle']};

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
