import "../styles/home.css";
import TrofeoLibertadores from "../Components/TrofeoLibertadores";
const Inicio = () => {
  return (
    <>
      <div className="contenedor_principal_incio">
        {/* contenedor de los componenetes de presentacion de incio*/}
        <div className="inicio_Presentacion">
          <div className="presentacion_content">
            <div className="content_info">
              {/* contenedor del los labels*/}
              <div className="content_labels">
                <h5>EL CORAZON DE MEDELLIN</h5>
                <div className="labels_texto">
                  <p>SOY DEL VERDE,</p>
                  <p>SOY FELIZ</p>
                </div>
              </div>
              {/* contenedor del elemento 3d */}
              <div className="trofeo_wrapper">
                <TrofeoLibertadores />
              </div>
            </div>
            <div className="content_buttons">
              <button className="buttons join">UNETE A LA HINCHADA </button>
              <button className="buttons whatch">VER HISTORIA</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
