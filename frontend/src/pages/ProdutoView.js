import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Alpha_logo from "../assets/Alpha_logo.jpg";

function ProdutoView() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const carregar = async () => {
      try {
        const res = await api.get(`/produtos/${id}`);
        setProduto(res.data);
      } catch {
        alert("Erro ao carregar produto.");
        window.location.href = "/produtos";
      }
    };
    carregar();
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  return (
    <div className="page-container">
      <div className="view-box">
        <img src={Alpha_logo} alt="logo" className="logo" />
        <h2>Detalhes do Produto</h2>
        <p><strong>Código:</strong> {produto.codigo}</p>
        <p><strong>Descrição:</strong> {produto.descricao}</p>
        <p><strong>Código de Barras:</strong> {produto.codigoBarras}</p>
        <p><strong>Valor de Venda:</strong> R$ {produto.valorVenda.toFixed(2)}</p>
        <p><strong>Peso Bruto:</strong> {produto.pesoBruto}</p>
        <p><strong>Peso Líquido:</strong> {produto.pesoLiquido}</p>
        <br />
        <button onClick={() => window.location.href = "/produtos"}>Voltar</button>
      </div>
    </div>
  );
}

export default ProdutoView;
