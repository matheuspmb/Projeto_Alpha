import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Alpha_logo from "../assets/Alpha_logo.jpg";

function ProdutoEdit() {
  const { id } = useParams();
  const [form, setForm] = useState({
    codigo: "",
    descricao: "",
    codigoBarras: "",
    valorVenda: "",
    pesoBruto: "",
    pesoLiquido: "",
  });

  useEffect(() => {
    const carregar = async () => {
      try {
        const res = await api.get(`/produtos/${id}`);
        setForm(res.data);
      } catch {
        alert("Erro ao carregar produto.");
        window.location.href = "/produtos";
      }
    };
    carregar();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await api.put(`/produtos/${id}`, {
      ...form,
      valorVenda: parseFloat(form.valorVenda),
      pesoBruto: parseFloat(form.pesoBruto),
      pesoLiquido: parseFloat(form.pesoLiquido)
    });
    alert("Produto atualizado!");
    window.location.href = "/produtos";
  } catch (err) {
    if (err.response?.status === 400) {
      const mensagens = Object.values(err.response.data).flat();
      alert("Erros:\n" + mensagens.join("\n"));
    } else {
      alert("Erro ao atualizar produto.");
    }
  }
};

  return (
    <div className="page-container">
      <div className="form-box">
        <img src={Alpha_logo} alt="logo" className="logo" />
        <h2>Editar Produto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="codigo">Código:</label>
            <input id="codigo" name="codigo" value={form.codigo} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label htmlFor="descricao">Descrição:</label>
            <input id="descricao" name="descricao" value={form.descricao} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label htmlFor="codigoBarras">Código de Barras:</label>
            <input id="codigoBarras" name="codigoBarras" value={form.codigoBarras} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label htmlFor="valorVenda">Valor de Venda:</label>
            <input id="valorVenda" name="valorVenda" value={form.valorVenda} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label htmlFor="pesoBruto">Peso Bruto:</label>
            <input id="pesoBruto" name="pesoBruto" value={form.pesoBruto} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label htmlFor="pesoLiquido">Peso Líquido:</label>
            <input id="pesoLiquido" name="pesoLiquido" value={form.pesoLiquido} onChange={handleChange} />
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

export default ProdutoEdit;
