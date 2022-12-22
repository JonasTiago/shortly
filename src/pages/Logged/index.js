import PageStyel from "../../assets/styles/page";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import NavBar from "../../components/Nav";
import UrlShort from "../../components/urlShort";

export default function Logged() {
  return (
    <>
      <NavBar>
        <a href="">Home</a>
        <a href="">Ranking</a>
        <a href="">Sair</a>
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
      </PageStyel>
    </>
  );
}
