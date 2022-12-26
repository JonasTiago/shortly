import PageStyel from "../../assets/styles/page";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import NavBar from "../../components/Nav";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import URL_BASE from "../../constants/URL_BASE";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function fillInForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function signup(e) {
    e.preventDefault();

    const body = form;

    axios
      .post(`${URL_BASE}/signup`, body)
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((res) => {
        switch (res.response.status) {
          case 409:
            alert("Email já cadastrado!");
            break;
          case 422:
            alert(res.response.data);
            break;
          default:
            console.log("erro");
        }
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
        <Form toSend={signup}>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              value={form.name}
              minLength={3}
              autoComplete="off"
              onChange={fillInForm}
              placeholder="Nome"
              required
            />
          </label>
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
          <label htmlFor="confirmPassword">
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={fillInForm}
              pattern={form.password}
              title="As senhas devem ser iguais!"
              placeholder="Confirmar senha"
              required
            />
          </label>
          <input type="submit" value="Cadastrar" />
        </Form>
      </PageStyel>
    </>
  );
}
