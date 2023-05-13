import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "pages/inicio";
import Favoritos from "pages/Favoritos";
import Player from "pages/Player";
import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";
import Container from "componentes/Container";
import FavoritosProvider from "Context/Favoritos";
import NaoEncontrada from "pages/NaoEncontratada";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                        <Route path="/:id" element={<Player />}></Route>
                        <Route path="*" element={<NaoEncontrada />}></Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}
export default AppRoutes;