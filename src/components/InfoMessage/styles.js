import styled from "styled-components";

export const InfoMessageDefault = styled.div`
    margin: 5px 0 0 0;

    ${props => props.$primaryColor && `
        color: white;
    `}

    ${props => props.$secondaryColor && `
        color: #ffffff7f;
    `}

    ${props => props.$textCenter && `
        text-align: center;
    `}
`;