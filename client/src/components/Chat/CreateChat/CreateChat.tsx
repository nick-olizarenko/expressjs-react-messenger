import styled from 'styled-components'
import Axios from 'axios'

import FriendListItem from './FriendListItem'
import { User } from '../../../../../types'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface Props {
  userId: number
  onNewChat: (chatId: number) => void
}

export default function CreateChat ({ userId, onNewChat }: Props) {
  const [users, setUsers] = useState<User[]>([])
  const [type, setType] = useState<string>('direct')
  const [selectedMemberId, setSelectedMemberId] = useState<number>()
  const [title, setTitle] = useState<string | undefined>()

  useEffect(() => {
    async function getUsers () {
      try {
        const { data } = await Axios.get(`/api/users`)

        setUsers(data.users)
      } catch (err) {
        console.error('Error loading users', err)
      }
    }

    getUsers()
  }, [])

  const router = useRouter()
  const onCreateChat = async () => {
    const { data } = await Axios.post('/api/chat', { title, memberIds: [userId, selectedMemberId] })
    onNewChat(data.chat.id)
  }

  return (
    <FriendsListContainer>
      <h5>Chat type:</h5>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value='direct'>Direct message</option>
        <option value='group'>Public Group</option>
      </select>
      {type === 'group' && (
        <>
          <h5>Group name:</h5>
          <input placeholder='InputForm group name...' onChange={(e) => setTitle(e.target.value)} />
        </>
      )}
      {type === 'direct' && (
        <>
          <h5>Choose friend:</h5>
          <FriendListWrapper>
            {users.filter(user => user.id !== userId).map((user) => (
              <FriendListItem
                key={user.id}
                user={user}
                isSelected={selectedMemberId === user.id}
                onClick={(userId) => setSelectedMemberId(userId)}
              />
            ))}
          </FriendListWrapper>
        </>
      )}

      <Button>
        <button onClick={() => onCreateChat()}
                disabled={(type === 'direct' && !selectedMemberId) || (type === 'group' && !title)}>
          Start new chat
        </button>
      </Button>
    </FriendsListContainer>
  )
}

const FriendsListContainer = styled.div`
  position: absolute;
  width: calc(69% - 180px);
  height: 100%;
  right: 0;
  top: 100px;
  padding: 0 90px;
`

const Button = styled.div`
  button {
    display: block;
    margin: 40px auto;
    padding: 20px;
    border-radius: 50px;
    border: none;
    outline: none;
    background-color: #7976d9;
    color: white;
    cursor: pointer;
  }

  button:hover {
    opacity: .9;
  }

  button:disabled {
    color: #ffffff85;
    background-color: #3c36ff73;
  }
`

const FriendListWrapper = styled.div`
  background: #f5f5f5;
  overflow: auto;
  height: 50%;
`
