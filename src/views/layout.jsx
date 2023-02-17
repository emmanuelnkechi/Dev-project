import NavBar from "../component/navBar";
import SideBar from "../component/sidebar";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <div>
        <SideBar />
      </div>
      <div className="dashboard">
        <NavBar />
        <div>{children}</div>
      </div>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
  gap: 2rem;
  background-color: #727783;
  height: 100%;

  @media only screen and (min-width: 280px) and (max-width: 767px) {
    grid-template-columns: 1fr 11fr;
    gap: 0.8rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    gap: 0.6rem;
  }
`;

export default Layout;
