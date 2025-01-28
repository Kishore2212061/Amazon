import styled from "styled-components";
export const Title=styled.h2`
padding-top:1rem;
padding-left:2rem;
font-size:1.2rem;

`

export const ProgressCardd=styled.div`
background-color:#ffcc80;
margin-top:0.5rem;
margin-bottom:0.5rem;
margin-right:0.5rem;
    border-radius: 30px;
width:object-fit;
`


export const ClientsContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  width: 100%;
  
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

export const ClientP=styled.p`
padding-left:1.9rem;
`


export const ProgressBox = styled.div`
  background: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  height:7rem;
  width:26rem;
 margin-left:1.5rem;
 margin-bottom:1rem;
  border-radius:30px;
  padding:1rem;
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

export const FlexProperty=styled.div`;
display:flex;
justify-content: space-between;

`;
export const ProgressB=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
`;
export const Hrr=styled.hr`
border:2px solid #ffcc80;
`;

export const H6=styled.h4`
margin-left:2rem;
margin-top:0.3rem;
`