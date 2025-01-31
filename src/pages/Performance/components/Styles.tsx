import styled from "styled-components";
export const Title = styled.h2`

padding-left:2rem;
font-size:1.2rem;
display:flex;
`

export const ProgressCardd = styled.div`
background-color:#ffcc80;
margin-bottom:0.5rem;
margin-right:0.5rem;
  border-radius: 30px;
  min-width:32rem;
  display:flex;
  padding-right:0.8rem;
  flex-direction:column;
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


export const ProgressBox = styled.div`
  background: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
   margin-top:2rem;
   margin-left:1.5rem;
   margin-bottom:1rem;
  border-radius:30px;
  padding:0.5rem;
`;
export const Percentage = styled.span<{ isPositive: boolean }>`
  border-radius:20px;
  width:3.8rem;
  height:1.7rem;
  font-weight: bold;
  align-items:center;
  margin-top:0.9rem;
  background-color: ${(props) => (props.isPositive ? "#90EE90" : "#ffcccb")};
  color: ${(props) => (props.isPositive ? "green" : "red")};
`;

export const FlexProperty = styled.div`;
display:flex;
justify-content: space-between;
`;
export const ProgressB = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
`;
export const Hrr = styled.hr`
border:2px solid #ffcc80;
`;

export const H6 = styled.h4`
margin-left:2rem;
margin-top:0.3rem;
`