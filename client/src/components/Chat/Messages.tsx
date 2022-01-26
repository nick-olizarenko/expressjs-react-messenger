import styled from 'styled-components'
import NextIcon from '../icons/NextIcon'
import { User } from '../../../../types'

interface Props {
  user: User
}

export default function Messages({ user }: Props) {
  const messages = [
    {
      id: 1, text: 'LMAO! Cool!scsnwdwjndjnwdnj', createdAt: '18:33', user: { id: 1, name: 'Nick' }
    },
    {
      id: 2, text: 'LMAO! Cool!scsnwdwjndjnwdnj', createdAt: '18:33', user: { id: 1, name: 'Nick' }
    },
    {
      id: 3, text: 'LMAO! dadasda!scsnwdwjndjnwdnj', createdAt: '18:33', user: { id: 3, name: 'Vlad' }
    },
    {
      id: 4, text: 'LMAO! Cool!scsnwdwjndjnwdnj', createdAt: '18:33', user: { id: 1, name: 'Nick' }
    },
    {
      id: 4, text: 'LMAO! Cool!scsnwdwjndjnwdnj', createdAt: '18:33', user: { id: 1, name: 'Nick' }
    },
    {
      id: 3, text: 'LMAO! dadasda!scsnwdwjndjnwdnj', createdAt: '18:33', user: { id: 3, name: 'Vlad' }
    },
    {
      id: 3, text: 'LMAO! dadasda!scsnwdwjndjnwdnj', createdAt: '18:33', user: { id: 3, name: 'Vlad' }
    }
  ]

  // const messageFriend = messages.find((friend) => friend.user.id === 1)

  // const myMessage = messages.find((friend) => friend.user.id === 2)

  return (
    <ChatContainer>
      <HeaderChat><h2>Nick</h2></HeaderChat>
      <Chat>
        <ChatItem>
          <ChatMessages>
            {messages?.map((message: any) => (
              <ChatMessage key={message.user.name} isMine={user.id === message.user.id}>
                <ChatMessageContent isMine={user.id === message.user.id}>
                  <Title isMine={user.id === message.user.id}>
                    {message.user.name}
                  </Title>
                  {message.text}
                </ChatMessageContent>
              </ChatMessage>
            ))}
          </ChatMessages>
        </ChatItem>
      </Chat>
      <SendMessage>
        <Input placeholder='Your message' type='text' />
        <Button><NextIcon /></Button>
      </SendMessage>
    </ChatContainer>
  )
}

const ChatItem = styled.div`
  display: flex;
  align-items: flex-start;
`

const HeaderChat = styled.div`
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid;

  h2{
    margin: 0;
  }
`

const ChatMessages = styled.div`
  flex: auto;
`

const ChatMessage = styled.div<{ isMine: User }>`
  display: flex;
  align-items: center;
  margin: 10px 10px 10px 0;
  ${props => props.isMine ? 'flex-direction: row-reverse; margin: 10px 0 10px 10px;' : ''}
`

const Title = styled.span<{ isMine: User}>`
  display: flex;
  margin-bottom: 10px;
  text-decoration: underline;
  text-underline-position: under;
  font-weight: bold;
  ${props => props.isMine ? 'flex-direction: row-reverse; ' : ''}
`

const ChatMessageContent = styled.div<{ isMine: User}>`
  padding: 20px 30px 20px 10px;
  display: inline-block;
  border-radius: 0 50px 50px 0;
  background: rgb(155,154,173);
  background: linear-gradient(
    90deg
    ,rgba(155,154,173,1) 0%,rgba(166,166,191,1) 36%,rgba(180,187,221,0.7917542016806722) 98%);
  ${props => props.isMine ? 'background: linear-gradient(90deg, rgba(125, 132, 213, 0.768717) 1.95%, rgba(152, 160, 250, 0) 124.43%); padding: 20px 10px 20px 30px;  border-radius: 50px 0 0 50px;' : ''}
`

const SendMessage = styled.div`
  position: relative;
  width: 435px;
  margin: 0 auto;
`

const Input = styled.input`
  display: block;
  border: 1px solid ;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  text-align: left;
  font-size: 20px;
  padding-left: 20px;
  outline: none;
  color: #7976d9;

  ::placeholder {
    color: #7976d9;
    font-weight: 400;
  }
`

const Button = styled.button`
  position: absolute;
  border: none;
  cursor: pointer;
  outline: none;
  background: transparent;
  color: #7976d9;
  border-radius: 3px;
  top: 9px;
  right: -10px;
  padding: 0;

  :hover {
    opacity: .7;
  }
`

const ChatContainer = styled.div`
  position: absolute;
  width: 60%;
  height: 100%;
  right: 50px;
  top: 100px;
  background: linear-gradient(180deg, rgba(151, 160, 251, 0.1) 0%, rgba(152, 160, 249, 0.1) 60.42%, rgba(152, 160, 250, 0.0768717) 63.02%, rgba(152, 160, 250, 0.0535319) 67.71%, rgba(152, 160, 249, 0) 100%);
  border-radius: 35px;
`

const Chat = styled.form`
  position: relative;
  width: 100%;
  height: 66%;
  overflow: auto;
  margin-bottom: 20px;

  ::-webkit-scrollbar {
    width: 0;
  }
`
