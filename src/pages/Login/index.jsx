import { LoginForm } from "../../components/LoginForm";
import { Header } from "../../components/Header";
import { GlobalStyle } from "../../css/globalStyle";

function Login() {

  return (
    <>
        <GlobalStyle />
        <Header></Header>
        <LoginForm></LoginForm>
    </>
  )

}

export default Login