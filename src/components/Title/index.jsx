import { StyledTitle } from './styles';

export const Title = ({ children, ...rest }) => {
    return <StyledTitle { ...rest }>
        {children}
    </StyledTitle>
};