import { useContext } from 'react'
import { useRaf } from 'react-use'
import { BleContext } from './'

export const Sandbox = () => {
  useRaf(8.64e7)
  const { bleCharacteristic1, bleCharacteristic2 } = useContext(BleContext)
  const gamepads = navigator.getGamepads()

  if (gamepads.length && gamepads[0] && bleCharacteristic1 && bleCharacteristic2) {
    if (gamepads[0].axes[0] >= 0) {
      bleCharacteristic1.writeValueWithResponse(Uint8Array.of(gamepads[0].axes[0] * 255))
    } else if (gamepads[0].axes[0] < 0) {
      bleCharacteristic2.writeValueWithResponse(Uint8Array.of(Math.abs(gamepads[0].axes[0]) * 255))
    }

    return <div>{gamepads[0].axes[0]}</div>
  }
}
