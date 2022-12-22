import PageStyel from "../../assets/styles/page";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import NavBar from "../../components/Nav";

export default function SignIn() {
  return (
    <>
      <NavBar>
        <a>Entrar</a>
        <a>Cadastrar-se</a>
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
          <input type="submit" value="Entrar"/>
        </Form>
      </PageStyel>
    </>
  );
}
