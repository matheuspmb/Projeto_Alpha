import { useState } from "react";
import api from "../services/api";
import Alpha_logo from "../assets/Alpha_logo.jpg";

function ProdutoForm() {
  const [form, setForm] = useState({
    codigo: "",
    descricao: "",
    codigoBarras: "",
    valorVenda: "",
    pesoBruto: "",
    pesoLiquido: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/produtos", {
        ...form,
        valorVenda: parseFloat(form.valorVenda),
        pesoBruto: parseFloat(form.pesoBruto),
        pesoLiquido: parseFloat(form.pesoLiquido),
      });
      alert("Produto cadastrado!");
      window.location.href = "/produtos";
    } catch {
      alert("Erro ao cadastrar produto.");
    }
  };

  return (
    <div className="page-container">
      <div className="view-box">
        <img src={Alpha_logo} alt="logo" className="logo" />
        <h2>Cadastrar Produto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="codigo">Código:</label>
            <input name="codigo" placeholder="Código" value={form.codigo} onChange={handleChange} required />
          </div>

          <div className="form-row">
            <label htmlFor="descricao">Descrição:</label>
            <input name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} required />
          </div>

          <div className="form-row">
            <label htmlFor="codigoBarras">Código de Barras:</label>
            <input name="codigoBarras" placeholder="Código de Barras" value={form.codigoBarras} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label htmlFor="valorVenda">Valor de Venda:</label>
            <input name="valorVenda" placeholder="Valor de Venda" value={form.valorVenda} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label htmlFor="pesoBruto">Peso Bruto:</label>
            <input name="pesoBruto" placeholder="Peso Bruto" value={form.pesoBruto} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label htmlFor="pesoLiquido">Peso Líquido:</label>
            <input name="pesoLiquido" placeholder="Peso Líquido" value={form.pesoLiquido} onChange={handleChange} />
          </div>

          <br />
          <div className="form-row">
            <button type="submit">Salvar</button>
            <button type="button" onClick={() => window.location.href = "/produtos"}>Cancelar</button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default ProdutoForm;
