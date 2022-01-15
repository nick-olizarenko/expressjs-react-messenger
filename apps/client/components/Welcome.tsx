import styled from 'styled-components'
import NextIcon from './icons/NextIcon'

const TitleStyles = styled.h1`
  color: #2D1F63;
  font-size: 60px;
  font-weight: 600;
  text-align: center;
`

const Form = styled.form`
  position: relative;
  width: 440px;
  margin: 0 auto;
`

const Input = styled.input`
  display: flex;
  width: calc(100% - 15px);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  text-align: left;
  font-size: 20px;
  color: white;
  border: none;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  border-radius: 50px;
  outline: none;
  background-color: rgba(152, 160, 249, 0.28);

  ::placeholder {
    color: white;
    font-weight: 400;
  }
`

const Button = styled.button`
  position: absolute;
  border: none;
  cursor: pointer;
  outline: none;
  background: transparent;
  color: white;
  border-radius: 3px;
  top: 10px;
  right: 15px;
  padding: 0;

  :hover {
    color: #d3d2d2;
  }
`

export default function Welcome() {
  return (
    <div>
      <TitleStyles>Join us to chat!</TitleStyles>
      <Form>
        <Input placeholder='Whats your name?' type='text' />
        <Button><NextIcon /></Button>
      </Form>
    </div>
  )
}
