import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProdutoList from "./components/ProdutoList";
import ProdutoForm from "./pages/ProdutoForm";
import ProdutoEdit from "./pages/ProdutoEdit";
import ProdutoView from "./pages/ProdutoView";
import ClienteList from "./components/ClienteList";
import ClienteForm from "./pages/ClienteForm";
import ClienteEdit from "./pages/ClienteEdit";
import ClienteView from "./pages/ClienteView";
import Inicial from "./pages/Inicial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicial" element={<Inicial />} />
        <Route path="/produtos" element={<ProdutoList />} />
        <Route path="/cadastro-produto" element={<ProdutoForm />} />
        <Route path="/editar-produto/:id" element={<ProdutoEdit />} />
        <Route path="/ver-produto/:id" element={<ProdutoView />} />
        <Route path="/clientes" element={<ClienteList />} />
        <Route path="/cadastro-cliente" element={<ClienteForm />} />
        <Route path="/editar-cliente/:id" element={<ClienteEdit />} />
        <Route path="/ver-cliente/:id" element={<ClienteView />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
