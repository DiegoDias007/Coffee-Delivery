import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import styled from "styled-components"

const StyledApp = styled.div`
  min-height: 100vh;
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
