import { createContext, useState } from 'react'
import { useDebounce } from 'react-use'

export const RcContext = createContext()

export const RcProvider = ({ children }) => {
  const [lift, setLift] = useState(0)
  const [debouncedLift, setDebouncedLift] = useState(0)

  useDebounce(
    () => {
      setDebouncedLift(lift)
    },
    20,
    [lift],
  )

  return (
    <RcContext.Provider
      value={{
        debouncedLift,
        setLift,
      }}>
      {children}
    </RcContext.Provider>
  )
}
