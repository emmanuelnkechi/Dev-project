import styled from "styled-components";
import banner from "../assets/images/banner.jpg";

const NavBar = () => {
  return (
    <StyledNav>
      <nav>
        <div>
          <img src={banner} alt="logo" />
        </div>
      </nav>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  padding: 1rem 4rem 1rem 1rem;

  nav {
    background-color: #171721;
    color: #fff;
    border-radius: 0.4rem;
  }

  img {
    width: 100%;
    border-radius: 0.4rem;
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    padding: 1rem 1rem 1rem 0rem;
    nav {
      padding: 0.2rem rem;
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 1024px) {
    padding: 1rem 1rem 1rem 0rem;
  }
`;

export default NavBar;
