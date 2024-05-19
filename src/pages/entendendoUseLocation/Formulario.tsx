import { useState } from "react";
import CorpoFormulario from "../../components/template/CorpoFormulario";
import Pagina from "../../components/template/Pagina";
import { useNavigate } from "react-router-dom";

export default function Formulario() {

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);

  const navigate = useNavigate();

  function envia(e: any) {
    e.preventDefault();
    navigate("/entendendoUseLocation/exibir", { state: { nome: !!nome ? nome : "desconhecido", idade: idade } });
  }

  return (
    <Pagina titulo="Formulário - useLocation">
      <form method="post" onSubmit={envia}
        className="flex flex-col justify-center text-xl text-center">
        <CorpoFormulario nome={nome} setNome={setNome} idade={idade} setIdade={setIdade} />
      </form>
    </Pagina>
  )
}