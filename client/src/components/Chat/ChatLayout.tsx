import styled from 'styled-components'

import { User } from '../../../../types'
import Header from '../Header'
import ChatsList from './ChatsList/ChatsList'
import CreateChat from './CreateChat/CreateChat'
import SelectChat from './SelectChat'
import { useRouter } from 'next/router'
import ChatContainer from './ChatContainer'
import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

interface Props {
  user: User
}

export default function ChatLayout ({ user }: Props) {
  const router = useRouter()
  const [socket, setSocket] = useState<Socket>()
  const [connectedChats, setConnectedChats] = useState<number[]>([])

  useEffect(() => {
    const newSocket = io(`https://tequiladev.space`)
    setSocket(newSocket)
  }, [setSocket])

  const onNewChat = (chatId: number) => {
    socket.emit('joinChat', chatId)
    setConnectedChats([...connectedChats, chatId])
    router.push({ query: { chatId } })
  }

  return (
    <ChatLayoutWrapper>
      <Header user={user} />
      <ChatsList socket={socket} userId={user.id} onConnectedChats={(chats) => setConnectedChats(chats)} />
      <ContentWrapper>
        {!router.query.chatId && <SelectChat />}
        {router.query.chatId === 'new' &&
        <CreateChat userId={user.id} onNewChat={(chatId: number) => onNewChat(chatId)} />}
        {router.query.chatId && socket && connectedChats.includes(Number(router.query.chatId)) && (
          <ChatContainer socket={socket} user={user} />
        )}
      </ContentWrapper>
    </ChatLayoutWrapper>
  )
}

const ChatLayoutWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  float: left;
`

const ContentWrapper = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-flow: column;
  box-shadow: 4px 0 7px -2px #e5e5e5;
`
