/* eslint-disable camelcase */
import {
  DetailsProfile,
  DetailsSession,
  NameSession,
  ProfileContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { api } from '../../../../lib/axios'
import { useEffect, useState } from 'react'

interface ProfileDataType {
  login: string
  company: string
  followers: number
  bio: string
  name: string
  html_url: string
  avatar_url: string
}

export function ProfileCard() {
  const [profileData, setProfileData] = useState<ProfileDataType>({
    login: '',
    company: '',
    followers: 0,
    bio: '',
    name: '',
    html_url: '',
    avatar_url: '',
  })

  const user = 'diego3g'

  const userDetails = async () => {
    const response = await api.get(`users/${user}`)

    setProfileData(response.data)
  }

  useEffect(() => {
    userDetails()
  }, [])

  const { login, company, followers, bio, name, html_url, avatar_url } =
    profileData

  return (
    <ProfileContainer>
      <img src={avatar_url} alt="" />
      <DetailsProfile>
        <NameSession>
          <h1>{name}</h1>
          <div>
            <a href={html_url} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={html_url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </NameSession>

        <p>{bio}</p>

        <DetailsSession>
          <div>
            <FontAwesomeIcon icon={faGithub} fontSize={18} />
            {login}
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            {company}
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            {followers} seguidores
          </div>
        </DetailsSession>
      </DetailsProfile>
    </ProfileContainer>
  )
}
