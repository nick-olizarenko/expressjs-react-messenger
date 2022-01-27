import styled from 'styled-components'

import SearchIcon from '../../icons/SearchIcon'
import ChatListItem from './ChatListItem'
import { ChatPreview } from '../../../../../types'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Axios from 'axios'
import { Socket } from 'socket.io-client'

interface Props {
  socket: Socket
  userId: number
  onConnectedChats: (chats: number[]) => void
}

export default function ChatsList({ socket, userId, onConnectedChats }: Props) {
  const [forceUpdateKey, forceChatUpdate] = useState<number>(0)
  const [chats, setChats] = useState<ChatPreview[]>()
  const router = useRouter()
  const [search, setSearch] = useState<string>()
  const [connectedChats, setConnectedChats] = useState<number[]>([])
  const selectedChatId: string | undefined = router.query.chatId as string

  useEffect(() => {
    async function getChats() {
      try {
        const { data } = await Axios.get(`/api/user/${userId}/chats`)

        setChats(data.chats)
      } catch (err) {
        console.error('Error loading chat', err)
      }
    }

    getChats()
  }, [])

  useEffect(() => {
    const _chats = chats
    if (_chats && _chats.length) {
      for (const _chat of _chats) {
        if (!connectedChats.includes(_chat.id)) {
          socket.emit('joinChat', _chat.id)
          setConnectedChats([...connectedChats, _chat.id])
        }
      }

      socket.on('newMessage', (data) => {
        const chatIndex = _chats.findIndex((chat) => chat.id === data.chatId)

        if (chatIndex > -1) {
          _chats[chatIndex].lastMessage = data.message
          setChats(_chats)
          forceChatUpdate(forceUpdateKey + 1)
        }
      })
    }
  }, [socket, chats, connectedChats])

  useEffect(() => {
    onConnectedChats(connectedChats)
  }, [connectedChats])

  const filteredChats = useMemo(() => {
    if (chats) {
      const searchString = (search || '').toLowerCase()

      return chats
        .filter(
          (chat) =>
            chat.lastMessage &&
            chat.lastMessage.text &&
            (chat.title.toLowerCase().includes(searchString) ||
              chat.lastMessage.text.toLowerCase().includes(searchString))
        )
        .sort((a, b) => new Date(b.lastMessage.date).getTime() - new Date(a.lastMessage.date).getTime())
    }
  }, [search, chats, forceUpdateKey])

  const onSelectChat = (chatId: number) => {
    router.push({ query: { chatId: chatId.toString() } })
  }

  if (!chats) {
    return null
  }

  return (
    <ChatsContainer>
      <Search>
        <Form>
          <Input placeholder="Search..." type="text" onChange={(e) => setSearch(e.target.value)} />
          <Button>
            <SearchIcon />
          </Button>
        </Form>
      </Search>
      <ChatsListWrapper>
        {filteredChats.map((chat) => (
          <ChatListItem
            chat={chat}
            isSelected={selectedChatId === chat.id.toString()}
            key={chat.id + chat.lastMessage.text}
            onClick={(userId) => onSelectChat(userId)}
          />
        ))}
      </ChatsListWrapper>
    </ChatsContainer>
  )
}

const Search = styled.div`
  border-bottom: solid 2px #e5e5e5;
  box-shadow: 0 2px 4px #e5e5e5;
`

const Form = styled.form`
  position: relative;
  margin: 0 auto;
`

const Input = styled.input`
  width: calc(100% - 74px);
  text-align: left;
  font-size: 20px;
  padding: 30px 40px 30px 25px;
  outline: none;
  border: none;
  color: #6c6c6c;

  ::placeholder {
    color: #6c6c6c;
    font-weight: 400;
    font-size: 15px;
  }
`

const Button = styled.button`
  position: absolute;
  border: none;
  cursor: pointer;
  outline: none;
  background: transparent;
  top: 35px;
  font-weight: bold;
  right: 0;
  padding: 0;

  :hover {
    opacity: 0.7;
  }
`

const ChatsContainer = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-flow: column;
  padding: 4px 0;
  border-right: solid 2px #e5e5e5;
  box-shadow: 4px 0 7px -2px #e5e5e5;
`

const ChatsListWrapper = styled.div``
