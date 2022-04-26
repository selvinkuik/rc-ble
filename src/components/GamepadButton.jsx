import styled from 'styled-components'

const Button = styled.div.attrs((props) => ({
  style: {
    borderColor: props.pressed ? '#444' : '#f0f0f0',
  },
}))`
  border: 2px solid;
  border-radius: 24px;
  color: #2e2e2e;
  display: inline-block;
  height: 28px;
  margin-right: 10px;
  padding: 4px 20px;
  width: 100px;
`

export const GamepadButton = ({ gamepad, button, ...props }) => {
  return <Button pressed={gamepad && gamepad.buttons[button].pressed} {...props} />
}
