import { useContext } from 'react'
import { useRaf } from 'react-use'
import styled from 'styled-components'
import { Bar, BleContext, GamepadButton, GamepadStick, RcContext } from './'
import { Dashboard } from './Dashboard'

const encoder = new TextEncoder('utf-8')

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`

const Grid = styled.div`
  width: 50%;
`

export const Rc = () => {
  useRaf(8.64e7)
  const { bleCharacteristic } = useContext(BleContext)
  const { debouncedLift, setLift } = useContext(RcContext)
  const gamepads = navigator.getGamepads()

  if (gamepads[0] && bleCharacteristic) {
    if (gamepads[0].buttons[5].pressed && debouncedLift < 100) {
      setLift(debouncedLift + 1)
    } else if (gamepads[0].buttons[4].pressed && debouncedLift > 0) {
      setLift(debouncedLift - 1)
    }

    const liftEsc = debouncedLift * 10 + 1000
    const throttleEsc = Math.abs(Math.round(gamepads[0].axes[1] * 1000)) + 1000
    const rudderServo = Math.round(gamepads[0].axes[2] * 90) + 90

    bleCharacteristic.writeValueWithoutResponse(
      encoder.encode(`${liftEsc},${throttleEsc},${rudderServo}`),
    )
  }

  return (
    <>
      <Dashboard label="Lift">
        <Container>
          <GamepadButton gamepad={gamepads[0]} button={4} />
          <Bar value={debouncedLift} />
          <GamepadButton gamepad={gamepads[0]} button={5} />
        </Container>
      </Dashboard>
      <Container>
        <Grid>
          <Dashboard label="Throttle">
            <GamepadStick gamepad={gamepads[0]} yAxis={1} />
          </Dashboard>
        </Grid>
        <Grid>
          <Dashboard label="Direction">
            <GamepadStick gamepad={gamepads[0]} xAxis={2} />
          </Dashboard>
        </Grid>
      </Container>
    </>
  )
}
