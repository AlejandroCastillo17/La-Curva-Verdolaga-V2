import { Link } from "react-router-dom";
import "../Styles/Footer.css";

const Footer = () => {

    return (
        <div className="ContenedorPrincipal">
            <div className="p1">
                <div className="descripcion">
                    <h2> ATLÉTICO NACIONAL </h2>
                    <p>
                        El portal definitivo para el hincha verdolaga.
                        Historia, pasión y gloria en un solo lugar.
                        Manteniendo viva la historia del equipo más laureado de Colombia.
                        Un tributo a nuestros colores y a quienes los hicieron grandes.
                    </p>
                </div>
                <div className="navegacion">
                    <h2>Navegación</h2>
                    <ul>
                        <li><Link className="link" to="/">Inicio</Link></li>
                        <li><Link className="link" to="/historia">Historia</Link></li>
                        <li><Link className="link" to="/leyendas">Leyendas</Link></li>
                    </ul>
                </div>
                <div className="redes">
                    <h2>Redes sociales</h2>
                    <div className="contenedor-iconos">
                        <div className="iconos">
                            <a href="https://www.instagram.com/nacionaloficial/?hl=es-la" target="_blank" rel="noopener noreferrer">
                                <svg 
                                    className="icono" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="32" 
                                    height="32" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="#00843D" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
                                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M16.5 7.5v.01" />
                                </svg>
                            </a>
                        </div>
                        <div className="iconos">
                            <a href="https://www.facebook.com/nacionaloficial/?locale=es_LA" target="_blank" rel="noopener noreferrer">
                                <svg 
                                    className="icono" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="32" 
                                    height="32" 
                                    viewBox="0 0 24 24"
                                    fill="none" 
                                    stroke="#00843D" 
                                    stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline 
                                    icon-tabler-brand-facebook"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                            </a>
                        </div>
                        <div className="iconos">
                            <a href="https://x.com/nacionaloficial" target="_blank" rel="noopener noreferrer">
                                <svg
                                    className="icono" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="32" 
                                    height="32" 
                                    viewBox="0 0 24 24"
                                    fill="none" 
                                    stroke="#00843D" 
                                    stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline 
                                    icon-tabler-brand-x"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4l11.733 16h4.267l-11.733 -16l-4.267 0" />
                                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="p2">
                <h2>Desarrollado por:</h2>
                <div className="desarrolladores">
                    <a href="https://alejandro-portfolio-rho.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Diego Alejandro Castillo Perez
                    </a>
                    <span> | </span>
                    <a href="https://github.com/JuanTB300405" target="_blank" rel="noopener noreferrer">
                        Juan Manuel Tejada Bustamante
                    </a>
                </div>
                <h2>© 2026 Fan Page Atletico Nacional. Este sitio es un tributo no oficial.</h2>
                <p className="trofeo_credito">
                    Modelo{" "}
                    <a
                        href="https://sketchfab.com/3d-models/copa-libertadores-2021-86364bb90136400d9a707142b6395436"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        "Copa Libertadores 2021"
                    </a>{" "}
                    por{" "}
                    <a
                        href="https://sketchfab.com/mbodeant43"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        mbodeant43
                    </a>
                    , licencia{" "}
                    <a
                        href="http://creativecommons.org/licenses/by/4.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CC BY 4.0
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer;