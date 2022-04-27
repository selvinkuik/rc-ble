import styled from 'styled-components'

const Circle = styled.div.attrs((props) => ({
  style: {
    transform: `translate(${props.translateX || 0}px, ${props.translateY || 0}px)`,
  },
}))`
  align-items: center;
  border: 2px solid #${(props) => (props.small ? '444' : 'f0f0f0')};
  border-radius: 50%;
  display: flex;
  font-size: 10px;
  height: ${(props) => (props.small ? 60 : 100)}px;
  justify-content: center;
  width: ${(props) => (props.small ? 60 : 100)}px;
`

export const GamepadStick = ({ gamepad, xAxis, yAxis, xMax = 1, yMax = 1, children, ...props }) => {
  return (
    <Circle {...props}>
      {gamepad && (
        <Circle
          small
          translateX={xAxis && gamepad.axes[xAxis] <= xMax ? gamepad.axes[xAxis] * 20 : 0}
          translateY={yAxis && gamepad.axes[yAxis] <= yMax ? gamepad.axes[yAxis] * 20 : 0}>
          {children}
        </Circle>
      )}
    </Circle>
  )
}
