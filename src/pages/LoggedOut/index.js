import NavBar from "../../components/Nav";
import Logo from "../../components/Logo";
import HomeStyel from "../../assets/styles/page";
import Ranking from "../../components/Ranking";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import URL_BASE from "../../constants/URL_BASE";

export default function LoggedOut() {
  const [ranking, setRanking] = useState();

  useEffect(() => {
    axios
      .get(`${URL_BASE}/ranking`)
      .then((res) => {
        setRanking(res.data);
      })
      .catch((res) => console.log(res));
  }, []);

  return (
    <>
      <NavBar>
        <Link to={"/signin"}>Entrar</Link>
        <Link to={"/signup"}>Cadastrar-se</Link>
      </NavBar>
      <HomeStyel>
        <section>
          <Logo />
          <Ranking ranking={ranking} />
          <p>Crie sua conta para usar nosso serviço!</p>
        </section>
      </HomeStyel>
    </>
  );
}
