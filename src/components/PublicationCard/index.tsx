/* eslint-disable camelcase */
import { CardContainer, CardHeader } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

interface IssueCardType {
  title: string
  created_at: string
  body: string
}

export function PublicationCard({ title, created_at, body }: IssueCardType) {
  const date = formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
    locale: ptBr,
  })

  return (
    <CardContainer>
      <CardHeader>
        <h2>{title}</h2>
        <span>{date}</span>
      </CardHeader>

      <p>{body}</p>
    </CardContainer>
  )
}
