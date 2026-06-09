import { StyledHeader } from "./styles";
import logoImg from "../../assets/cloneflix-logo.png";

export const Header = () => {
    return <StyledHeader>
        <div>
            <img src={logoImg} alt="Cloneflix Logo" />
        </div>
    </StyledHeader>

};