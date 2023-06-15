import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 3.2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  height: 26rem;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 1.6rem;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-span']};
    white-space: nowrap;
  }
`
