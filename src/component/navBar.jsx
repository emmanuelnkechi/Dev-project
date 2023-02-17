import styled from "styled-components";

const NavBar = () => {
  return (
    <StyledNav>
      <nav>
        <div>
          <h3>Brand Name</h3>
        </div>
      </nav>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  padding: 1rem 4rem 1rem 1rem;

  nav {
    background-color: #171721;
    border-radius: 0.4rem;
    color: #fff;
    padding: 0.2rem 2rem;
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    padding: 1rem 1rem 1rem 0rem;
    nav {
      padding: 0.2rem rem;
    }

    h3 {
      margin: 0.5rem 0rem;
      font-size: 1.3rem;
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 1024px) {
    padding: 1rem 1rem 1rem 0rem;
  }
`;

export default NavBar;
