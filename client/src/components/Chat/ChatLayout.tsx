import styled from 'styled-components'

import { User } from '../../types/User'

interface Props {
  user: User
}

export default function ChatLayout ({ user }: Props) {
  return (
    <ChatContainer>
      {user.name}
    </ChatContainer>
  )
}

const background = '/background.png'

const ChatContainer = styled.div`
  background-image: url(${background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  background-color: white;
  width: 100%;
  height: 100%;
  float: left;
`
