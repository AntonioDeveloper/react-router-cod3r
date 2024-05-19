import { Route } from "react-router";
import Produtos from "../pages/parametrosDeRota/Produtos";
import Produto from "../components/parametrosDeRota/Produtos";

const rotas = <Route path="parametrosDeRota" element={<Produtos />}>
  <Route path=":nome/:preco" element={<Produto />}></Route>
</Route>

export default rotas;