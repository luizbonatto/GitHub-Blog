import { LabelSession, SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <LabelSession>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </LabelSession>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
