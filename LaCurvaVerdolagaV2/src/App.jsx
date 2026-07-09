import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout.jsx";
import Inicio from "./Pages/Inicio.jsx";
import Historia from "./Pages/Historia.jsx";
import Leyendas from "./Pages/Leyendas.jsx";
import Galeria from "./Pages/Galeria.jsx";
import Comunidad from "./Pages/Comunidad.jsx";
import Tributos from "./Pages/Tributos.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/leyendas" element={<Leyendas />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/comunidad" element={<Comunidad />} />
            <Route path="/tributos" element={<Tributos />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
