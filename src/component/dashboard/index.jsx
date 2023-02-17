import FirstAnalyticsRow from "../firstAnalyticsRow";
import TextContentSection from "../textContentSection";
import styled from "styled-components";
import SecondAnalyticsRow from "../secondAnalyticsRow";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <TextContentSection />
      <FirstAnalyticsRow />
      <SecondAnalyticsRow />
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  padding: 1rem 4rem 3rem 1rem;

  @media only screen and (min-width: 280px) and (max-width: 1024px) {
    padding: 0rem 1rem 1rem 0rem;
  }
`;

export default Dashboard;
