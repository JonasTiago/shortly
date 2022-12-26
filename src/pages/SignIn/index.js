import PageStyel from "../../assets/styles/page";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import NavBar from "../../components/Nav";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import URL_BASE from "../../constants/URL_BASE";
import { AuthContext } from "../../contexts/authContext";

export default function SignIn() {
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function fillInForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function signIn(e) {
    e.preventDefault();

    const body = form;

    axios
      .post(`${URL_BASE}/signin`, body)
      .then((res) => {
        setToken(res.data.token);
        navigate("/logged");
      })
      .catch((res) => {
        console.log(res.response.status);
        alert("Senha ou Usuario, Invalido!");
      });
  }

  return (
    <>
      <NavBar>
        <Link to={"/signin"}>Entrar</Link>
        <Link to={"/signup"}>Cadastrar-se</Link>
      </NavBar>
      <PageStyel>
        <Logo />
        <Form toSend={signIn}>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              value={form.email}
              autoComplete="off"
              onChange={fillInForm}
              placeholder="E-mail"
              required
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={fillInForm}
              placeholder="Senha"
              required
            />
          </label>
          <input type="submit" value="Entrar" />
        </Form>
      </PageStyel>
    </>
  );
}
