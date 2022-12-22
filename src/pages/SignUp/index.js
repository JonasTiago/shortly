import PageStyel from "../../assets/styles/page";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import NavBar from "../../components/Nav";

export default function SignUp() {
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
            <input type="text" placeholder="Nome" />
          </label>
          <label>
            <input type="text" placeholder="E-mail" />
          </label>
          <label>
            <input type="text" placeholder="Senha" />
          </label>
          <label>
            <input type="text" placeholder="Confirmar senha" />
          </label>
          <input type="submit" value="Criar Conta"/>
        </Form>
      </PageStyel>
    </>
  );
}
