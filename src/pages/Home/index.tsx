import { PublicationCard } from '../../components/PublicationCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, PublicationsSession } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard />
      <SearchForm />
      <PublicationsSession>
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
      </PublicationsSession>
    </HomeContainer>
  )
}
