import styled from "styled-components";
import user from "../assets/images/2.webp";

const SecondAnalyticsRow = () => {
  return (
    <StyledDiv>
      <div className="row">
        <div className="row__first-column">
          <div className="row__stake-picture">
            <img src={user} alt="user" />
          </div>
          <div className="row__click-button">
            <button className="row__click-button--left">stake</button>
            <button className="row__click-button--right">stake</button>
          </div>
        </div>

        <div className="row__second-column">
          <div className="row__stake-picture">
            <img src={user} alt="user" />
          </div>
          <div className="row__click-button">
            <button className="row__click-button--left">stake</button>
            <button className="row__click-button--right">stake</button>
          </div>
        </div>

        <div className="row__third-column">
          <div className="row__stake-picture">
            <img src={user} alt="user" />
          </div>
          <div className="row__click-button">
            <button className="row__click-button--left">stake</button>
            <button className="row__click-button--right">stake</button>
          </div>
        </div>

        <div className="row__third-column">
          <div className="row__stake-picture">
            <img src={user} alt="user" />
          </div>
          <div className="row__click-button">
            <button className="row__click-button--left">stake</button>
            <button className="row__click-button--right">stake</button>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;

    &__first-column {
      background-color: #171721;
      border-radius: 0.8rem;
      padding: 1rem 1rem;
    }

    &__second-column {
      background-color: #171721;
      padding: 1rem 1rem;
      border-radius: 0.8rem;
    }

    &__third-column {
      background-color: #171721;
      border-radius: 0.8rem;
      padding: 1rem 1rem;
      color: #ababb5;
    }

    &__stake-picture {
      height: 10rem;

      img {
        height: 100%;
        width: 100%;
        border-radius: 0.5rem;
      }
    }

    &__click-button {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-top: 2rem;

      &--right {
        width: 100%;
        border: none;
        border-radius: 0.3rem;
        padding: 0.4rem 1rem;
        background: #1a83fe;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
      }
      &--left {
        width: 100%;
        border: none;
        border-radius: 0.3rem;
        padding: 0.4rem 1rem;
        background: #28593b;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 767px) {
    .row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;

      &__first-column {
        margin-top: 2rem;
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.4rem;

      &__first-column {
        margin-top: 2rem;
      }
      &__second-column {
        margin-top: 2rem;
      }
    }
  }
`;

export default SecondAnalyticsRow;
