import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageStyel from "../../assets/styles/page";
import Logo from "../../components/Logo";
import NavBar from "../../components/Nav";
import Ranking from "../../components/Ranking";
import URL_BASE from "../../constants/URL_BASE";
import { AuthContext } from "../../contexts/authContext";

export default function RankingPage() {
  const { name } = useContext(AuthContext);
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
        <span>Seja bem-vindo(a), {name?name:"pessoa"}!</span>
        <Link to={"/logged"}>Home</Link>
        <Link to={"/rankingpage"}>Ranking</Link>
      </NavBar>
      <PageStyel>
        <Logo></Logo>
        <Ranking ranking={ranking} />
      </PageStyel>
    </>
  );
}
