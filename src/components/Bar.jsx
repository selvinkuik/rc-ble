import styled from 'styled-components'

const StyledBar = styled.span`
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  color: #2e2e2e;
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
`

export const Bar = ({ value, ...props }) => {
  return (
    <StyledBar {...props}>
      <Fill width={value} />
    </StyledBar>
  )
}
