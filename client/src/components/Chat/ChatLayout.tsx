import styled from 'styled-components'

import { User } from '../../../../types'
import Header from '../Header'
import ChatsList from './ChatsList/ChatsList'
import SelectChat from './SelectChat'
import ChatForm from './Messages'
import { useState } from 'react'

interface Props {
  user: User
}
export default function ChatLayout({ user }: Props) {
  const [state, setState] = useState('start')


  return (
    <ChatContainer>
      <Header user={user} />
      <ChatsList userId={user.id} />
      <div>
        {state === 'start' && (
          <SelectChat selectChat={() => setState('select-chat') } />
        )}

        {state === 'select-chat' && <ChatForm />}
      </div>

    </ChatContainer>
  )
}

const ChatContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  float: left;
`
