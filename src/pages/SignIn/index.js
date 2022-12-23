import PageStyel from "../../assets/styles/page";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import NavBar from "../../components/Nav";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <NavBar>
        <Link to={"/signin"}>Entrar</Link>
        <Link to={"/signup"}>Cadastrar-se</Link>
      </NavBar>
      <PageStyel>
        <Logo />
        <Form>
          <label>
            <input type="text" placeholder="E-mail" />
          </label>
          <label>
            <input type="text" placeholder="Senha" />
          </label>
          <input type="submit" value="Entrar" />
        </Form>
      </PageStyel>
    </>
  );
}
