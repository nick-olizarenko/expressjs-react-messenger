import styled from 'styled-components'
import NextIcon from './icons/NextIcon'

const Form = styled.form`
  position: relative;
  width: 440px;
  margin: 0 auto;
`

const Input = styled.input`
  font-size: 1.5em;
  text-align: center;
  width: 100%;
  color: white;
  border: none;
  padding: 15px 0;
  border-radius: 50px;
  outline: none;
  background-color: rgba(152, 160, 249, 0.28);;
`

const Button = styled.button`
  position: absolute;
  width: 42px;
  height: 42px;
  border: none;
  cursor: pointer;
  outline: none;
  background: transparent;
  color: white;
  border-radius: 3px;
  top: 10px;
  right: 13px;
`

export default function Auth() {
  return (
    <div>
      <Form>
        <Input placeholder='Whats your name?' type='text' />
        <Button><NextIcon /></Button>
      </Form>
    </div>
  )
}
