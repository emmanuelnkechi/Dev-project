import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const NavLink = ({ to, linkName }) => {
  const location = useLocation();
  const activeClassName = location.pathname === to ? "active" : "";

  return (
    <StyledLink>
      <Link to={to} className={`link ${activeClassName}`}>
        <div className="link__icon"> </div>{" "}
        <div className="link__text">{linkName}</div>
      </Link>
    </StyledLink>
  );
};

const StyledLink = styled.div`
  .link {
    text-decoration: none;
    color: #b2b8ba;
    display: grid;
    grid-template-columns: 1fr 11fr;
    align-items: center;
    gap: 1rem;
    justify-content: left;
    padding: 0.2rem 0.6rem;
    font-size: 0.9rem;
    opacity: 0.6;

    &__icon {
      height: 0.6rem;
      width: 0.6rem;
      border-radius: 0.1rem;
      border: 1px solid #b2b8ba;
    }
  }
  .active {
    border-bottom: 1px solid #f6f6f6;
    border-right: 1px solid #3c3c3c;
    border-left: 1px solid #4f4f4f;
    border-top: 1px solid #232323;
    opacity: 1;
    border-radius: 0.1rem;
  }

  @media only screen and (min-width: 280px) and (max-width: 767px) {
    .link {
      gap: 0rem;
      padding: 0rem;
      &__text {
        display: none;
      }
    }

    .active {
      border-bottom: 1px solid #1a83fe;
      border-right: 1px solid #1a83fe;
      border-left: 1px solid #1a83fe;
      border-top: 1px solid #1a83fe;
      opacity: 1;
      border-radius: 0.1rem;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
  }
`;

export default NavLink;
