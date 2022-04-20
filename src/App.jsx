import styled from 'styled-components'
import {
  BleDashboard,
  BleProvider,
  GamepadDashboard,
  GamepadProvider,
  Reset,
  Sandbox,
} from './components'

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  margin-top: 20px;
  text-align: center;
`

const App = () => {
  return (
    <>
      <Reset />
      <BleProvider>
        <GamepadProvider>
          <Container>
            <GamepadDashboard />
            <BleDashboard />
            <Sandbox />
          </Container>
        </GamepadProvider>
      </BleProvider>
    </>
  )
}

export default App
