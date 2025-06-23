import { useEffect, useState } from "react";
import api from "../services/api";
import Alpha_logo from "../assets/Alpha_logo.jpg";

function ProdutoList() {
  const [produtos, setProdutos] = useState([]);

  const carregarProdutos = async () => {
    try {
      const res = await api.get("/produtos");
      setProdutos(res.data);
    } catch (err) {
      alert("Erro ao buscar produtos. Faça login novamente.");
      window.location.href = "/";
    }
  };

  const deletar = async (id) => {
    if (!window.confirm("Deseja deletar esse produto?")) return;

    try {
      await api.delete(`/produtos/${id}`);
      carregarProdutos();
    } catch {
      alert("Erro ao deletar.");
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <div className="page-container">
      <div className="view-box">
        <img src={Alpha_logo} alt="logo" className="logo" />
        <h2>Lista de Produtos</h2>
        <div className="form-row">
          <button onClick={() => window.location.href = "/cadastro-produto"}>Novo Produto</button>
          <button onClick={() => window.location.href = "/inicial"}>Voltar</button>
        </div>
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Código</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map(p => (
              <tr key={p.id}>
                <td>{p.codigo}</td>
                <td>{p.descricao}</td>
                <td data-label="Ações">
                  <div className="action-buttons">
                    <button onClick={() => window.location.href = `/ver-produto/${p.id}`}>Ver</button>
                    <button onClick={() => window.location.href = `/editar-produto/${p.id}`}>Editar</button>
                    <button onClick={() => deletar(p.id)}>Excluir</button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProdutoList;
