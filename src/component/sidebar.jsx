import styled from "styled-components";
import NavLink from "./navLink";
import user from "../assets/images/2.webp";

const SideBar = () => {
  return (
    <StyledSidebar>
      <div className="sidebar">
        <div className="sidebar__brand">
          <img src={user} alt="user" />
          <div className="sidebar__brand--name">Brand Name</div>
        </div>
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
    padding: 0rem 2rem 0rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &__brand {
      padding: 1.5rem 0rem 6rem 0rem;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: #d9b954;

      &--name {
        font-size: 1.2rem;
        font-style: 600;
      }

      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 767px) {
    position: fixed;
    width: 2.5rem;

    .sidebar {
      padding: 2rem 0.8rem;

      &__brand {
        padding: 1.5rem 0rem 2rem 0rem;

        &--name {
          display: none;
        }

        img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    position: fixed;
    .sidebar {
      padding: 2rem 0.2rem;
    }
  }
`;

export default SideBar;
