import { useState, useEffect } from "react";
import { StyledInput } from "../Input";
import { InfoMessage } from "../InfoMessage";
import { StyledButton } from "../Button";
import { StyledLoginForm } from "./styles";


export const LoginForm = () => {
    
    // Contador para acionar o useState sempre que clicar em continuar
    const [count, setCount] = useState(0);
    
    // Mensagem de informação sobre o status do login
    const [loginMessage, setLoginMessage] = useState("");
    
    // Cor da borda dos inputs
    const [validInput, setValidInput] = useState(true);
    
    // Cor do texto de informação de sucesso ou erro do login
    const [loginSuccess, setLoginSuccess] = useState(false)
    
    // Usuario e senha digitados pelo usuário
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    // Usuário e senha válidos para login
    const validUser = "admin";
    const validPass = "1234";

    
    useEffect(() => {

        if (count == 0) {
        // Nada acontece na primeira execução do código

        } else if (username == "" || password == "") {

        setValidInput(false);
        setLoginSuccess(false);
        setLoginMessage("Usuário e senha são obrigatórios");

        } else if (username == validUser && password == validPass) {
        
        setValidInput(true);
        setLoginSuccess(true);
        setLoginMessage(`Usuário e email estão corretos!`);

        } else {

        setValidInput(false);
        setLoginSuccess(false);
        setLoginMessage(`Usuário ou senha incorretos`);

        }

    }, [count]);
    
    return (
    
        <StyledLoginForm>

            <StyledInput
                validInput={validInput} type={"text"}
                placeholder={"Usuário"} value={ username }
                onChange={ () => { setUsername(event.target.value) }} 
            />

            <StyledInput
                validInput={validInput} type={"password"}
                placeholder={"Senha"} value={ password }
                onChange={ () => { setPassword(event.target.value) }}
            />

            <InfoMessage
                children={ loginMessage }
            />
            
            <StyledButton
                children={ "Continuar" } onClick={() => { setCount(count + 1)}}
            />

            <InfoMessage
                $secondaryColor $textCenter
                children={ "Login: admin / senha: 1234" }
            />

            <InfoMessage
                $secondaryColor $textCenter
                children={"Dados digitados: " + username + " - " + password}
            />

        </StyledLoginForm>

    )
}