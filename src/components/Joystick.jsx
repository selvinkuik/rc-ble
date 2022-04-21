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
  height: ${(props) => (props.small ? 60 : 100)}px;
  justify-content: center;
  width: ${(props) => (props.small ? 60 : 100)}px;
`

export const Joystick = ({ gamepad, xAxis, yAxis, ...props }) => {
  return (
    <Circle {...props}>
      {gamepad && (
        <Circle
          small
          translateX={xAxis ? gamepad.axes[xAxis] * 20 : 0}
          translateY={yAxis ? gamepad.axes[yAxis] * 20 : 0}
        />
      )}
    </Circle>
  )
}
