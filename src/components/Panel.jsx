import styled from 'styled-components'

const StyledPanel = styled.span`
  border: 2px solid #f0f0f0;
  border-radius: 24px;
  color: #2e2e2e;
  margin-right: 10px;
  padding: 4px 20px;
`

export const Panel = ({ children, ...props }) => {
  return <StyledPanel {...props}>{children}</StyledPanel>
}
