import PageStyel from "../../assets/styles/page";
import Logo from "../../components/Logo";
import NavBar from "../../components/Nav";
import Ranking from "../../components/Ranking";

export default function RankingPage() {
  return (
    <>
      <NavBar>
      <span>Seja bem-vindo(a), Pessoa!</span>
        <a>Home</a>
        <a>Ranking</a>
        <a>Sair</a>
      </NavBar>
      <PageStyel>
        <Logo></Logo>
        <Ranking />
      </PageStyel>
    </>
  );
}
