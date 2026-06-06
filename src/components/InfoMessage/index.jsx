import { InfoMessageDefault } from "./styles"

export const InfoMessage = ({ loginSuccess, children, ...rest }) => {
    return <InfoMessageDefault { ...rest }>
        { children }
    </InfoMessageDefault>
}