import { LabelSession, SearchFormContainer } from './styles'

interface SearchFormsType {
  issuesQuantity: number
}

export function SearchForm({ issuesQuantity }: SearchFormsType) {
  return (
    <SearchFormContainer>
      <LabelSession>
        <h2>Publicações</h2>
        <span>{issuesQuantity} publicações</span>
      </LabelSession>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
