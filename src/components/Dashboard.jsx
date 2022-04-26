import styled from 'styled-components'

const StyledDashboard = styled.div`
  align-items: center;
  display: flex;
  margin-top: 20px;
`

const Label = styled.label`
  display: inline-block;
  margin: 0 10px;
  min-width: 70px;
  text-align: right;
`

export const Dashboard = ({ label, children }) => {
  return (
    <StyledDashboard>
      <Label>{label}</Label>
      {children}
    </StyledDashboard>
  )
}
