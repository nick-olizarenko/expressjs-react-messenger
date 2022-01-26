import styled from 'styled-components'

import SearchIcon from '../../icons/SearchIcon'
import ChatListItem from './ChatListItem'
import { ChatPreview } from '../../../../../types'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'

interface Props {
  userId: number
}

export default function ChatsList({ userId }: Props) {
  const chats: ChatPreview[] = [
    {
      id: 1,
      title: 'Super Dooper',
      lastMessage: { sender: {id: 1, nickname: 'Nick'}, text: 'Wow! Incredible!', date: '22:44' }
    },
    {
      id: 2,
      title: 'Vladyslav',
      lastMessage: { sender: {id: 1, nickname: 'Nick'}, text: 'LMAO! Cool!', date: '18:33' }
    }
  ]
  const [search, setSearch] = useState<string>()
  const filteredChats = useMemo(() => {
    if (!search) {
      return chats
    }

    const searchString = search.toLowerCase()

    return chats.filter(chat => chat.title.toLowerCase().includes(searchString) || chat.lastMessage.text.toLowerCase().includes(searchString))
  }, [search, chats])

  const router = useRouter()
  const onCreateChat = (userId: number) => {
    router.push({ query: { chatId: "1" } })
  }

  return (
    <ChatsContainer>
      <Search>
        <Form>
          <Input placeholder='Search...' type='text' onChange={e => setSearch(e.target.value)} />
          <Button><SearchIcon /></Button>
        </Form>
      </Search>
      <ChatsListWrapper>
        {filteredChats.map(chat => (<ChatListItem chat={chat} key={chat.id} {...chat}
                                                  onClick={(userId) => onCreateChat(userId)} />))}
      </ChatsListWrapper>
    </ChatsContainer>
  )
}

const Search = styled.div`
  border-bottom: solid 2px #E5E5E5;
  box-shadow: 0 2px 4px #E5E5E5;
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
  color: #6C6C6C;

  ::placeholder {
    color: #6C6C6C;
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
    opacity: .7;
  }
`

const ChatsContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-flow: column;
  padding: 4px 0;
  border-right: solid 2px #E5E5E5;
  box-shadow: 4px 0 7px -2px #E5E5E5;
`

const ChatsListWrapper = styled.div``
