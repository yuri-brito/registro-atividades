import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Row, Toast } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import { useState, useContext } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { api } from "../api/api.js";
import { AuthContext } from "../contexts/authContext";
function LoginForm(props) {
  const navigate = useNavigate();
  const { setLoggedUser } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  function handleChange(e) {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("/usuario/login", loginForm);
      setLoggedUser({ ...response.data });
      localStorage.setItem("loggedUser", JSON.stringify(response.data));
      navigate("/perfil");
    } catch (error) {}
  }
  return (
    <Container
      style={{ height: "100vh" }}
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <Form onSubmit={handleSubmit} className="w-50">
        <Form.Group className="mb-3">
          <Form.Label>Endereço de e-mail</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleChange}
            placeholder="Insira o endereço de e-mail cadastrado"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleChange}
            placeholder="Insira a senha cadastrada"
          />
        </Form.Group>
        <Button className="my-3" variant="dark" type="submit">
          Entrar no sistema
        </Button>
      </Form>
      <Form.Text>
        Ainda não possui cadastro? Faça já o
        <Link
          className="text-warning fw-bold text-decoration-none"
          to="/registro"
        >
          {" "}
          cadastro
        </Link>
        .
      </Form.Text>
    </Container>
  );
}

export default LoginForm;
