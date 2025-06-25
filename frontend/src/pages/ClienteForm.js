import { useState } from "react";
import api from "../services/api";
import Layout from "../styles/Layout.css"
import Alpha_logo from "../assets/Alpha_logo.jpg";

function ClienteForm() {
  const [form, setForm] = useState({
    codigo: "",
    nome: "",
    fantasia: "",
    documento: "",
    endereco: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/clientes", form);
      alert("Cliente cadastrado!");
      window.location.href = "/clientes";
    } catch (err) {
      if (err.response) {
        const { status, data } = err.response;

        if (status === 400 && typeof data === 'object') {
          const mensagens = Object.entries(data)
            .map(([campo, erros]) => {
              if (Array.isArray(erros)) return `${campo}: ${erros.join(", ")}`;
              return `${campo}: ${erros}`;
            });
          alert("Erros de validação:\n" + mensagens.join("\n"));
        } else if (status === 401) {
          alert(data.mensagem || "Não autorizado. Verifique login ou token.");
        } else if (status === 404) {
          alert("Recurso não encontrado.");
        } else if (status === 500) {
          alert("Erro interno do servidor. Tente novamente mais tarde.");
        } else {
          alert(data.mensagem || "Erro inesperado.");
        }

      } else {
        alert("Erro na conexão com o servidor.");
      }
    }
  };

  return (
    <div className="page-container">
      <div className="form-box">
        <img src={Alpha_logo} alt="logo" className="logo" />
        <h2>Cadastrar Cliente</h2>
        <form onSubmit={handleSubmit}>

          <div className="form-row">
            <label htmlFor="codigo">Código:</label>
            <input name="codigo" placeholder="Código" value={form.codigo} onChange={handleChange} required />
          </div>

          <div className="form-row">
            <label htmlFor="nome">Nome:</label>
            <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
          </div>

          <div className="form-row">
            <label htmlFor="fantasia">Fantasia:</label>
            <input name="fantasia" placeholder="Fantasia" value={form.fantasia} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label htmlFor="documento">Documento:</label>
            <input name="documento" placeholder="Documento" value={form.documento} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label htmlFor="endereco">Endereço:</label>
            <input name="endereco" placeholder="Endereço" value={form.endereco} onChange={handleChange} />
          </div>

          <br />
          <div className="form-row">
            <button type="submit">Salvar</button>
            <button type="button" onClick={() => window.location.href = "/clientes"}>Cancelar</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default ClienteForm;