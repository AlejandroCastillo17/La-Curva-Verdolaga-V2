import "../styles/Historia.css";
import nal1947 from "../assets/img/Historia/nal1947.jpg";
import nal1954 from "../assets/img/Historia/nal1954.jpg";
import nal1989 from "../assets/img/Historia/nal1989.jpg";
import nal2016 from "../assets/img/Historia/nal2016.jpg";
import PE from "../assets/img/Escudos/1E.png";
import SE from "../assets/img/Escudos/2E.png";
import TE from "../assets/img/Escudos/3E.png";
import CE from "../assets/img/Escudos/4E.png";
import QE from "../assets/img/Escudos/5E.png";
import SEx from "../assets/img/Escudos/6E.png";
import SpE from "../assets/img/Escudos/7E.png";
import OE from "../assets/img/Escudos/8E.png";
import liga from "../assets/img/Trofeos/liga.png"
import libertadores from "../assets/img/Trofeos/libertadores.png"
import copa from "../assets/img/Trofeos/copa.png"
import superliga from "../assets/img/Trofeos/superliga.png"
import merconorte from "../assets/img/Trofeos/merconorte.png"
import interamericana from "../assets/img/Trofeos/interamericana .png"
import recopa from "../assets/img/Trofeos/RecopaSudamericana.png"

