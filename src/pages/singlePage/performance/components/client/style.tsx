import styled from "styled-components";

export const Title = styled.h2`

padding-left:2rem;
font-size:1.2rem;
display:flex;
`
export const P = styled.p`
margin-left:88%;
margin-top:-7%;
   @media (max-width: 1080px) { 
  margin-top:-3%;
}
`

export const ClientsContainer = styled.div`
  display: flex;
  width:100%;
  margin-bottom:1.2rem;
  @media (max-width: 1080px) { 
 margin-top:2rem;
 justify-content:space-between;
}
`;
export const ClientBox = styled.div`
  padding: 3px;
  border-radius: 10px;
  text-align: center;  
`;
export const ClientImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;

`;

export const ClientP = styled.p`
margin-left:2rem;
padding-left:0.5rem;
`