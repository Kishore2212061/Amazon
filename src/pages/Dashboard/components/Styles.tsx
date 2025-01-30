import styled from "styled-components";
import Skeleton from '@mui/material/Skeleton';

export const Container = styled.div`
  display: flex;
  border-radius: 30px;
  background-color: white;
  margin-left:-3rem;

  padding: 1.5rem;
       @media (max-width:1080px) { 
         flex-direction: column;
         margin-left:0.3%;
  }
`;

export const Title = styled.h1`
  padding-top: 2rem;
  font-size: clamp(1.5rem, 2vw, 2.2rem); 
  width: 100%;
  margin-left: 0.5rem;
`;

export const CC = styled.div`
  margin: 1.5rem auto;
`;

export const H3 = styled.h3`
  font-size: 0.9rem;
  margin-top: -0.5rem;
  margin-left: 0.9rem;
`;

export const Rc = styled.div`
  display: flex;
  background-color: #ff8888;
    margin-left:0.5rem;
  border-radius: 15px;
  width: 100%;
  color: white;
  height: 9%;
   @media (max-width: 1080px) { 
   height:20%;
   padding:5%;
   width:90%;
}
      @media (min-width: 1081px) { 
 height:20%;
 margin-top:2rem;

}
`;

export const Im = styled.img`
  width: 100%;
  @media (max-width: 768px) { 
  margin-left:40%;
}
`;

export const TextC = styled.p`
  display: flex;
  word-wrap: break-word; 
  flex-direction: column;
  padding-left: 1.5rem;
  @media (max-width: 1080px) { 
  font-size:200%;
}
`;

export const Inside = styled.div`

   margin-right:2rem;
      @media (min-width: 1081px) { 
     width:35rem;
     height:55rem;
}
  `;

export const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3.5rem;
  margin-left:1rem;
  width: 100%;
   @media (max-width: 1080px) { 
      justify-content:center;
}
`;

export const StatBox = styled.div`
  background: white;
  padding: 0.5rem;
  width: clamp(6.8rem, 15%, 10rem);
  min-height: 5rem;
  border-radius:10px;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const StatValue = styled.p`
  font-size: 12px;
  color: #2e2e2e;
`;

export const StatValue1 = styled.h1`
  font-size: 25px;
  color: #2e2e2e;
`;

export const RecentlySoldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  width: 100%;
   margin-left:1%;
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

export const SoldImage = styled.img`
  width: 80%;
  height: auto;
  margin-left:1rem;
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

export const H2 = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  padding-left:2.5%; 
  

`;

export const NotificationIcon = styled.div`
  position: absolute;
  top: 40%;
  right: 5%;
  cursor: pointer;
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
