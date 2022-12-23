import PageStyel from "../../assets/styles/page";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import NavBar from "../../components/Nav";
import UrlShort from "../../components/urlShort";
import { Link } from "react-router-dom";

export default function Logged() {
  return (
    <>
      <NavBar>
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
        <UrlShort />
        <UrlShort />
        <UrlShort />
      </PageStyel>
    </>
  );
}
