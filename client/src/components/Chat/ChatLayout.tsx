import styled from 'styled-components'

import { User } from '../../types/User'
import Header from '../Header'
import ChatsList from './ChatsList/ChatsList'

interface Props {
  user: User
}

export default function ChatLayout({ user }: Props) {
  return (
    <ChatContainer>
      <Header user={user} />
      <ChatsList userId={user.id} />
    </ChatContainer>
  )
}

const ChatContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  float: left;
`
