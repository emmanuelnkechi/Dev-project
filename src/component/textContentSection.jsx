import styled from "styled-components";

const TextContentSection = () => {
  return (
    <StyledDiv>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maxime sit
        quaerat, officia dignissimos ratione, similique minima, dolore
        distinctio eligendi odit modi obcaecati possimus officiis minus
        repellat! Rem, obcaecati maiores.
      </div>
      <div className="second-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maxime sit
        quaerat, officia dignissimos ratione, similique minima, dolore
        distinctio eligendi odit modi obcaecati possimus officiis minus
        repellat! Rem, obcaecati maiores.
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  padding: 2rem;
  background-color: #171721;
  border-radius: 0.8rem;
  margin-bottom: 2rem;
  color: #ababb5;

  .second-para {
    margin-top: 2rem;
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    padding: 1rem;

    .second-para {
      margin-top: 1rem;
    }
  }
`;

export default TextContentSection;
