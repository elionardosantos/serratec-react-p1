import { StyledInputDefault, StyledInputError } from './styles';

export const StyledInput = ({ validInput, onChange, ...rest }) => {

    const InputComponent = validInput ? StyledInputDefault : StyledInputError;
    return <InputComponent onChange={ onChange } { ...rest } />
    
}