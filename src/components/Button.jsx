import styled from 'styled-components'

const StyledButton = styled.button`
  background: #a30036;
  border: none;
  border-radius: 24px;
  outline-offset: 2px;
  padding: 0;
`

const Front = styled.div`
  background: #f0003c;
  border-radius: 24px;
  color: white;
  display: block;
  padding: 6px 12px;
  transform: translateY(-3px);

  ${StyledButton}:active & {
    transform: translateY(-1px);
  }
`

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <Front>{children}</Front>
    </StyledButton>
  )
}
