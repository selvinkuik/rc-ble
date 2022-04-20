import { createContext, useState } from 'react'

export const BleContext = createContext()

export const BleProvider = ({ children }) => {
  const [bleDevice, setBleDevice] = useState()
  const [bleCharacteristic1, setBleCharacteristic1] = useState()
  const [bleCharacteristic2, setBleCharacteristic2] = useState()
  console.log(setBleCharacteristic1, setBleCharacteristic2)

  return (
    <BleContext.Provider
      value={{
        bleDevice,
        setBleDevice,
        bleCharacteristic1,
        setBleCharacteristic1,
        bleCharacteristic2,
        setBleCharacteristic2,
      }}>
      {children}
    </BleContext.Provider>
  )
}
