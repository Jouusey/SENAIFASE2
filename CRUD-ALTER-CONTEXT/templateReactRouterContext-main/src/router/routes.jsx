import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import AlterarProduto from "../pages/AlterarProduto";
import CadastrarProdutos from "../pages/CadastrarProdutos";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
     {path: "/alterarproduto", element: <AlterarProduto />},
     {path: "/cadastrarprodutos", element: <CadastrarProdutos />}
])

export default router;
