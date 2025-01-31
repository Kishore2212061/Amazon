import styled from "styled-components";

export const Title = styled.h2`

padding-left:2rem;
font-size:1.2rem;
display:flex;
`
export const P = styled.p`
margin-left:80%;
margin-top:-7%;
   @media (max-width: 1080px) { 
  margin-top:-3%;
}
`

export const ClientsContainer = styled.div`
  display: flex;
  width:100%;
  @media (max-width: 1080px) { 
 margin-top:2rem;
 align-items:center;
 justify-content:space-around;
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
  margin-left:1.2rem;
  object-fit: cover;
  margin-bottom: -0.5rem;
`;

export const ClientP = styled.p`
padding-left:2rem;

`