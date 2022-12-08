import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api.js";
import toast from "react-hot-toast";
const Register = (props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [img, setImg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    //se quiser limitar tamanho da foto aqui é o lugar com e.target.files[0].size
    setImg(e.target.files[0]);
  };
  const handleUpload = async () => {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", img);
      const response = await api.post("/upload-image", uploadData);
      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.password !== form.confirmPassword) {
        toast.error("As senhas são incompatíveis!");
        return;
      }
      const imgURL = await handleUpload();
      // criar a requisição para enviar este novo usuário
      // requisição método POST
      await api.post("/usuario/create", { ...form, profileImg: imgURL });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira um nome"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Endereço de email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Insira um e-mail"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Imagem de perfil</Form.Label>
          <Form.Control
            type="file"
            placeholder="Insira um e-mail"
            onChange={handleImage}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Insira uma senha"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirmar Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirme sua senha criada"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar usuário
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
