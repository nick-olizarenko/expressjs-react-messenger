import { useCallback, useState } from 'react'

import { User } from '../types/User'
import WelcomeLayout from '../components/WelcomeLayout'
import ChatLayout from '../components/Chat/ChatLayout'

export default function Index () {
  const [user, setUser] = useState<undefined | User>()
  const [screen, setScreen] = useState<'welcome' | 'chat'>('welcome')

  const onWelcomeNext = useCallback((user: any) => {
    setUser(user)
    setScreen('chat')
  }, [])

  return (
    <>
      {screen === 'welcome' && <WelcomeLayout onNext={(user) => onWelcomeNext(user)} />}
      {screen === 'chat' && user && <ChatLayout user={user}/>}
    </>
  )
}
