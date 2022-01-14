import styled from 'styled-components'

const Container = styled.div`
  width: 800px;
  background-color: blue;
`

export default function Layout({ children }) {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  )
}
