import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Logo from "../assets/img/Componentes/logoN.png";
import "../styles/navbar.css";

const NAV_LINKS = [
  { to: "/", label: "HOME" },
  { to: "/historia", label: "HISTORIA" },
  { to: "/leyendas", label: "LEYENDAS" },
  { to: "/galeria", label: "GALERIA" },
  { to: "/comunidad", label: "COMUNIDAD" },
  { to: "/tributos", label: "TRIBUTOS" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const searchInputRef = useRef(null);

  // cierra el buscador al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // cierra el buscador con la tecla Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (isOpen && event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // enfoca el input apenas termina de desplegarse
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => searchInputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      {/*contenedor principal*/}
      <div className="contenedor_principal">
        {/* Logo */}
        <div className="principal_logo">
          <img src={Logo} alt="Club Atlético Nacional" />
        </div>
        {/* navbar */}
        <nav className="navbar">
          <ul className="navbar_lista">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={isOpen ? "navbar_item_active" : "navbar_item"}
                >
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* buscador*/}
        <div
          ref={searchContainerRef}
          className={`input_buscar_container ${isOpen ? "input_buscar_container_active" : ""}`}
        >
          {/*icono buscar*/}
          <button
            type="button"
            className={`icono_buscar ${isOpen ? "icono_buscar_active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar buscador" : "Abrir buscador"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </button>
          {/*input buscar*/}
          <div
            className={`input_buscar ${isOpen ? "input_buscar_active" : ""}`}
          >
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Buscar..."
              aria-label="Buscar en el sitio"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
