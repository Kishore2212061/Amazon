import styled from 'styled-components'
import Message from './components/message/Message'
import Stats from './components/statsContainer/Stats'
import Title from './components/title/Title'
import Sold from './components/soldItems/Sold'
import Performance from '../performance/Performance'

const Container = styled.div`
  display: flex;
  border-radius: 30px;
  background-color: white;
  margin-left:-3rem;
  padding: 1.5rem;
  @media (max-width:1080px) { 
    flex-direction: column;
    margin-left:0.3%;
  }
`;
const Inside = styled.div`
      margin-right:2rem;
      @media (min-width: 1081px) { 
      width:35rem;
      height:55rem;
}
  `;


const Dashboard = () => {
  return (
    <Container>
      <Inside>
        <Message></Message>
        <Stats></Stats>
        <Title></Title>
        <Sold></Sold>
      </Inside>
      <Performance></Performance>
    </Container>
  )
}

export default Dashboard
