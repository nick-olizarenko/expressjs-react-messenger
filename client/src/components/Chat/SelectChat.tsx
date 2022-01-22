import styled from 'styled-components'
import NextIcon from '../icons/NextIcon'

export default function SelectChat() {
  return (
    <ChatContainer>
      <Form>
        <Input placeholder='Choose the chat' type='text' />
        <Button><NextIcon /></Button>
      </Form>
      <BackgroundImage src={background}/>
    </ChatContainer>
  )
}

const background = '/message.png'

const ChatContainer = styled.div`
  position: absolute;
  width: 60%;
  height: 1048px;
  right: 50px;
  top: 100px;
  background: linear-gradient(
    180deg
    ,rgba(151,160,251,0.1) 0%,rgba(152,160,249,0.1) 60.42%,rgba(152,160,250,0.0768717) 63.02%,rgba(152,160,250,0.0535319) 67.71%,rgba(152,160,249,0) 100%);
  border-radius: 68px;
`

const BackgroundImage = styled.img`
  width: 40%;
  position: absolute;
  top: 300px;
  left: 190px;
`

const Form = styled.form`
  position: relative;
  top: 170px;
  width: 300px;
  margin: 0 auto;
`

const Input = styled.input`
  width: calc(100% - 71px);
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
  text-align: left;
  font-size: 20px;
  color: #7976d9;
  padding: 15px 40px 15px 25px;
  border-radius: 50px;
  outline: none;
  background-color: rgba(152, 160, 249, 0.28);
  border: 3px solid transparent;

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
