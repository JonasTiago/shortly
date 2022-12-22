import NavBar from "../../components/Nav";
import Logo from "../../components/Logo";
import HomeStyel from "../../assets/styles/page";
import Ranking from "../../components/Ranking";

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
          <Ranking />
          <p>Crie sua conta para usar nosso serviço!</p>
        </section>
      </HomeStyel>
    </>
  );
}
