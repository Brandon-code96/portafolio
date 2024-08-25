// Importa la imagen del avatar desde la carpeta de assets
import avatar from '../assets/images/avatar.svg'

// Define el componente funcional AboutMe
function AboutMe() {
  return (
    // Contenedor principal con margen superior
    <div className="container mt-4">
      {/* Título centrado con margen inferior */}
      <h3 className="text-center my-4">Acerca de <span className="myName"> mi </span></h3>
      <section>
        <div className="row">
          {/* Columna de 12 columnas en dispositivos pequeños y 6 columnas en dispositivos medianos */}
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <img src={avatar} alt="Avatar" className="w-75 h-75" />
          </div>
          {/* Columna para el texto descriptivo, alineada verticalmente */}
          <div className="col-12 col-md-6 d-flex align-items-center">
            <p className="lh-lg">
              Hola, soy <span className="myName">Brandon</span>, un desarrollador web autodidacta con experiencia en tecnologías web como HTML, CSS, JavaScript, React, Node.js, Spring Boot, SQL, entre otras. Me encanta aprender nuevas tecnologías y compartir mis conocimientos con los demás.<br />
              Actualmente estoy trabajando en mi portafolio personal y en algunos proyectos personales. Si deseas saber más sobre mi, puedes seguirme en mis redes sociales o enviarme un mensaje a través de mi formulario de contacto.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
// Exporta el componente AboutMe
export default AboutMe