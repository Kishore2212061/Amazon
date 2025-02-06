import styled from "styled-components";
import Message from "./components/message";
import Stats from "./components/statsContainer";
import Title from "./components/title";
import Sold from "./components/soldItems";
import Performance from "../performance/Performance";
const Dashboard = () => {
  return (
    <Container>
      <InsideContainer>
        <Message></Message>
        <Stats></Stats>
        <Title></Title>
        <Sold></Sold>
      </InsideContainer>
      <Performance></Performance>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  border-radius: 30px;
  background-color: white;
  margin-left: -4rem;
  padding: 1.5rem;
  height: 53rem;
  @media (max-width: 1080px) {
    flex-direction: column;
    margin-left: 0.3%;
    height: 100%;
  }
`;
const InsideContainer = styled.div`
  @media (min-width: 1081px) {
    width: 35rem;
    height: 50rem;
  }
`;
