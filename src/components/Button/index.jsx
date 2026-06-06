import { StyledButtonDefault } from './style';

export const StyledButton = ({ children, ...rest }) => {
    return <StyledButtonDefault { ...rest }>
        { children }
    </StyledButtonDefault>
}