import { useEffect, useState } from 'react'
import { PublicationCard } from '../../components/PublicationCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, PublicationsSession } from './styles'
import { api } from '../../lib/axios'

interface Issue {
  number: number
  title: string
  created_at: string
  login: string
  comments: number
  body: string
  url: URL
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchIssues() {
    const response = await api.get('/search/issues', {
      params: {
        q: 'repo:diego3g/rocketredis',
      },
    })

    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  const issuesQuantity = issues.length
  return (
    <HomeContainer>
      <ProfileCard />
      <SearchForm issuesQuantity={issuesQuantity} />
      <PublicationsSession>
        {issues.map((issue) => {
          return (
            <PublicationCard
              key={issue.number}
              title={issue.title}
              body={issue.body}
              created_at={issue.created_at}
            />
          )
        })}
      </PublicationsSession>
    </HomeContainer>
  )
}
