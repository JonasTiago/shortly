import NavBar from "../../components/Nav";
import Logo from "../../components/Logo";
import HomeStyel from "../../assets/styles/page";

export default function LoggedOut() {
  return (
    <>
      <NavBar>
        <a href="">Entrar</a>
        <a href="">Cadastrar-se</a>
      </NavBar>
      <HomeStyel>
        <section>
          <Logo />
          <div>rankig</div>
          <a href="">Crie sua conta para usar nosso serviço!</a>
        </section>
      </HomeStyel>
    </>
  );
}
