import styled from "styled-components";

export const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3.5rem;
  margin-left:1rem;
  width: 89%;
  justify-content:space-between;
   @media (max-width: 1080px) { 
      justify-content:space-around;
      gap:6.2em;
      width:95%;
}
`;

export const StatBox = styled.div`
  background: white;
  padding: 0.5rem;
  width: clamp(6.8rem, 25%, 10rem);
  min-height: 5rem;
  border-radius:10px;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
   justify-content:space-between;
   @media (max-width: 1080px) { 
      width:20rem;
      height:7rem;
   
}
`;

export const StatValue = styled.p`
  font-size: 17px;
  color: #2e2e2e;
`;

export const StatValue1 = styled.h1`
  font-size: 25px;
  color: #2e2e2e;
`;