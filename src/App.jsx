import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import logoImg from '/src/assets/cloneflix-logo.png';
import { StyledInput } from './components/Input';
import { StyledButton } from './components/Button';
import { InfoMessage } from './components/InfoMessage';
import { Title } from './components/Title';
import { LoginForm } from './components/LoginForm';

function App() {

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

    if (count !== 0) {

      // Se nenhum campo estiver preenchido
      if (username == "" || password == "") {
        setValidInput(false);
        setLoginMessage("Usuário e senha são obrigatórios");

      // Se os dados estiverem corretos
      } else if (username == validUser && password == validPass) {
        setValidInput(true);
        setLoginMessage(`Usuário e email estão corretos!`);

      // Qualquer outra situação
      } else {
        setValidInput(false);
        setLoginMessage(`Usuário ou senha incorretos`);

      }
    }
  }, [count]);

  // return (
  //   <>

      
  //     <header>
  //       <div className={styles.header}>
  //         <img src={logoImg} alt="Cloneflix Logo" />
  //       </div>
  //     </header>
  //     <main>
  //       <div className={styles.content}>
  //         <Title children={ "Informe seus dados para entrar" } />
  //         <InfoMessage children={ "Ou crie uma conta" } $secondaryColor />

  //         <div className={styles.form}>

  //           <StyledInput
  //             validInput={validInput} type={"text"}
  //             placeholder={"Usuário"} value={ username }
  //             onChange={ () => { setUsername(event.target.value) }} 
  //           />

  //           <StyledInput
  //             validInput={validInput} type={"password"}
  //             placeholder={"Senha"} value={ password }
  //             onChange={ () => { setPassword(event.target.value) }}
  //           />

  //           <InfoMessage
  //             children={ loginMessage }
  //           />
            
  //           <StyledButton
  //             children={ "Continuar" } onClick={() => { setCount(count + 1)}}
  //           />

  //           <InfoMessage
  //             $secondaryColor $textCenter
  //             children={ "Login: admin / senha: 1234" }
  //           />

  //         </div>
  //       </div>
  //     </main>
  //   </>
  // )

  return (
    <>
      <LoginForm></LoginForm>
    </>
  )
}

export default App