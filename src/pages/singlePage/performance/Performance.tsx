import Client from './components/client'
import Progress from './components/progress'
import styled from 'styled-components'
const ProgressCardd = styled.div`
background-color:#ffcc80;
margin-bottom:1.8rem;
margin-right:0.5rem;
margin-left:-0.5rem;
  border-radius: 30px;
  min-width:32rem;
  display:flex;
  padding-right:1.8rem;
   padding-left:0.2rem;
  flex-direction:column;
  height:53.5rem;
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