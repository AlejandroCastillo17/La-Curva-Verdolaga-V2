import { Link } from "react-router-dom";

const Navbar = () => { 

    return (
        <nav>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/historia">Historia</Link></li>
            <li><Link to="/leyendas">Leyendas</Link></li>
        </nav>
    )
}

export default Navbar