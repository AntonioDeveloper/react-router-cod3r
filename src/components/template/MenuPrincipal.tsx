import { IconActivity, IconDirectionSign, IconFileAlert, IconLayoutNavbarCollapse, IconLocation, IconMenu, IconRefreshAlert, IconRoute, IconSearch, IconX } from "@tabler/icons-react";
import { MenuItem } from "../../data/models/MenuItem";
import Logo from "./Logo";
import MenuPrincipalItem from "./MenuPrincipalItem";
import Flex from "./Flex";
import { useState } from "react";

const itens: MenuItem[] = [
    { titulo: "Tipos de Links", url: "/tiposDeLinks", icone: <IconLayoutNavbarCollapse /> },
    { titulo: "Navegação Com NavLink", url: "/navegacaoComNavLink", icone: <IconDirectionSign /> },
    { titulo: "Pagina 404", url: "/pagina404", icone: <IconFileAlert /> },
    { titulo: "Parametros de Rota", url: "/parametrosDeRota", icone: <IconRoute /> },
    { titulo: "Parametros de Busca", url: "/parametrosDeBusca", icone: <IconSearch /> },
    { titulo: "Entendendo useLocation", url: "/entendendoUseLocation", icone: <IconLocation /> },
    { titulo: "Entendendo Actions", url: "/entendendoActions", icone: <IconActivity /> },
    { titulo: "Entendendo Loaders", url: "/entendendoLoaders", icone: <IconRefreshAlert /> },
];

export default function MenuPrincipal() {
    const [mini, setMini] = useState(false);

    function renderizarItens() {
        return itens.map((item: MenuItem) => (
            <MenuPrincipalItem key={item.titulo} icone={item.icone} titulo={item.titulo} url={item.url} mini={mini} />
        ));
    }

    return (
        <aside
            className={`
            flex flex-col overflow-y-scroll overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            scrollbar-thin
            ${mini ? "items-center w-[130px]" : "w-[370px]"}
        `}
        >
            <Flex center className="m-7">
                {!mini && <Logo />}
                <div className="cursor-pointer" onClick={() => setMini(!mini)}>
                    {mini ? <IconMenu /> : <IconX />}
                </div>
            </Flex>
            <nav className="flex flex-col gap-4 m-7">{renderizarItens()}</nav>
        </aside>
    );
}
