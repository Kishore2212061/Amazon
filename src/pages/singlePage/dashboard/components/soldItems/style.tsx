import styled from "styled-components";
import Skeleton from '@mui/material/Skeleton';

export const RecentlySoldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  width: 100%;
   margin-left:1%;
`;

export const H2 = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  padding-left:2.5%; 
`;

export const SoldList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1.5rem; 
   margin-top:0rem;
`;

export const SoldItem = styled.li`
  background-color: white;
  border-radius: 35px;
  display:flex;
  flex-direction:column;
  padding: 1.2rem;
  height:12rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  width:10rem;
`;

export const SkeletonSoldItem = styled(SoldItem)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SkeletonImage = styled(Skeleton)`
  border-radius:20px;
  width:8rem;
  min-height:5rem;
  padding-left:2rem;
`;

export const SkeletonName = styled(Skeleton)`
padding-top:1rem;
  width: 6rem;
  height: 1.2rem;
  margin-top: 3rem;
`;

export const SkeletonPrice = styled(Skeleton)`
  width: 6rem;
  height: 2rem;
  margin-top: 0.3rem;
`;

export const SoldName = styled.span`
  display:flex;
  font-size: 12px;
  padding: 0.3rem;
  font-weight: bold;
     @media (max-width: 1080px) { 
       font-size:25px;

}
`;

export const SoldPrice = styled.span`
  font-size: 14px;
  color: #444;
`;



export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const IconContainerWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const IconContainer = styled.div`
  width: 78px;
  height: 89px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  border-radius: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Card = styled.div`
  background: #e6b9b8;
  padding: 15px 20px 15px;
  border-radius: 25px;
  width: 150px;
  padding:30px;
  color: white;
  height:30px;
  font-weight: bold;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title1 = styled.div`
  font-size: 16px;
  padding:2px;
`;

export const Stats = styled.div`
   display:flex;
  font-size: 10px;
  opacity: 0.8;
`;

export const SoldImage = styled.img`
  width: 80%;
  height: auto;
  margin-left:1rem;
`;
