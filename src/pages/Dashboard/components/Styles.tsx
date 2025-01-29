import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 30px;
  background-color: white;
  margin-left:-3rem;
  max-width: 90vw;
  width: 100%;
  padding: 1.5rem;
  
`;

export const Title = styled.h1`
  padding-top: 2rem;
  font-size: clamp(1.5rem, 2vw, 2.2rem); 
  width: 90%;
  margin-left: 0.5rem;
`;

export const CC = styled.div`
  max-width: 600px;
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

  border-radius: 15px;
  width: 100%;
  max-width: 30rem;
  min-width: 250px;
  color: white;
  height: 9rem;
`;

export const Im = styled.img`
  width: 100%;
  max-width: 20rem;
  height: auto;
`;

export const TextC = styled.p`
  display: flex;
  word-wrap: break-word; 
  flex-direction: column;
  padding-left: 1.5rem;
`;

export const Inside = styled.div`
  width: 50%;
  margin-right: 1rem;
 
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
 
  gap: 1.5rem;
  margin-top: 1rem;
  width: 100%;
`;

export const StatBox = styled.div`
  background: white;
  padding: 0.5rem;
  width: clamp(6.8rem, 15%, 10rem);
  min-height: 5rem;
  border-radius: 20px;
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
  align-items: center;
  margin-top: 2.5rem;
  width: 100%;
`;

export const SoldList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1.5rem;
   
`;

export const SoldItem = styled.li`
  background-color: white;
  border-radius: 20px;
  padding: 1rem;
  height: auto;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  width: clamp(2rem, 38%, 10rem);
`;

export const SoldImage = styled.img`
   width: 100%;
  max-width: 22rem;
  height: auto;
`;

export const SoldName = styled.span`
display:flex;
  font-size: 12px;
  padding: 0.3rem;
  font-weight: bold;
`;

export const SoldPrice = styled.span`
  font-size: 14px;
  color: #444;
`;

export const H2 = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  margin-right:72%;
`;
