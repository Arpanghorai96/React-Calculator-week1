import styled from "styled-components";

const Error = ({ error, specificError }) => {
  return (
    <Errorcontainer>
      <ErrorMessage>{error}</ErrorMessage>
      <div>{specificError}</div>
    </Errorcontainer>
  );
};

export default Error;
const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
  font-weight: bold;
`;
const Errorcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
