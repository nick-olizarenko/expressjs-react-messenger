import { useCallback, useState } from 'react'
import styled from 'styled-components'
import Axios from 'axios'

import { User } from '../../../types'
import InputForm from './InputForm'

interface Props {
  onNext: (user: User) => void
}

export default function WelcomeLayout ({ onNext }: Props) {
  const [nickname, setNickname] = useState<string>()

  const onSubmit = useCallback(async (event: Event) => {
    event.preventDefault()

    try {
      if (!nickname || !nickname.length) {
        return
      }

      const { data } = await Axios.post('/api/user', { nickname })
      onNext(data.user)
    } catch (err) {
      console.error('Error creating user', err)
    }
  }, [onNext, nickname])

  return (
    <WelcomeContainer>
      <Title>Join us to chat!</Title>
      <InputForm placeholder='How we can call you? Name or nickname...' onChange={(value) => setNickname(value)}
                 onSubmit={event => onSubmit(event)} />
    </WelcomeContainer>
  )
}

const background = '/background.png'

const WelcomeContainer = styled.div`
  background-image: url(${background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  background-color: white;
  width: 100%;
  height: 100%;
  float: left;
`

const Title = styled.h1`
  color: #2D1F63;
  font-size: 60px;
  font-weight: 600;
  text-align: center;
  pointer-events: none;
`
