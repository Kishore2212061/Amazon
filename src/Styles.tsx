import styled from "styled-components";

export const Container = styled.div`
display:flex;
background-color: wheat;
padding:2rem;
border-radius:20px;
justify-content:center;
 border:5px solid black;
      @media (max-width: 768px) { 
    flex-direction: column;
  }
`;
