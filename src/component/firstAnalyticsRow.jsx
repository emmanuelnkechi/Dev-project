import styled from "styled-components";
import user from "../assets/images/2.webp";

const FirstAnalyticsRow = () => {
  return (
    <StyledRow>
      <div className="row">
        <div className="row__first-column">
          <div>
            <div className="row__image-section">
              <img src={user} alt="user" />
            </div>
          </div>

          <div className="row__address">
            <div className="row__address--left-align">Adrdress:</div>
            <div className="row__address--right-align">dtyjhgfghjkhgbfdfgh</div>
          </div>

          <div className="row__connect-button">
            <button>Connect</button>
          </div>
        </div>

        <div className="row__second-column">
          <div className="row__personal-stake">
            <h5 className="row__stake-header">Personal Stake</h5>
            <div>
              <div className="row__stake-address">
                <div className="row__stake-address--right">A:</div>
                <div className="row__stake-address--left">
                  jhgfghjksjehgsdfg
                </div>
              </div>

              <div className="row__stake-address">
                <div className="row__stake-address--right">B:</div>
                <div className="row__stake-address--left">
                  sdfggfddfghdfghdfgh
                </div>
              </div>

              <div className="row__stake-address">
                <div className="row__stake-address--right">C:</div>
                <div className="row__stake-address--left">hgftyhujk</div>
              </div>

              <div className="row__stake-address">
                <div className="row__stake-address--right">D:</div>
                <div className="row__stake-address--left">
                  sdrftgyhjgfdsasdfg
                </div>
              </div>
            </div>
          </div>

          <div className="row__stake-picture">
            <img src={user} alt="user" />
          </div>
        </div>

        <div className="row__third-column">
          <h5 className="row__stake-header">Current stake</h5>

          <div>
            <div className="row__stake-address">
              <div className="row__stake-address--right">A:</div>
              <div className="row__stake-address--left">jhgfghjksjehgsdfg</div>
            </div>

            <div className="row__stake-address">
              <div className="row__stake-address--right">B:</div>
              <div className="row__stake-address--left">
                sdfggfddfghdfghdfgh
              </div>
            </div>

            <div className="row__stake-address">
              <div className="row__stake-address--right">C:</div>
              <div className="row__stake-address--left">hgftyhujk</div>
            </div>
          </div>

          <div className="row__connect-button">
            <button>Stake</button>
          </div>
        </div>
      </div>
    </StyledRow>
  );
};

const StyledRow = styled.div`
  .row {
    display: grid;
    grid-template-columns: 3fr 6fr 3fr;
    gap: 1rem;

    &__first-column {
      background-color: #171721;
      border-radius: 0.8rem;
      padding: 1rem 1rem;
      text-align: center;
      height: 13rem;
    }

    &__connect-button {
      margin-top: 2rem;
      button {
        width: 100%;
        border: none;
        border-radius: 0.3rem;
        padding: 0.4rem 1rem;
        background: #1a83fe;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
      }
    }

    &__address {
      display: flex;
      gap: 0.4rem;
      align-items: center;
      &--left-align {
        font-weight: 600;
        color: #ececef;
      }
      &--right-align {
        color: #ababb5;
        font-size: 0.9rem;
        word-break: break-all;
      }
    }

    &__image-section {
      margin: 0rem auto;
      margin-bottom: 1rem;

      img {
        width: 100%;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
      }
    }

    &__second-column {
      background-color: #171721;
      padding: 1rem 1rem;
      border-radius: 0.8rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.8rem;
      height: 13rem;
    }

    &__stake-header {
      margin: 0rem;
      color: #ececef;
      font-size: 1.1rem;
    }

    &__stake-address {
      margin-top: 1rem;
      width: 100%;
      display: flex;
      align-items: center;
      color: #ababb5;

      &--right {
        font-weight: 600;
      }

      &--left {
        margin-left: 1rem;
        /* width: 70%; */
      }
    }

    &__stake-picture {
      border-radius: 0.5rem;
      height: 13rem;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &__third-column {
      background-color: #171721;
      border-radius: 0.8rem;
      padding: 1rem 1rem;
      color: #ababb5;
      height: 13rem;
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 767px) {
    .row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;

      &__first-column {
        height: 100%;
      }

      &__third-column {
        height: 100%;
      }

      &__second-column {
        border-radius: 0.8rem;
        display: grid;
        grid-template-columns: 1fr;
        height: 100%;
      }

      &__stake-picture {
        border-radius: 0.5rem;
        height: 13rem;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;

      &__first-column {
        height: 100%;
      }

      &__third-column {
        height: 100%;
      }

      &__second-column {
        border-radius: 0.8rem;
        display: grid;
        grid-template-columns: 1fr;
        height: 100%;
      }

      &__stake-picture {
        border-radius: 0.5rem;
        height: 13rem;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export default FirstAnalyticsRow;
