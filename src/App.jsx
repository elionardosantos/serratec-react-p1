import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import logoImg from '/src/assets/cloneflix-logo.png';

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
    <>
      <header>
        <div className={styles.header}>
          <img src={logoImg} alt="Cloneflix Logo" />
        </div>
      </header>
      <main>
        <div className={styles.content}>
          <h1>
            Informe seus dados para entrar
          </h1>
          <div className={styles.text}>
            Ou crie uma conta.
          </div>
          <div className={styles.form}>

            <input 
              className={ validInput?styles.inputDefault:styles.inputError }
              onChange={ () => { setUsername(event.target.value) } }
              type="text" placeholder="Usuário"
            />

            <input 
              className={ validInput?styles.inputDefault:styles.inputError }
              onChange={ () => { setPassword(event.target.value) } }
              type="password" name="password" id="password" placeholder="Senha"
            />

            <div className={ loginSuccess?styles.loginMessageSuccess:styles.loginMessage }>
              { loginMessage }
            </div>

            <button className={ styles.formButton } onClick={ () => { setCount(count + 1) } }>
              Continuar
            </button>

            <div className={ styles.loginInfo }>Usuário: admin / senha: 1234</div>

          </div>
        </div>
      </main>
    </>
  )
}

export default App