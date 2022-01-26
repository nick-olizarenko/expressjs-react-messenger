import styled from 'styled-components'

import { User } from '../../../../types'
import Header from '../Header'
import ChatsList from './ChatsList/ChatsList'
import FriendList from './FriendList/FriendList'
import SelectChat from './SelectChat'
import { useRouter } from 'next/router'
import Messages from './Messages'

interface Props {
  user: User
}

export default function ChatLayout({ user }: Props) {
  const { query } = useRouter()

  console.log(query)
  return (
    <ChatContainer>
      <Header user={user} />
      <ChatsList userId={user.id} />
      <ContentWrapper>
        {!query.chatId && (
          <SelectChat />
        )}

        {query.chatId === 'new' && <FriendList userId={user.id}/>}
        {query.chatId === '1' && <Messages user={user}/>}

        {query.chatId !== 'new' && <>chat messages</>}
      </ContentWrapper>
    </ChatContainer>
  )
}

const ChatContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  float: left;
`

const ContentWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-flow: column;
  box-shadow: 4px 0 7px -2px #E5E5E5;
`
