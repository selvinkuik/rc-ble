import { createContext, useState } from 'react'

export const BleContext = createContext()

export const BleProvider = ({ children }) => {
  const [bleDevice, setBleDevice] = useState()
  const [bleCharacteristic, setBleCharacteristic] = useState()

  return (
    <BleContext.Provider
      value={{
        bleDevice,
        setBleDevice,
        bleCharacteristic,
        setBleCharacteristic,
      }}>
      {children}
    </BleContext.Provider>
  )
}
