import styled from 'styled-components'

const background = '/background.png'

const Container = styled.div`
  position: absolute;
  width: 1000px;
  height: 700px;
  left: calc(50% - 500px);
  top: calc(50% - 350px);
  background-image: url(${background});
  border-radius: 25px;
  background-size: contain;
  box-shadow: rgb(99 99 99 / 20%) 0 2px 8px 0;
  background-repeat: no-repeat;
  background-position: bottom;
  background-color: white;
`

export default function Layout({ children }) {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  )
}
