import styled from 'styled-components'
import NextIcon from '../icons/NextIcon'


export default function Messages() {
  const messages = [
    {
      id: 1, text: 'LMAO! Cool!scsnwdwjndjnwdnj', createdAt: '18:33', user: { id: 1, name: 'Nick' }
    },
    {
      id: 2, text: 'LMAO! dadasda!scsnwdwjndjnwdnj', createdAt: '18:33', user: { id: 2, name: 'Nick' }
    }
  ]

  // const messageFriend = messages.find((friend) => friend.user.id === 1)
  // const myMessage = messages.find((friend) => friend.user.id === 2)

  return (
    <ChatContainer>
      <Chat>
        {messages?.map((message: any) => (
          <FriendMessage key={message.user}>
            <span>{message.text}</span>
          </FriendMessage>
        ))}
        {messages?.map((message: any) => (
          <YourMessage key={message.user}>
            <span>{message.text}</span>
          </YourMessage>
        ))}
      </Chat>
      <SendMessage>
      <Input placeholder='Your message' type='text'/>
      <Button><NextIcon /></Button>
      </SendMessage>
    </ChatContainer>
  )
}

const SendMessage = styled.div`
  position: relative;
  width: 435px;
  margin: 0 auto;
`

const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  box-shadow: rgb(0 0 0 / 16%) 0 1px 4px;
  text-align: left;
  font-size: 20px;
  color: #7976d9;
}

  ::placeholder {
    color: #7976d9;
    font-weight: 400;
  }

  :focus {
    border: 3px solid #7976d9;
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
  top: 12px;
  right: 10px;
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
  height: 75%;
  overflow: auto;
`

const FriendMessage = styled.div`
  float: left;
  width: max-content;
  margin: 20px 0;
  padding: 20px;
  background: rgb(151, 160, 251);
  background: linear-gradient(90deg, rgba(151, 160, 251, 1) 0%, rgba(216, 218, 247, 1) 62%, rgba(234, 235, 246, 0.8981967787114846) 100%);
  border-radius: 68px;
  display: block;
`

const YourMessage = styled.div`
  float: right;
  width: max-content;
  margin: 20px 0;
  padding: 20px;
  display: block;
  background: rgb(32, 29, 82);
  background: linear-gradient(90deg, rgba(32, 29, 82, 0.850577731092437) 0%, rgba(125, 132, 212, 0.8225665266106442) 89%);
  border-radius: 47.5px;
`
