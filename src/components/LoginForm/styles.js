import styled from "styled-components";

export const StyledLoginForm = styled.div`

      display: flex;
      flex-direction: column;
      max-width: 440px;
      margin: 0 auto;

      .inputDefault {
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
      }

      .inputError {
        background-color: #1B1212;
        border-color: red;
        border-width: 1px;
        margin: 10px 0 0 0;
        height: 46px;
        border-radius: 4px;
        padding: 0 0 0 12px;
        font-weight: 500;
        font-size: 1rem;
        color: #ffffff;
      }

      .loginMessage {
        margin: 5px 0 0 0;
      }

      .loginMessageSuccess {
        margin: 5px 0 0 0;
        color: green;
      }

      .loginInfo {
        margin: 10px;
        text-align: center;
        color: gray;
      }
`;