import { Link, useLoaderData } from "react-router-dom";
import Pagina from "../../components/template/Pagina";
import ProdutosLoaders from "../../data/models/ProdutosEntendendoLoaders";

export default function VisualizarProduto() {

  const produto = useLoaderData() as ProdutosLoaders;

  const { title, description, price } = produto;

  return (
    <Pagina titulo={title}>
      <p className="w-full m-2 text-center overflow-w-auto max-h-48">
        {description}
      </p>
      <p className="text-bolder text-center m-2">R$ {price}</p>
      <button className={`bg-zinc-700 text-white p-2 w-full rounded-md hover:bg-orange-500`}>
        <Link to="..">Voltar</Link>
      </button>
    </Pagina>
  )
}

export async function pegaProduto(props) {

  const dados = await fetch(`https://fakestoreapi.com/products/${props.params.id}`);
  const dadosJSON = await dados.json();

  const { description, price, title } = dadosJSON;

  return { description, price, title };

}