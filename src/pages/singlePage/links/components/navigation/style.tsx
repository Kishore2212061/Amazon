import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-left:1rem;
  margin-top:-1.5rem;
  padding-right:4rem;
     @media (max-width: 1080px) { 
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
  
  svg {
    width: 0.8rem;
    height: 0.8rem;
  }
    &:hover {
    color: gold;
    }
      @media (max-width: 1080px) { 
      flex-direction: row;
      margin-top:9%;
      margin-left:0;
      padding:2rem;
      align-items:flex-start;
  }
     
`;

export const LogoutButton = styled(StyledNavLink)`
  color: white;
  margin-top:170%;
    @media (max-width: 1080px) { 
    margin-top:0;
    margin-top:9%;
  }
`;