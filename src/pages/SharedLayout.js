import Navbar from "./Navbar";
import styledNavbar from "./StyledNavbar";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Home;
