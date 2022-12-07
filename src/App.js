import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Usuarios from "./pages/Usuarios";
import UsuariosDetalhes from "./pages/UsuariosDetalhes";
import Atividades from "./pages/Atividades";
import AtividadesDetalhes from "./pages/AtividadesDetalhes";
import Navegacao from "./components/Navegacao";
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "./pages/LoginForm";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { AuthContextComponent } from "./contexts/authContext";
import ProtectedRoute from "./components/ProtectedRoute.js";
function App() {
  return (
    <div className="App">
      {/* <Navegacao isLogged={isLogged} />
      {fetching && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!isLogged && !fetching && (
        <LoginForm
          users={users}
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          setFetching={setFetching}
          setNivelUser={setNivelUser}
          setIdUser={setIdUser}
        />
      )} */}
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/perfil"
            element={<ProtectedRoute Component={Profile} />}
          />
          <Route path="/atividades" element={<Atividades />} />
          <Route path="/:idUsuario" element={<UsuariosDetalhes />} />
          <Route path="/:idAtividade" element={<AtividadesDetalhes />} />
          <Route path="/admin" element={<Usuarios />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" />
        </Routes>
      </AuthContextComponent>
    </div>
  );
}

export default App;
