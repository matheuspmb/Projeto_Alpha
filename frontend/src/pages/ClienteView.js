import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Layout from "../styles/Layout.css"
import Alpha_logo from "../assets/Alpha_logo.jpg";

function ClienteView() {
  const { id } = useParams();
  const [cliente, setCliente] = useState(null);

  useEffect(() => {
    const carregar = async () => {
      const res = await api.get(`/clientes/${id}`);
      setCliente(res.data);
    };
    carregar();
  }, [id]);

  if (!cliente) return <p>Carregando...</p>;

  return (
    <div className="page-container">
      <div className="form-box">
        <img src={Alpha_logo} alt="logo" className="logo" />
        <h2>Detalhes do Cliente</h2>
        <p><strong>Código:</strong> {cliente.codigo}</p>
        <p><strong>Nome:</strong> {cliente.nome}</p>
        <p><strong>Fantasia:</strong> {cliente.fantasia}</p>
        <p><strong>Documento:</strong> {cliente.documento}</p>
        <p><strong>Endereço:</strong> {cliente.endereco}</p>
        <br />
        <button onClick={() => window.location.href = "/clientes"}>Voltar</button>
      </div>
    </div>
  );
}

export default ClienteView;
