import styled from 'styled-components'
import { useCallback, useEffect, useState } from 'react'
import Axios from 'axios'
import { useRouter } from 'next/router'
import { Socket } from 'socket.io-client'

import { Chat as IChat, User } from '../../../../types'
import InputForm from '../InputForm'

interface Props {
  socket: Socket
  user: User
}

export default function ChatContainer ({ socket, user }: Props) {
  const router = useRouter()
  const [chat, setChat] = useState<IChat>()
  const [messageText, setMessageText] = useState<string>()

  useEffect(() => {
    async function getChat () {
      try {
        const { data } = await Axios.get(`/api/chat/${router.query.chatId}`)

        setChat(data.chat)
      } catch (err) {
        console.error('Error loading chat', err)
      }
    }

    getChat()
  }, [router.query.chatId])

  useEffect(() => {
    const _chat = chat
    if (_chat) {
      socket.on('newMessagePrivate', (data) => {
        chat.messages.push(data.message)
        setChat(_chat)
      })
    }
  }, [socket, chat])

  const onSubmitMessage = useCallback(
    async (event: Event) => {
      event.preventDefault()

      try {
        if (!messageText || !messageText.length) {
          return
        }

        await Axios.post(`/api/chat/${chat.id}/message`, { userId: user.id, text: messageText })
        setMessageText('')
      } catch (err) {
        console.error('Error posting message', err)
      }
    },
    [messageText, router.query.chatId, user]
  )

  if (!chat) {
    return null
  }

  return (
    <ChatWrapper>
      <HeaderChat>
        <h2>{chat.title}</h2>
      </HeaderChat>
      <ChatMessagesWrapper>
        <ChatMessages>
          {chat.messages.map((message) => (
            <ChatMessage key={chat.id + '_' + message.id} isMine={user.id === message.sender.id}>
              <ChatMessageContent isMine={user.id === message.sender.id}>
                <Title isMine={user.id === message.sender.id}>{message.sender.nickname}</Title>
                {message.text}
              </ChatMessageContent>
            </ChatMessage>
          ))}
        </ChatMessages>
      </ChatMessagesWrapper>
      <InputForm
        placeholder='Enter your message...'
        value={messageText}
        onChange={(value) => setMessageText(value)}
        onSubmit={(event) => onSubmitMessage(event)}
      />
    </ChatWrapper>
  )
}

const HeaderChat = styled.div`
  padding: 10px 0;
  padding-left: 20px;
  border-bottom: 2px solid #e0e0e0;

  h2 {
    margin: 0;
  }
`

const ChatMessages = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column-reverse;
  flex-direction: column-reverse;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`

const ChatMessage = styled.div<{ isMine: User }>`
  display: flex;
  align-items: center;
  transform: rotate(180deg);
  direction: ltr;
  margin: 10px 0;
  ${(props) => (props.isMine ? 'flex-direction: row-reverse;' : '')}
`

const Title = styled.span<{ isMine: User }>`
  display: flex;
  margin-bottom: 10px;
  text-decoration: underline;
  text-underline-position: under;
  font-weight: bold;
  ${(props) => (props.isMine ? 'flex-direction: row-reverse; ' : '')}
`

const ChatMessageContent = styled.div<{ isMine: User }>`
  min-width: 120px;
  display: inline-block;
  font-family: Raleway, serif;
  font-style: normal;
  background: linear-gradient(180deg,
  rgba(151, 160, 251, 0.1) 0%,
  rgba(152, 160, 249, 0.1) 60.42%,
  rgba(152, 160, 250, 0.0768717) 63.02%,
  rgba(152, 160, 250, 0.0535319) 67.71%,
  rgba(152, 160, 249, 0) 100%);
  ${(props) =>
    props.isMine
      ? `
    background: linear-gradient(90deg, rgba(125, 132, 213, 0.768717) 1.95%, rgba(152, 160, 250, 0) 124.43%);
    padding: 20px 10px 20px 30px;
    border-radius: 50px 0 0 50px;
    text-align: right;
  `
      : `
    border-radius: 0 50px 50px 0;
    padding: 20px 30px 20px 10px;
  `}
`

const ChatWrapper = styled.div`
  position: absolute;
  width: 65%;
  height: 100%;
  right: 0;
  top: 72px;
  background: linear-gradient(180deg,
  rgba(151, 160, 251, 0.1) 0%,
  rgba(152, 160, 249, 0.1) 60.42%,
  rgba(152, 160, 250, 0.0768717) 63.02%,
  rgba(152, 160, 250, 0.0535319) 67.71%,
  rgba(152, 160, 249, 0) 100%);
`

const ChatMessagesWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  overflow: auto;
  margin-bottom: 20px;
  transform: rotate(180deg);
  direction: rtl;
  border-top: 2px solid #e0e0e0;

  ::-webkit-scrollbar {
    width: 0;
  }
`
