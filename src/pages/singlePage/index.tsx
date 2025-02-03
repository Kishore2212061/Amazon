import Links from "./links/Links"
import styled from "styled-components";
import Dashboard from "./dashboard/Dashboard";

const Container = styled.div`
display:flex;
background-color: wheat;
padding:2rem;
border-radius:20px;
justify-content:center;
      @media (max-width: 1080px) { 
    flex-direction: column;
  height:100%;
  } 
`;

const Index = () => {
  return (
    <Container>
      <Links></Links>
      <Dashboard>
      </Dashboard>
    </Container>
  )
}

export default Index;
