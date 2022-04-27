import styled from 'styled-components'

const StyledBar = styled.span`
  align-items: center;
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  color: #2e2e2e;
  display: flex;
  font-size: 10px;
  justify-content: center;
  margin-right: 10px;
  padding: 4px 20px;
  position: relative;
  width: 100%;
`

const Fill = styled.div.attrs((props) => ({
  style: {
    width: `${props.width}%`,
  },
}))`
  background-color: #f0003c;
  border-radius: 4px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
`

export const Bar = ({ value, children, ...props }) => {
  return (
    <StyledBar {...props}>
      <Fill width={value} />
      {children}
    </StyledBar>
  )
}
