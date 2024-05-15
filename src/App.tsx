import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import styled from "styled-components"

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`

function App() {
  return (
    <StyledApp>
      <Header />
      <Outlet />
    </StyledApp>
  )
}

export default App
