import styled from 'styled-components'

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <>{children}</>
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  position: absolute;
  width: 1000px;
  height: 700px;
  left: calc(50% - 500px);
  top: calc(50% - 350px);
  border-radius: 25px;
  box-shadow: rgb(99 99 99 / 20%) 0 2px 8px 0;
  overflow: hidden;
`
