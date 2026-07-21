import "../styles/Comunidad.css";
const Comunidad = () => {
  return (
    <>
      <div className="contenedor_principal_comunidad">
        <div className="comunidad_cabecera">
          <h1>El Orgullo de una Nación</h1>
          <p>
            Donde la pasión verdolaga se encuentra. Comparte tus historias,
            demuestra tu conocimiento y conéctate con hinchas de todo el mundo.
          </p>
        </div>
        <section className="comunidad_contenido">
          <div className="contenido_foro">
            <div className="foro_header">
              <h1>FORO DE INCHAS</h1>
              <div className="header_icon">
                <button>Crear Publicacion</button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
              </div>
            </div>
          </div>
          <div className="contenido_extras"></div>
        </section>
      </div>
    </>
  );
};

export default Comunidad;
