import styled from 'styled-components'

export default function SelectChat() {
  return (
    <ChatContainer>
        <Button>Select chat to start messaging</Button>
      <BackgroundImage src={background}/>
    </ChatContainer>
  )
}

const background = '/message.png'

const ChatContainer = styled.div`
  position: absolute;
  width: 60%;
  height: 100%;
  right: 50px;
  top: 100px;
  background: linear-gradient(180deg, rgba(151, 160, 251, 0.1) 0%, rgba(152, 160, 249, 0.1) 60.42%, rgba(152, 160, 250, 0.0768717) 63.02%, rgba(152, 160, 250, 0.0535319) 67.71%, rgba(152, 160, 249, 0) 100%);
  border-radius: 35px;
`

const BackgroundImage = styled.img`
  width: 40%;
  position: absolute;
  left: 190px;
  bottom: 80px;
`

const Button = styled.button`
  outline: none;
  border: 0;
  background: #7976d9;
  color: #fff;
  margin: 30% auto 0 auto;
  right: 10px;
  padding: 15px;
  font-size: 16px;
  gap: 15px;
  display: flex;
  align-items: center;
  border-radius: 15px;
`
