import { useEffect, useState } from "react";
import api from "../services/api";
import Alpha_logo from "../assets/Alpha_logo.jpg";

function ClienteList() {
  const [clientes, setClientes] = useState([]);

  const carregar = async () => {
    try {
      const res = await api.get("/clientes");
      setClientes(res.data);
    } catch {
      alert("Erro ao buscar clientes");
    }
  };

  const deletar = async (id) => {
    if (!window.confirm("Deseja deletar esse cliente?")) return;
    await api.delete(`/clientes/${id}`);
    carregar();
  };

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div className="page-container">
      <div className="view-box">
        <img src={Alpha_logo} alt="logo" className="logo" />
        <h2>Lista de Clientes</h2>
        <div className="form-row">
          <button onClick={() => window.location.href = "/cadastro-cliente"}>Novo Cliente</button>
          <button onClick={() => window.location.href = "/inicial"}>Voltar</button>
        </div>
        <table border="1">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(c => (
              <tr key={c.id}>
                <td>{c.codigo}</td>
                <td>{c.nome}</td>
                <td data-label="Ações">
                  <div className="action-buttons">
                    <button onClick={() => window.location.href = `/ver-cliente/${c.id}`}>Ver</button>
                    <button onClick={() => window.location.href = `/editar-cliente/${c.id}`}>Editar</button>
                    <button onClick={() => deletar(c.id)}>Excluir</button>
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

export default ClienteList;
