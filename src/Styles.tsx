import styled from "styled-components";

export const Container = styled.div`
display:flex;
background-color: wheat;
padding:2rem;
border-radius:20px;
justify-content:center;
      @media (max-width: 1080px) { 
    flex-direction: column;
  }
`;
