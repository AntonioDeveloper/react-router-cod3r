import { Route } from "react-router";
import Produtos from "../pages/parametrosDeBusca/Produtos";
import Produto from "../components/parametrosDeBusca/Produtos";

const rotas = <Route path="parametrosDeBusca" element={<Produtos />}>
  <Route index element={<Produto />}></Route>
</Route>

export default rotas;