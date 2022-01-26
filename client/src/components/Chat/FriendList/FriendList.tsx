import styled from 'styled-components'

import FriendListItem from './FriendListItem'
import { User } from '../../../../../types'
import { useState } from 'react'
import { useRouter } from 'next/router'

interface Props {
  userId: number
}

export default function FriendList({ userId }: Props) {
  const users: User[] = [
    {
      id: 1,
      nickname: 'Super Dooper'
    },
    {
      id: 2,
      nickname: 'Vladyslav'
    }
  ]
  const [memberIds, setMemberIds] = useState<number[]>([])
  const [groupName, setGroupName] = useState<string | undefined>()

  const toggleMemberInList = (userId: number) => {
    if (memberIds.includes(userId)) {
      setMemberIds(memberIds.filter(memberId => memberId !== userId))
    } else {
      setMemberIds([...memberIds, userId])
    }
  }

  const router = useRouter()
  const onCreateChat = () => {
    router.push({ query: { chatId: "1" } })
  }

  return (
    <FriendsListContainer>
      <h5>Choose friends:</h5>
      {memberIds.length >= 2 &&
      <Input placeholder='Input group name...' onChange={(e) => setGroupName(e.target.value)} />}
      <FriendListWrapper>
        {users.map(user => (
          <FriendListItem key={user.id} user={user} isSelected={memberIds.includes(user.id)}
                          onClick={(userId) => toggleMemberInList(userId)} />))}
      </FriendListWrapper>

      <Button>
        <button onClick={() => onCreateChat()} disabled={!memberIds.length || (memberIds.length > 1 && !groupName)}>
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
const Input = styled.input`
  width: calc(100% - 69px);
  text-align: left;
  font-size: 20px;
  padding: 15px 40px 15px 25px;
  margin-bottom: 10px;
  color: #6C6C6C;

  ::placeholder {
    color: #6C6C6C;
    font-weight: 400;
    font-size: 15px;
  }`

const Button = styled.div`
  button{
    display: block;
    margin: 40px auto;
    padding: 20px;
    border-radius: 50px;
    border: none;
    outline: none;
    background-color: #7976d9;
    color: white;
  }

  button:disabled{
    color: #ffffff85;
    background-color: #3c36ff73;
  }
`

const FriendListWrapper = styled.div`
  background: #f5f5f5;
`
