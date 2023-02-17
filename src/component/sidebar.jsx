import styled from "styled-components";
import NavLink from "./navLink";

const SideBar = () => {
  return (
    <StyledSidebar>
      <div className="sidebar">
        <NavLink linkName="Dashboard" to="/" />
        <NavLink linkName="Active Bids" to="/active" />
        <NavLink linkName="Favourite NFTs" to="/favourite-nft" />
        <NavLink linkName="Trending" to="/trending" />
        <NavLink linkName="Collections" to="/collections" />
        <NavLink linkName="Settings" to="/settings" />
      </div>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  background-color: #171721;
  height: 100%;

  .sidebar {
    padding: 6rem 2rem 0rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media only screen and (min-width: 280px) and (max-width: 767px) {
    position: fixed;
    width: 2.5rem;

    .sidebar {
      padding: 2rem 0.8rem;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .sidebar {
      padding: 2rem 0.2rem;
    }
  }
`;

export default SideBar;
