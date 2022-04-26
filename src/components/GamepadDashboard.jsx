import { useContext } from 'react'
import { Dashboard, GamepadContext, Panel } from './'

export const GamepadDashboard = () => {
  const { gamepadDevice } = useContext(GamepadContext)

  return (
    <Dashboard label="Gamepad">
      <Panel>{gamepadDevice ? gamepadDevice.id : 'Not connected'}</Panel>
    </Dashboard>
  )
}
