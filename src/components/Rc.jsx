import { useContext, useState } from 'react'
import styled from 'styled-components'
import { useAnimationFrame } from '../hooks'
import { Bar, BleContext, GamepadButton, GamepadStick } from './'
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
  const { bleCharacteristic } = useContext(BleContext)
  const [gamepads, setGamepads] = useState([])
  const [lift, setLift] = useState(0)
  let liftEsc = null
  let throttleEsc = null
  let rudderServo = null

  useAnimationFrame(() => {
    const gamepads = navigator.getGamepads()
    setGamepads(gamepads)

    if (gamepads[0]) {
      if (gamepads[0].buttons[5].pressed) {
        setLift((previousLift) => (previousLift < 100 ? previousLift + 1 : previousLift))
      } else if (gamepads[0].buttons[4].pressed) {
        setLift((previousLift) => (previousLift > 0 ? previousLift - 1 : previousLift))
      }
    }
  })

  if (gamepads[0] && bleCharacteristic) {
    liftEsc = lift * 6 + 1200
    throttleEsc = gamepads[0].axes[1] < 0 ? -Math.round(gamepads[0].axes[1] * 600) + 1200 : 1200
    rudderServo = Math.round(gamepads[0].axes[2] * 80) + 90

    // console.log(`${liftEsc},${throttleEsc},${rudderServo}`)
    bleCharacteristic.writeValueWithoutResponse(
      encoder.encode(`${liftEsc},${throttleEsc},${rudderServo}`),
    )
  }

  return (
    <>
      <Dashboard label="Lift">
        <Container>
          <GamepadButton gamepad={gamepads[0]} button={4} />
          <Bar value={lift}>{liftEsc}</Bar>
          <GamepadButton gamepad={gamepads[0]} button={5} />
        </Container>
      </Dashboard>
      <Container>
        <Grid>
          <Dashboard label="Throttle">
            <GamepadStick gamepad={gamepads[0]} yAxis={1} yMax={0}>
              {throttleEsc}
            </GamepadStick>
          </Dashboard>
        </Grid>
        <Grid>
          <Dashboard label="Rudder">
            <GamepadStick gamepad={gamepads[0]} xAxis={2}>
              {rudderServo}
            </GamepadStick>
          </Dashboard>
        </Grid>
      </Container>
    </>
  )
}
