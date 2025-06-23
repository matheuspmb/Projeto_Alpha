import { useState } from "react";
import api from "../services/api";
import Layout from "../styles/Layout.css";
import Alpha_logo from "../assets/Alpha_logo.jpg";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/login", {
        usuario: usuario,
        senha: senha
      });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/inicial";
    } catch {
      setErro("Usuário ou senha inválidos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={Alpha_logo} alt="logo" className="logo" />
        <h2>Bem-vindo(a). Faça o login abaixo:</h2>
        <input placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        <input placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button onClick={handleLogin}>Entrar</button>
        {erro && <p style={{ color: "red" }}>{erro}</p>}
      </div>
    </div>
  );
}

export default Login;
