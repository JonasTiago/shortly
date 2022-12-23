import NavBar from "../../components/Nav";
import Logo from "../../components/Logo";
import HomeStyel from "../../assets/styles/page";
import Ranking from "../../components/Ranking";
import { Link } from "react-router-dom";

export default function LoggedOut() {
  return (
    <>
      <NavBar>
        <Link to={"/signin"}>Entrar</Link>
        <Link to={"/signup"}>Cadastrar-se</Link>
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
