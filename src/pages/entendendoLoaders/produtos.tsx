import { useEffect, useState } from "react";
import Pagina from "../../components/template/Pagina";
import { Link, useLoaderData } from "react-router-dom";
import ProdutosLoaders from "../../data/models/ProdutosEntendendoLoaders";

export default function Produtos() {

  // const [produtos, setProdutos] = useState<any>([]);

  // useEffect(() => {
  //   (async () => {
  //     const produtosAPI = await pegaProdutos();
  //     setProdutos(produtosAPI);
  //   })();
  // }, []);

  const produtos = useLoaderData() as ProdutosLoaders[];

  //console.log("PRODS", produtos);

  const produtosEmItens = produtos.map(produto => {
    return (
      <li className="text-gray-300 border-gray-300 border-solid border-2 text-center rounded-md p-3 m-2 hover:text-orange-500 hover:border-orange-500" key={produto.id}>
        <Link to={`/entendendoLoaders/${produto.id}`}>
          {produto.id} de nome {produto.title} custa R$ {produto.price}
        </Link>
      </li>
    )
  });

  return (
    <Pagina titulo="Produtos Disponíveis">
      <ul className="p-0 overflow-clip">{produtosEmItens}</ul>
    </Pagina>
  )
}

export async function pegaProdutos() {
  return await fetch("https://fakestoreapi.com/products?limit=10");
  // const dadosJSON = await dados.json();
  // return dadosJSON;
}