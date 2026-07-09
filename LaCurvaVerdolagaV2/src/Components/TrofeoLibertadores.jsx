const TrofeoLibertadores = () => {
  return (
    <div className="trofeo_container">
      <model-viewer
        src="/models/copa-libertadores.glb"
        alt="Trofeo Copa Libertadores 2021"
        auto-rotate
        rotation-per-second="90deg"
        shadow-intensity="1"
        exposure="1"
      ></model-viewer>
    </div>
  );
};

export default TrofeoLibertadores;
