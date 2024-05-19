import { Route } from "react-router";
import Formulario from "../pages/entendendoActions/Formulario";
import Exibir from "../pages/entendendoActions/Exibir";
import { actionFormulario } from "../pages/entendendoActions/Exibir"

const rotas = (
  <Route path="entendendoActions">
    <Route index element={<Formulario />} />
    <Route path="exibir" action={actionFormulario} element={<Exibir />} />
  </Route >
);

export default rotas;