import Client from './components/client/Client'
import Progress from './components/progress/Progress'
import styled from 'styled-components'
const ProgressCardd = styled.div`
background-color:#ffcc80;
margin-bottom:0.5rem;
margin-right:0.5rem;
  border-radius: 30px;
  min-width:32rem;
  display:flex;
  padding-right:0.8rem;
  flex-direction:column;
`;
const H6 = styled.h4`
margin-left:2rem;
margin-top:0.3rem;
`

const Performance=()=> {
  return (
    <ProgressCardd>
      <Client></Client>
      <H6>Your Progress</H6>
      <Progress></Progress>
    </ProgressCardd>
  )
}

export default Performance