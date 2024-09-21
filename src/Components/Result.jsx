import styled from "styled-components";

const Result = ({ success, calculationMessage }) => {
  return (
    <Successcontainer>
      <SuccessMessage> {success}</SuccessMessage>
      <CalculationMessage>{calculationMessage}</CalculationMessage>
    </Successcontainer>
  );
};

export default Result;
const Successcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SuccessMessage = styled.div`
  color: green;
  margin-top: 10px;
  font-weight: bold;
`;

const CalculationMessage = styled.div`
  color: blue;
  margin-top: 5px;
`;
