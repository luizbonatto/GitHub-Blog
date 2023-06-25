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

export function IssueCard() {
  return (
    <ProfileContainer>
      <DetailsProfile>
        <NameSession>
          <div>
            <a href="#" target="_blank" rel="noreferrer">
              Voltar
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <div>
            <a href="#" target="_blank" rel="noreferrer">
              ver no GitHub
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </NameSession>

        <h1>JavaScript data types and data structures</h1>

        <DetailsSession>
          <div>
            <FontAwesomeIcon icon={faGithub} fontSize={18} />
            luizbonatto
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            há 1 dia
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />5 seguidores
          </div>
        </DetailsSession>
      </DetailsProfile>
    </ProfileContainer>
  )
}
