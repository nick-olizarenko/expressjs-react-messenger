import styled from 'styled-components'
import Auth from './Auth'

const Wrapper = styled.div`
  text-align: center;
`

const TitleStyles = styled.h1`
  color: #2D1F63;
  font-size: 95px;
  font-weight: 600;
  text-align: center;
`

export default function Title() {
  return (
    <Wrapper>
      <TitleStyles>Welcome to chat!</TitleStyles>
      <Auth />
    </Wrapper>
  )
}
