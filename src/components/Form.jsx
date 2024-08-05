import { useState } from 'react';
import Icon from "./icons/Icon";
import { socialLinks } from "./icons/socialLinks";
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/send', formData);
      alert(response.data);
    } catch (error) {
      alert('Error al enviar el correo');
    }
  };

  const socialKeys = Object.keys(socialLinks);
  return (
    <section id="contact" className="contact my-5">
      <div className="container w-75">
        <div className="d-flex flex-column flex-md-row align-items-center gap-45">
          <form onSubmit={handleSubmit} className="php-email-form mt-5">
            <div className="form-group mb-3">
              <input type="text" name="name" className="form-control border border-dark" id="name" placeholder="Tu nombre" required onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
              <input type="email" className="form-control border border-dark" name="email" id="email" placeholder="Tu correo" required onChange={handleChange} />
            </div>
            <div className="form-group mb-3 ">
              <input type="text" className="form-control border border-dark" name="subject" id="subject" placeholder="Tu sitio web" onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
              <textarea className="form-control border border-dark" name="message" rows="3" placeholder="Mensaje" onChange={handleChange}></textarea>
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-dark me-3">Contáctame</button>
              {socialKeys.map((key) => (
                <a key={key} href={socialLinks[key].url} className="text-dark border border-dark p-2 m-1 rounded">
                  <Icon icon={socialLinks[key].icon} />
                </a>
              ))}
            </div>
          </form>

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

export default Form;