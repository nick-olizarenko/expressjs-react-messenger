import { useCallback, useEffect, useState } from 'react'
import Axios from 'axios'

import { User } from '../../../types'
import WelcomeLayout from '../components/WelcomeLayout'
import ChatLayout from '../components/Chat/ChatLayout'

export default function Index () {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [user, setUser] = useState<User | null>(null)
  const [screen, setScreen] = useState<'welcome' | 'chat'>('welcome')

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if(userId) {
      getUser(Number(userId))
    }
  }, [])

  const getUser = async (id: number) => {
    try {
      const { data } = await Axios.get(`/api/user/${id}`)

      setUser(data.user)
      setScreen('chat')
    } catch (err) {
      console.error('Error getting user', err)
    }
  }

  const onUserCreate = useCallback((user: User) => {
    localStorage.setItem('userId', user.id.toString())
    console.log('here')
    setUser(user)
    setScreen('chat')
  }, [])

  return (
    <>
      {screen === 'welcome' && <WelcomeLayout onNext={(user) => onUserCreate(user)} />}
      {screen === 'chat' && user && <ChatLayout user={user} />}
    </>
  )
}
