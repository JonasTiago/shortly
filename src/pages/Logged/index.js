import PageStyel from "../../assets/styles/page";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import NavBar from "../../components/Nav";
import UrlShort from "../../components/urlShort";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import URL_BASE from "../../constants/URL_BASE";
import { AuthContext } from "../../contexts/authContext";

export default function Logged() {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState([])

  useEffect(() => {
    const headers = { authorization: `Bearer ${token}` };

    axios
      .get(`${URL_BASE}/users/me`, { headers })
      .then((res) => {
        setUser(res.data)
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, [token]);
  return (
    <>
      <NavBar>
        <span>Seja bem-vindo(a), {user.name}!</span>
        <Link to={"/logged"}>Home</Link>
        <Link to={"/rankingpage"}>Ranking</Link>
        <Link to={"/"}>Sair</Link>
      </NavBar>
      <PageStyel>
        <Logo />
        <Form>
          <div>
            <input type="text" placeholder="Links que cabem no bolso" />
            <input type="submit" value="Encurtar link" />
          </div>
        </Form>
        {user.shortenedUrls?.map(user => <UrlShort urlShorts={user}/>)}
      </PageStyel>
    </>
  );
}
