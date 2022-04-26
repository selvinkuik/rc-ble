import { useContext } from 'react'
import { BleContext, Button } from './'

const connectBle = (setBleDevice, setBleCharacteristic) => {
  navigator.bluetooth
    .requestDevice({ filters: [{ services: [process.env.REACT_APP_BLE_SERVICE_ID] }] })
    .then((device) => {
      setBleDevice(device)
      return device.gatt.connect()
    })
    .then((server) => server.getPrimaryService(process.env.REACT_APP_BLE_SERVICE_ID))
    .then((service) => service.getCharacteristic(process.env.REACT_APP_BLE_CHARACTERISTIC))
    .then((characteristic) => setBleCharacteristic(characteristic))
}

const disconnectBle = (bleDevice, setBleDevice, setBleCharacteristic) => {
  bleDevice.gatt.disconnect()
  setBleDevice()
  setBleCharacteristic()
}

export const ConnectBleButton = () => {
  const { bleDevice, setBleDevice, setBleCharacteristic } = useContext(BleContext)

  if (bleDevice) {
    return (
      <Button
        onClick={() => {
          disconnectBle(bleDevice, setBleDevice, setBleCharacteristic)
        }}>
        Disconnect
      </Button>
    )
  }

  return (
    <Button
      onClick={() => {
        connectBle(setBleDevice, setBleCharacteristic)
      }}>
      Connect
    </Button>
  )
}
