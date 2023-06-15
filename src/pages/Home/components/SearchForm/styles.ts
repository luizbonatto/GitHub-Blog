import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-top: 7.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  > input {
    padding: 1.2rem 1.6rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid #1c2f41;
    width: 100%;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const LabelSession = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-span']};
  }
`
