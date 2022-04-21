import { createContext, useState } from 'react'
import { useEvent } from 'react-use'

export const GamepadContext = createContext()

export const GamepadProvider = ({ children }) => {
  const [gamepadDevice, setGamepadDevice] = useState()

  useEvent('gamepadconnected', (event) => {
    setGamepadDevice(event.gamepad)
  })

  useEvent('gamepaddisconnected', () => {
    setGamepadDevice()
  })

  return <GamepadContext.Provider value={{ gamepadDevice }}>{children}</GamepadContext.Provider>
}
