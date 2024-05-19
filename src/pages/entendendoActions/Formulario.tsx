import { useState } from "react";
import CorpoFormulario from "../../components/template/CorpoFormulario";
import Pagina from "../../components/template/Pagina";
import { Form } from "react-router-dom";

export default function Formulario() {

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);

  function envia(e: any) {
    e.preventDefault();

  }

  return (
    <Pagina titulo="Formulário - entendendo actions">
      <Form method="post" action="/entendendoActions/exibir"
        className="flex flex-col justify-center text-xl text-center">
        <CorpoFormulario nome={nome} setNome={setNome} idade={idade} setIdade={setIdade} />
      </Form>
    </Pagina>
  )
}