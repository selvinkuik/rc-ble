import { useContext } from 'react'
import { useRaf } from 'react-use'
import styled from 'styled-components'
import { BleContext, Joystick } from './'

const encoder = new TextEncoder('utf-8')

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px auto;
  max-width: 400px;
`

export const Sandbox = () => {
  useRaf(8.64e7)
  const { bleCharacteristic1 } = useContext(BleContext)
  const gamepads = navigator.getGamepads()

  if (gamepads[0] && bleCharacteristic1) {
    bleCharacteristic1.writeValueWithoutResponse(
      encoder.encode(
        Math.abs(Math.round(gamepads[0].axes[1] * 1000)) +
          1000 +
          ',' +
          Math.abs(Math.round(gamepads[0].axes[2] * 180)),
      ),
    )
  }

  return (
    <Container>
      <Joystick gamepad={gamepads[0]} yAxis={1} />
      <Joystick gamepad={gamepads[0]} xAxis={2} />
    </Container>
  )
}
