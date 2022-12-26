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
  const { token, setName } = useContext(AuthContext);
  const [user, setUser] = useState([]);
  const [upShort, setUpShort] = useState();
  const [form, setForm] = useState({
    url: "",
  });

  function fillInForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function shorten(e) {
    e.preventDefault();

    const body = form;
    const headers = { authorization: `Bearer ${token}` };

    axios
      .post(`${URL_BASE}/urls/shorten`, body, { headers })
      .then((res) => {
        setUpShort(res.data);
      })
      .catch((res) => {
        console.log(res.response);
      });
  }

  useEffect(() => {
    const headers = { authorization: `Bearer ${token}` };

    axios
      .get(`${URL_BASE}/users/me`, { headers })
      .then((res) => {
        setUser(res.data);
        setName(res.data.name);
      })
      .catch((res) => {
        console.log(res);
      });
  }, [upShort]);

  return (
    <>
      <NavBar>
        <span>Seja bem-vindo(a), {user.name}!</span>
        <Link to={"/logged"}>Home</Link>
        <Link to={"/rankingpage"}>Ranking</Link>
      </NavBar>
      <PageStyel>
        <Logo />
        <Form toSend={shorten}>
          <div>
            <input
              type="text"
              name="url"
              placeholder="Links que cabem no bolso"
              onChange={fillInForm}
              value={form.url}
              autoComplete="off"
              required
            />
            <input type="submit" value="Encurtar link" />
          </div>
        </Form>
        {user.shortenedUrls?.length > 0
          ? user.shortenedUrls?.map((user) => <UrlShort urlShorts={user} key={user.id} setUpShort={setUpShort}/>)
          : ""}
      </PageStyel>
    </>
  );
}
