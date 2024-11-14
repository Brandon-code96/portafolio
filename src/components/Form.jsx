import { useState } from 'react';
import Icon from "./icons/Icon";
import { socialLinks } from "./icons/socialLinks";
import axios from 'axios';

// Define el componente Form
function Form() {
  // Define el estado inicial del formulario con useState
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Define la función handleChange para actualizar el estado del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Define la función handleSubmit para enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envía el formulario al servidor con axios
      // http://localhost:3001/send
      const response = await axios.post('https://brandonub-dev.up.railway.app/send', formData);
      alert(response.data);
    } catch (error) {
      alert('Error al enviar el correo');
    }
  };

  // Obtiene las llaves del objeto socialLinks
  const socialKeys = Object.keys(socialLinks);

  return (
    // Crea una sección de contacto con un formulario y enlaces a redes sociales
    <section id="contact" className="contact my-5">
      <div className="container w-75">
        <div className="d-flex flex-column flex-md-row align-items-center gap-45">
          {/* Formulario de contacto */}
          <form onSubmit={handleSubmit} className="php-email-form mt-5">
            {/* Campo de entrada para el nombre */}
            <div className="form-group mb-3">
              <input 
                type="text" 
                name="name" 
                className="form-control border border-dark" 
                id="name" 
                placeholder="Tu nombre" 
                required 
                onChange={handleChange} 
              />
            {/* Campo de entrada para el correo */}
            </div>
            <div className="form-group mb-3">
              <input 
                type="email" 
                className="form-control border border-dark" 
                name="email" 
                id="email" 
                placeholder="Tu correo" 
                required 
                onChange={handleChange} 
              />
            </div>
            {/* Campo de entrada para el asunto */}
            <div className="form-group mb-3 ">
              <input 
                type="text" 
                className="form-control border border-dark" 
                name="subject" 
                id="subject" 
                placeholder="Asunto" 
                onChange={handleChange} 
              />
            </div>
            {/* Campo de entrada para el mensaje */}
            <div className="form-group mb-3">
              <textarea 
                className="form-control border border-dark" 
                name="message" 
                rows="3" 
                placeholder="Mensaje" 
                onChange={handleChange}>
              </textarea>
            </div>
            {/* Botón de envío y enlaces a redes sociales */}
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-dark me-3">Contáctame</button>
              {socialKeys.map((key) => (
                <a 
                  key={key} 
                  href={socialLinks[key].url} 
                  className="text-dark border border-dark p-2 m-1 rounded"
                >
                  <Icon icon={socialLinks[key].icon} />
                </a>
              ))}
            </div>
          </form>
          {/* Información de contacto */}
          <div className="container mt-5 col-12 col-md-6">
            <h3 className="myName"> Hablemos <span className="myOficio"> para </span> algo especial </h3>
            <p className="lh-base">Si tienes alguna duda o quieres trabajar conmigo, no dudes en contactarme.</p>
            <p className="fw-bold"> brandonubillusbarraza@gmail.com </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
// Exporta el componente Form
export default Form;