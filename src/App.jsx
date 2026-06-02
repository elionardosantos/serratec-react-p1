import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import logoImg from '/src/assets/cloneflix-logo.png';

function App() {
  const [count, setCount] = useState(0);

  var user = "admin";
  var pass = "admin";

  useEffect(() => {
    var username = document.querySelector("#username");
    var password = document.querySelector("#password");

    if (count == 0) {
    } else if (username.value == "" || password.value == "") {

      username.style.borderColor = "red";
      password.style.borderColor = "red";
      alert("Usuário e senha são obrigatórios");

    } else if (username.value == user && password.value == pass) {

      username.style.borderColor = "#ffffff7f";
      password.style.borderColor = "#ffffff7f";
      alert(`Login realizado com sucesso!`);
      

    } else {

      username.style.borderColor = "red";
      password.style.borderColor = "red";
      alert(`Usuário ou senha incorretos`);

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
            <input className={styles.inputUsername} type="text" name="username" id="username" placeholder="Email" />
            <input className={styles.inputPassword} type="password" name="password" id="password" placeholder="Senha" />
            <input className={styles.inputButton} type="submit" value="Continuar" onClick={() => { setCount(count + 1)}}/>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
