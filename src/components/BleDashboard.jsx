import { useContext } from 'react'
import { BleContext, ConnectBleButton, Dashboard, Panel } from './'

export const BleDashboard = () => {
  const { bleDevice } = useContext(BleContext)

  return (
    <Dashboard label="BLE">
      <Panel>{bleDevice ? bleDevice.name : 'Not connected'}</Panel>
      <ConnectBleButton />
    </Dashboard>
  )
}
