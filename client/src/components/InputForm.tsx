import styled from 'styled-components'
import NextIcon from './icons/NextIcon'

interface Props {
  value?: string
  placeholder: string
  onChange: (value: string) => void
  onSubmit: (event: Event) => void
}

export default function InputForm ({ value, placeholder, onChange, onSubmit }: Props) {
  return (
    <FormStyles onSubmit={(event) => onSubmit(event)}>
      <InputStyles value={value} placeholder={placeholder} type='text'
                   onChange={(event) => onChange(event.target.value)} />
      <ButtonStyles><NextIcon /></ButtonStyles>
    </FormStyles>
  )
}

const InputStyles = styled.input`
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

const FormStyles = styled.form`
  position: relative;
  width: 435px;
  margin: 0 auto;
`

const ButtonStyles = styled.button`
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

