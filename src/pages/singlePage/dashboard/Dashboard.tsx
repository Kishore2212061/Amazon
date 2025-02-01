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
  margin-left:-4rem;
  padding: 1.5rem;
  height:53rem;
  @media (max-width:1080px) { 
    flex-direction: column;
    margin-left:0.3%;
  }
`;
const Inside = styled.div`
    
      @media (min-width: 1081px) { 
      width:35rem;
      height:50rem;
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
