import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
display:flex;
flex-direction:column;
gap:1.5rem;
    border-radius: 30px;
    background-color: #3f3d56;
`;

export const Pic = styled.img`
    width: 4.5rem;
    height: 4.5rem;
    padding:3.5rem;
    margin-left:-1.2rem;
    border-radius: 50%;
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  margin-left:1rem;
  margin-top:-1.5rem;
  padding-right:4rem;
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
`;

export const LogoutButton = styled(StyledNavLink)`
  color: white;
  margin-top:12rem;
`;