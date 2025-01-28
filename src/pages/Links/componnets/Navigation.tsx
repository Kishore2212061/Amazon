import { FiHome, FiPackage, FiUsers, FiStar, FiSettings, FiLogOut } from "react-icons/fi";
import { NavMenu, StyledNavLink, LogoutButton } from './Styles';

function Navigation() {
  return (
    <NavMenu>
      <StyledNavLink to="/">
        <FiHome /> Dashboard
      </StyledNavLink>
      <StyledNavLink to="/pro">
        <FiPackage /> Products
      </StyledNavLink>
      <StyledNavLink to="/customers">
        <FiUsers /> Customers
      </StyledNavLink>
      <StyledNavLink to="/reviews">
        <FiStar /> Reviews
      </StyledNavLink>
      <StyledNavLink to="/settings">
        <FiSettings /> Settings
      </StyledNavLink>
      <LogoutButton to="/logout">
        <FiLogOut /> Logout
      </LogoutButton>
    </NavMenu>
  );
}

export default Navigation;
