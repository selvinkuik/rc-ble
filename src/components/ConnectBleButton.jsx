import { useContext } from 'react'
import { BleContext, Button } from './'

const connectBle = (setBleDevice, setBleCharacteristic1, setBleCharacteristic2) => {
  navigator.bluetooth
    .requestDevice({ filters: [{ services: [process.env.REACT_APP_BLE_SERVICE_ID] }] })
    .then((device) => {
      setBleDevice(device)
      return device.gatt.connect()
    })
    .then((server) => server.getPrimaryService(process.env.REACT_APP_BLE_SERVICE_ID))
    .then((service) => {
      service
        .getCharacteristic(process.env.REACT_APP_BLE_CHARACTERISTIC_ID_1)
        .then((characteristic) => setBleCharacteristic1(characteristic))

      service
        .getCharacteristic(process.env.REACT_APP_BLE_CHARACTERISTIC_ID_2)
        .then((characteristic) => setBleCharacteristic2(characteristic))
    })
}

const disconnectBle = (bleDevice, setBleDevice, setBleCharacteristic1, setBleCharacteristic2) => {
  bleDevice.gatt.disconnect()
  setBleDevice()
  setBleCharacteristic1()
  setBleCharacteristic2()
}

export const ConnectBleButton = () => {
  const { bleDevice, setBleDevice, setBleCharacteristic1, setBleCharacteristic2 } =
    useContext(BleContext)

  if (bleDevice) {
    return (
      <Button
        onClick={() => {
          disconnectBle(bleDevice, setBleDevice, setBleCharacteristic1, setBleCharacteristic2)
        }}>
        Disconnect BLE
      </Button>
    )
  }

  return (
    <Button
      onClick={() => {
        connectBle(setBleDevice, setBleCharacteristic1, setBleCharacteristic2)
      }}>
      Connect BLE
    </Button>
  )
}
