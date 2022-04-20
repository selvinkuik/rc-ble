import { useContext } from 'react'
import { BleContext, ConnectBleButton, Panel } from './'

export const BleDashboard = () => {
  const { bleDevice } = useContext(BleContext)

  return (
    <>
      <Panel>{bleDevice ? `${bleDevice.name} connected` : 'BLE not connected'}</Panel>
      <ConnectBleButton />
    </>
  )
}
