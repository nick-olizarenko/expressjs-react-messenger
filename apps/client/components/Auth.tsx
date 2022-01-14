import styled from 'styled-components'
import NextIcon from './icons/NextIcon'


const Input = styled.input`
  font-size: 1.5em;
  text-align: center;
  color: white;
  border: none;
  border-radius: 20px;
  background-color: rgba(152, 160, 249, 0.28);;
`

const Button = styled.button`
  color: white;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`


export default function Auth() {
  return (
    <div>
      <Input textDafault='Login' type='text' />
      <Button><NextIcon /></Button>
    </div>
  )
}
