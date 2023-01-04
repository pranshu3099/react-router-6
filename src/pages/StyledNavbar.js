import { NavLink } from "react-router-dom";

const styledNavbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "grey" };
        }}
      >
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/product">Products</NavLink>
    </nav>
  );
};
export default styledNavbar;
