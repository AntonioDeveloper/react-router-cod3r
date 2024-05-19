import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from '../components/template/Layout';
import rotasTiposDeLink from './tiposDeLinks';
import rotasNavegacaoComNavLink from './navegacaoComNavLink';
import rotasPagina404 from "./pagina404";
import Pagina404 from '../pages/shared/pagina404';
import rotasParametrosDeRota from "./parametrosDeRota";
import rotasParametrosDeBusca from "./parametrosDeBusca";
import rotasEntendendoUseLocation from "./entendendoUseLocation";
import rotasEntendendoActions from './entendendoActions';
import rotasEntendendoLoaders from './entendendoLoaders';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         // path: '',
//         element: <Inicio />
//       },
//       {
//         path: '/info',
//         children: [
//           {
//             path: 'sobre', element: <Sobre />
//           },
//           {
//             path: 'contato',
//             element: <Contato />,
//           }
//         ]
//       }
//     ]
//   },
// ]);

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    {rotasTiposDeLink}
    {rotasNavegacaoComNavLink}
    {rotasPagina404}
    {rotasParametrosDeRota}
    {rotasParametrosDeBusca}
    {rotasEntendendoUseLocation}
    {rotasEntendendoActions}
    {rotasEntendendoLoaders}
    <Route path="*" element={<Pagina404 />} />
  </Route >
));

export default router;