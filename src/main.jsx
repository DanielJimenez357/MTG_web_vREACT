import { createRoot } from "react-dom/client";
import Buscador from "./components/Buscador";
import { BrowserRouter, Route, Link, Routes } from "react-router";
import PruebaPag from "./components/PruebaPag";
import Carrito from "./components/Carrito";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Buscador</Link>
            </li>
            <li>
              <Link to="/prueba">Pagina de prueba</Link>
            </li>
            <li>
              <Link to="/Carrito">Carrito</Link>
            </li>
          </ul>
          <h1>Numero de productos en el carrito: <span>0</span></h1>
        </nav>

        <Routes>
          <Route path="/" element={<Buscador />}/>
          <Route path="/prueba" element={<PruebaPag />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<Buscador />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
);
