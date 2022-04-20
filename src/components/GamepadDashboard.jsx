import { useContext } from 'react'
import { GamepadContext, Panel } from './'

export const GamepadDashboard = () => {
  const { gamepadDevice } = useContext(GamepadContext)

  return <Panel>{gamepadDevice ? `${gamepadDevice.id} connected` : 'Gamepad not connected'}</Panel>
}
