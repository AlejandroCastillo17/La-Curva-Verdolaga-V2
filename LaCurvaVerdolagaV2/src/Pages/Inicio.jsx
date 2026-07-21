import "../styles/home.css";
import { useState } from "react";
import TrofeoLibertadores from "../Components/TrofeoLibertadores";
import img1 from "../assets/img/homeImage/img1.jpg";
import img2 from "../assets/img/homeImage/img2.jpg";
import img3 from "../assets/img/homeImage/img3.jpg";
import img4 from "../assets/img/homeImage/img4.jpg";
import img5 from "../assets/img/homeImage/img5.jpg";
import img6 from "../assets/img/homeImage/img6.jpg";
import img7 from "../assets/img/homeImage/img7.jpg";
import img8 from "../assets/img/homeImage/img8.jpg";

const Inicio = () => {
  const [conteo, setConteo] = useState(0);
  const data = [
    {
      id: 1,
      info: "abuelo celebrando",
      img: img1,
    },
    {
      id: 2,
      info: "hinchada verdolaga",
      img: img2,
    },
    {
      id: 3,
      info: "bufanda verdolaga",
      img: img3,
    },
    {
      id: 4,
      info: "manos arriba ",
      img: img4,
    },
    {
      id: 5,
      info: "La Escuadra y el Escudo",
      img: img5,
    },
    {
      id: 6,
      info: "bandera del rey de copas",
      img: img6,
    },
    {
      id: 7,
      info: "chute definitivo",
      img: img7,
    },
    {
      id: 8,
      info: "celebracion",
      img: img8,
    },
  ];

  const atras = () => {
    if (conteo > 0) {
      setConteo(conteo - 1);
    }
  };
  const siguiente = () => {
    if (conteo < data.length - 3) {
      setConteo(conteo + 1);
    }
  };

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
        {/*navegacion dentro del incio*/}
        <div className="inicio_secciones">
          {/*contenedor para centrar la seccion de secciones*/}
          <div className="secciones_contenedor">
            {/* contenedor para cabecera de secciones*/}
            <div className="contenedor_header">
              {/* contenedor para titulo de cabecera*/}
              <div className="header_title">
                <h1>NAVEGACION VERDOLAGA</h1>
              </div>
              <p>
                Explora los rincones de nuestra historia, revive los momentos de
                gloria y conecta con la comunidad más grande del país.
              </p>
            </div>
            {/*contenedor para contenido principal de segunda seccion de secciones*/}
            <div className="contenedor_contenido">
              {/*HISTORIA*/}
              <div className="contenido_seccion historia">
                <svg
                  className="seccion_icono_fondo "
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 8l0 4l2 2" />
                  <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 8l0 4l2 2" />
                  <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
                </svg>
                <div className="seccion_title">
                  <p>HISTORIA</p>
                  <span>Desde 1947 construyendo el sueño continental.</span>
                </div>
              </div>
              {/*LEYENDAS*/}
              <div className="contenido_seccion leyendas">
                <svg
                  className="seccion_icono_fondo "
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffb700"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M8 21l8 0" />
                  <path d="M12 17l0 4" />
                  <path d="M7 4l10 0" />
                  <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                  <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffb700"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M8 21l8 0" />
                  <path d="M12 17l0 4" />
                  <path d="M7 4l10 0" />
                  <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                  <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                </svg>
                <div className="seccion_title">
                  <p>LEYENDAS</p>
                  <span>Los ídolos que forjaron la gloria eterna.</span>
                </div>
              </div>
              {/*GALERIA*/}
              <div className="contenido_seccion galeria">
                <svg
                  className="seccion_icono_fondo "
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 3m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                  <path d="M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1" />
                  <path d="M17 7h.01" />
                  <path d="M7 13l3.644 -3.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" />
                  <path d="M15 12l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l2.644 2.644" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 3m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                  <path d="M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1" />
                  <path d="M17 7h.01" />
                  <path d="M7 13l3.644 -3.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" />
                  <path d="M15 12l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l2.644 2.644" />
                </svg>

                <div className="seccion_title">
                  <p>GALERIA</p>
                  <span>Capturando la pasión en cada ángulo.</span>
                </div>
              </div>
              {/*COMUNIDAD*/}
              <div className="contenido_seccion comunidad">
                <svg
                  className="seccion_icono_fondo "
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fefefe"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                  <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                  <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fefefe"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                  <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                  <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
                </svg>
                <div className="seccion_title">
                  <p>COMUNIDAD</p>
                  <span>Donde late el corazón del hincha.</span>
                </div>
              </div>
              {/*PODCAST*/}
              <div className="contenido_seccion podcast">
                <svg
                  className="seccion_icono_fondo "
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 18l.01 0" />
                  <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
                  <path d="M6.343 12.343a8 8 0 0 1 11.314 0" />
                  <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 18l.01 0" />
                  <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
                  <path d="M6.343 12.343a8 8 0 0 1 11.314 0" />
                  <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" />
                </svg>
                <div className="seccion_title">
                  <p>PODCAST</p>
                  <span>Relatos que atraviesan generaciones.</span>
                </div>
              </div>
              {/*TRIBUTOS*/}
              <div className="contenido_seccion tributos">
                <svg
                  className="seccion_icono_fondo "
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fdfeff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 4v3m-4 -3v6m8 -6v6" />
                  <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fdfeff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 4v3m-4 -3v6m8 -6v6" />
                  <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
                </svg>

                <div className="seccion_title">
                  <p>TRIBUTOS</p>
                  <span>Homenaje a los grandes hitos.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*carrusel de recuerdos */}
        <div className="contendor_carrusel">
          {/*contenedor cabecera de carrusel*/}
          <div className="carrusel_cabecera">
            <div className="cabecera_titulo">
              <h1>SENTIMIENTO VERDOLAGA</h1>
            </div>
            <p>La tribuna a través del lente de nuestros fans.</p>
          </div>
          {/*carrusel*/}
          <div className="contenedor_marco_carrusel">
            {/*pista*/}
            <div
              className="carrusel_pista"
              style={{
                transform: `translateX(-${conteo * 33.3}%)`,
              }}
            >
              {data.map((dato) => {
                return (
                  <div className="pista_img" key={dato.id}>
                    <img src={dato.img} alt={dato.info} />
                  </div>
                );
              })}
            </div>
            {/*boton para mover a foto anterior*/}
            <button
              className="beforeButton carrusel_buttons"
              onClick={atras}
              disabled={conteo === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </button>
            {/*boton mara mover a la siguiente foto*/}
            <button
              className="afterButton carrusel_buttons"
              onClick={siguiente}
              disabled={conteo === data.length - 3}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </div>
        </div>
        {/*
        <div className="inicio_suscripcion">
          <div className="suscripcion_contenedor">
            <div className="contenedor_contenidoS">
              <h1>Sé parte de la historia</h1>
              <p>
                Recibe noticias exclusivas, preventas de boletería y contenido
                histórico directamente en tu correo.
              </p>
              
              <div className="Contenido_input">
                <input
                  className="input_input"
                  type="text"
                  name=""
                  id=""
                  placeholder="Tu correo electronico"
                />
                <button> SUSCRIBIRME </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Inicio;
