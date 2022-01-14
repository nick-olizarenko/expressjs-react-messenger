import styled from 'styled-components'
import Auth from './Auth'

const Wrapper = styled.div`
  text-align: center;
`

const TitleStyles = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`

export default function Title() {
  return (
    <Wrapper>
      <TitleStyles>Title</TitleStyles>
      <Auth />
    </Wrapper>
  )
}
