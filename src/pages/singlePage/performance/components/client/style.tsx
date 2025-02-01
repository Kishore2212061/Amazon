import styled from "styled-components";

export const Title = styled.h2`
margin-top:2.5rem;
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
   justify-content:space-between;
   gap: 30px;
   text-align: center;
  @media (max-width: 1080px) { 
 margin-top:2rem;
 justify-content:space-between;

}
`;
export const ClientBox = styled.div`
  padding: 3px;
  border-radius: 10px;
  display:flex;
  flex-direction:column;
`;
export const ClientImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ClientP = styled.p`
  text-align: center;
  width: 100px;
  margin-left: 23.5%;
`

export const Titles=styled.h2`
padding-left:2rem;

font-size:1.2rem;
`;