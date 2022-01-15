import styled from 'styled-components'
import NextIcon from './icons/NextIcon'

export default function Welcome () {
  return (
    <WelcomeContainer>
      <TitleStyles>Join us to chat!</TitleStyles>
      <Form>
        <Input placeholder='Whats your name?' type='text' />
        <Button><NextIcon /></Button>
      </Form>
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

const TitleStyles = styled.h1`
  color: #2D1F63;
  font-size: 60px;
  font-weight: 600;
  text-align: center;
  pointer-events: none;
`

const Form = styled.form`
  position: relative;
  width: 435px;
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
  top: 10px;
  right: 10px;
  padding: 0;

  :hover {
    opacity: .7;
  }
`