const Historia = () => {

  return (
        <div className="Contenedor_Principal_Historia">
            <div className="Contenedor_Historia">
                <h2> EL REY DE COPAS </h2>
                <h1>HISTORIA DE UNA PASIÓN</h1>
                <p> 
                    Desde nuestra fundacón en 1947, Atlético Nacional ha forjado un camino de gloria, 
                    identidad y fútbol lírico que resuena en toda sudamérica.
                </p>
            </div>
            <div className="Contenedor_Descripcion_Historia">

                <div className="fila_L">
                    <div className="bloque_L">
                        <div className="contenedor_titulo_L">
                            <span className="año_L">1947</span>
                            <h2 className="titulo_L">El Nacimiento</h2>
                        </div>
                        <p className="descripcion_L">
                            El 30 de abril de 1947, nace el Club Atlético Municipal de
                            Medellín. El sueño de una región que buscaba representar su
                            identidad antioqueña a través del deporte más hermoso del
                            mundo. Liderado por Alberto Villegas Lopera, el club vestirá
                            las bases de lo que hoy conocemos como el Verde Paisa.
                        </p>
                    </div>

                    <div className="bloque_L bloque_imagen_L">
                        <div className="marco_L marco_verde_L">
                            <img
                                src={nal1947}
                                alt="Equipo Atlético Nacional 1947"
                                className="foto_l"
                            />
                        </div>
                    </div>
                </div>

                
                <div className="fila_R">
                    <div className="bloque_R bloque_imagen_R">
                        <div className="marco_R marco_dorado_R">
                            <img
                                src={nal1954}
                                alt="Liga Colombiana 1954"
                                className="foto_R"
                            />
                        </div>
                    </div>

                    <div className="bloque_R">
                        <div className="contenedor_titulo_R">
                            <span className="año_R">1954</span>
                            <h2 className="titulo_R">Las Primeras Estrellas</h2>
                        </div>
                        <p className="descripcion_R">
                            Atlético Nacional comenzó a forjar su grandeza en el fútbol colombiano 
                            con cuatro títulos locales antes de alcanzar la gloria continental. 
                            En 1954, bajo la guía de Fernando Paternoster, llegó la primera estrella. 
                            Dos décadas después, César López Fretes y Osvaldo Zubeldía lideraron al 
                            equipo hacia nuevas conquistas en 1973 y 1976. Finalmente, en 1981, un gol de 
                            Pedro Juan Ibargüen selló la cuarta corona frente al América de Cali. 
                            Estas victorias cimentaron la identidad verdolaga y prepararon el camino 
                            hacia la epopeya de 1989.
                        </p>
                    </div>
                </div>

                <div className="fila_L">
                    <div className="bloque_L">
                        <div className="contenedor_titulo_L">
                            <span className="año_L">1989</span>
                            <h2 className="titulo_L">Gloria Eterna</h2>
                        </div>
                        <p className="descripcion_L">
                            El triunfo verdolaga trascendió fronteras y convirtió al club en símbolo de 
                            orgullo nacional. Con un fútbol vibrante y jugadores inolvidables, Nacional 
                            abrió el camino para que Colombia se reconociera como potencia en el 
                            continente. Este triunfo no solo fue un título, sino el nacimiento de una 
                            leyenda que inspiró generaciones y consolidó al Verde como referente eterno 
                            del balompié sudamericano.
                        </p>
                    </div>

                    <div className="bloque_L bloque_imagen_L">
                        <div className="marco_L marco_verde_L">
                            <img
                                src={nal1989}
                                alt="Copa Libertadores 1989"
                                className="foto_l"
                            />
                        </div>
                    </div>
                </div>

                <div className="fila_R">
                    <div className="bloque_R bloque_imagen_R">
                        <div className="marco_R marco_dorado_R">
                            <img
                                src={nal2016}
                                alt="Copa Libertadores 2016"
                                className="foto_R"
                            />
                        </div>
                    </div>

                    <div className="bloque_R">
                        <div className="contenedor_titulo_R">
                            <span className="año_R">2016</span>
                            <h2 className="titulo_R">LA RECONQUISTA</h2>
                        </div>
                        <p className="descripcion_R">
                            Reinaldo Rueda condujo a un equipo imparable hacia su segunda estrella 
                            continental. Con un estilo de fútbol arrollador liderado por Miguel Borja, 
                            Alejandro Guerra y Franco Armani, Nacional dominó la edición de principio a 
                            fin. La consagración llegó en casa, frente a Independiente del Valle, 
                            ante una multitud vestida de verde y blanco.
                        </p>
                    </div>
                </div>

            </div>
            <div className="Contenedor_Escudos_Historia">
                <div className="cont">
                    <h2>Evolución del escudo</h2>
                    <div className="Contenedor_Escudos">

                        <div className="Escudo">
                            <img src={PE} alt="Escudo 1935 - 1946"/>
                            <p>1935 - 1946</p>
                        </div>

                        <div className="Escudo">
                            <img src={SE} alt="Escudo 1947 - 1950"/>
                            <p>1947 - 1950</p>
                        </div>

                        <div className="Escudo">
                            <img src={TE} alt="Escudo 1950 - 1953"/>
                            <p>1950 - 1953</p>
                        </div>

                        <div className="Escudo">
                            <img src={CE} alt="Escudo 1954 - 1988"/>
                            <p>1954 - 1988</p>
                        </div>

                        <div className="Escudo">
                            <img src={QE} alt="Escudo 1989 - 1993"/>
                            <p>1989 - 1993</p>
                        </div>

                        <div className="Escudo">
                            <img src={SEx} alt="Escudo 1994 - 1995"/>
                            <p>1994 - 1995</p>
                        </div>

                        <div className="Escudo">
                            <img src={SpE} alt="Escudo 1996 - 1999"/>
                            <p>1996 - 1999</p>
                        </div>

                        <div className="Escudo">
                            <img src={OE} alt="Escudo 2000 - Actualidad"/>
                            <p>2000 - Actualidad</p>
                        </div>

                    </div> 
                </div>
            </div>
            <div className="Contenedor_Titulos_Historia">
                <div className="cont_t">
                    <h2>Vitrina de Trofeos</h2>
                    <div className="Contenedor_Titulos">
                        <div className="bloque_verde">
                            <img src={liga} alt="Trofeo Liga Colombiana"/>
                            <h3>18</h3>
                            <p>Ligas Colombianas</p>
                        </div>
                        <div className="bloque_dorado">
                            <img src={copa} alt="Trofeo Copa Colombia"/>
                            <h3>8</h3>
                            <p>Copas Colombia</p>
                        </div>
                        <div className="bloque_verde">
                            <img src={superliga} alt="Trofeo Superliga Colombiana"/>
                            <h3>4</h3>
                            <p>Superligas Colombia</p>
                        </div>
                        <div className="bloque_dorado">
                            <img src={libertadores} alt="Trofeo Copa Libertadores"/>
                            <h3>2</h3>
                            <p>Copas libertadores</p>
                        </div>
                        <div className="bloque_verde">
                            <img src={merconorte} alt="Trofeo Copa Merconorte"/>
                            <h3>2</h3>
                            <p>Copas Merconorte</p>
                        </div>                        
                        <div className="bloque_dorado">
                            <img src={interamericana} alt="Trofeo Copa Interamericana"/>
                            <h3>2</h3>
                            <p>Copas Interamericanas</p>
                        </div>    
                        <div className="bloque_verde">
                            <img src={recopa} alt="Trofeo Copa Recopa Sudamericana"/>
                            <h3>1</h3>
                            <p>Recopa Sudamericana</p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Historia;