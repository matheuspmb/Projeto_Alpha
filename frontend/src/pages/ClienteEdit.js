import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Layout from "../styles/Layout.css"
import Alpha_logo from "../assets/Alpha_logo.jpg";

function ClienteEdit() {
  const { id } = useParams();
  const [form, setForm] = useState({
    codigo: "",
    nome: "",
    fantasia: "",
    documento: "",
    endereco: "",
  });

  useEffect(() => {
    const carregar = async () => {
      const res = await api.get(`/clientes/${id}`);
      setForm(res.data);
    };
    carregar();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await api.put(`/clientes/${id}`, form);
    alert("Cliente atualizado!");
    window.location.href = "/clientes";
  } catch (err) {
    if (err.response?.status === 400) {
      const mensagens = Object.values(err.response.data).flat();
      alert("Erros:\n" + mensagens.join("\n"));
    } else {
      alert("Erro ao atualizar cliente.");
    }
  }
};

  return (
    <div className="page-container">
      <div className="form-box">
        <img src={Alpha_logo} alt="logo" className="logo" />
        <h2>Editar Cliente</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="codigo">Código:</label>
            <input id="codigo" name="codigo" value={form.codigo} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label htmlFor="nome">Nome:</label>
            <input id="nome" name="nome" value={form.nome} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label htmlFor="fantasia">Fantasia:</label>
            <input id="fantasia" name="fantasia" value={form.fantasia} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label htmlFor="documento">Documento:</label>
            <input id="documento" name="documento" value={form.documento} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label htmlFor="endereco">Endereço:</label>
            <input id="endereco" name="endereco" value={form.endereco} onChange={handleChange} />
          </div>

          <div className="form-row">
            <button type="submit">Salvar</button>
            <button type="button" onClick={() => window.location.href = "/clientes"}>Cancelar</button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default ClienteEdit;
