import styled from 'styled-components'
import { User } from '../../../../../types'

interface Props {
  user: User
  isSelected: boolean
  onClick: (userId: number) => void
}

export default function FriendListItem({ user, isSelected, onClick }: Props) {
  return (
    <Wrapper onClick={() => onClick(user.id)} isSelected={isSelected}>
      <Avatar>
        <img src={`https://picsum.photos/id/${100 + user.id}/100`} alt={user.nickname} />
      </Avatar>
      <Preview>
        <Title>{user.nickname}</Title>
      </Preview>
    </Wrapper>
  )
}

const Wrapper = styled.div<{isSelected: boolean}>`
  padding: 15px 10px;
  display: flex;
  position: relative;
  cursor: pointer;
  ${props => props.isSelected ? 'background: rgba(0, 0, 0, 0.12);' : ''}

  :after {
    content: '';
    position: absolute;
    width: 65%;
    height: 2px;
    background: rgba(0, 0, 0, 0.12);
    left: calc(50% - 32.5%);
    bottom: 0;
    transition: all .4s;
  }

  :hover {
    background: rgba(0, 0, 0, 0.12);

    :after {
      opacity: 0;
    }
  }
`

const Avatar = styled.div`
  width: 54px;
  height: 50px;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`

const Preview = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  width: calc(100% - 15% - 50px);
  padding-top: 7px;
`

const Title = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`
