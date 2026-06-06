import styled from "styled-components";

export const StyledInputDefault = styled.input`
  background-color: #1B1212;
  border-color: #ffffff7f;
  border-width: 1px;
  margin: 10px 0 0 0;
  height: 46px;
  border-radius: 4px;
  padding: 0 0 0 12px;
  font-weight: 500;
  font-size: 1rem;
  color: #ffffff;
`;

export const StyledInputError = styled(StyledInputDefault)`
  border-color: red;
`;