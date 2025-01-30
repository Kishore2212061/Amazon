import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
              display:flex;
              flex-direction:column;
              gap:1.5rem;
            border-radius: 30px;
            background-color: #3f3d56;
            border:5px solid black;
                @media (max-width: 768px) { 
                      flex-direction: row;
                      margin-bottom:-2.5%;
  }
            
  }
`;

export const Pic = styled.img`
    width: 4.5rem;
    height: 4.5rem;
    padding:3.5rem;
    margin-left:-1.2rem;
    border-radius: 50%;
     border:5px solid black;
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-left:1rem;
  margin-top:-1.5rem;
  padding-right:4rem;
   border:5px solid black;
     @media (max-width: 768px) { 
      flex-direction: row;
      margin-top:0;
      margin-left:0;
    justify-content:flex-start;
  }

`;

export const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 1.1rem;
  color: white;
   border:5px solid black;
  
  svg {
    width: 0.8rem;
    height: 0.8rem;
  }
    &:hover {
    color: gold;
    }
      @media (max-width: 768px) { 
      flex-direction: row;
      margin-top:9%;
      margin-left:0;
      padding:2rem;
      align-items:flex-start;
  }
     
`;

export const LogoutButton = styled(StyledNavLink)`
  color: white;
  margin-top:120%;
    @media (max-width: 768px) { 
    margin-top:0;
    margin-top:9%;
  }
`;