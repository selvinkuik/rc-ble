import styled from 'styled-components'
import {
  BleDashboard,
  BleProvider,
  GamepadDashboard,
  GamepadProvider,
  RcProvider,
  Reset,
  Rc,
} from './components'

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  margin: 40px auto;
  max-width: 690px;
`

const App = () => {
  return (
    <>
      <Reset />
      <BleProvider>
        <GamepadProvider>
          <RcProvider>
            <Container>
              <GamepadDashboard />
              <BleDashboard />
              <Rc />
            </Container>
          </RcProvider>
        </GamepadProvider>
      </BleProvider>
    </>
  )
}

export default App
