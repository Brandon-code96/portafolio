import Icon from "./icons/Icon";
import { socialLinks } from "./icons/socialLinks";

function Form() {
  const socialKeys = Object.keys(socialLinks);
  return (
    <section id="contact" className="contact my-5">
      <div className="container w-75">
        <div className="d-flex align-items-center row-cols-3 gap-5">

          <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-5">
            <div className="form-group mb-3">
              <input type="text" name="name" className="form-control border border-dark" id="name" placeholder="Tu nombre" required />
            </div>
            <div className="form-group mb-3">
              <input type="email" className="form-control border border-dark" name="email" id="email" placeholder="Tu correo" required />
            </div>
            <div className="form-group mb-3 ">
              <input type="text" className="form-control border border-dark" name="subject" id="subject" placeholder="Tu sitio web"/>
            </div>
            <div className="form-group mb-3">
              <textarea className="form-control border border-dark" name="message" rows="3" placeholder="Mensaje"></textarea>
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-dark">Contáctame</button>
           
              {socialKeys.map((key) => (
                <a key={key} href={socialLinks[key].url} 
                className="text-dark border border-dark p-2 rounded"> 
                  <Icon icon={socialLinks[key].icon}/>
                </a>
              ))}
        
            </div>
          </form>

          <div className="container mt-5">
            <h3 className="myName"> Hablemos <span className="myOficio"> para </span> algo especial </h3>
            <p className="lh-base">Si tienes alguna duda o quieres trabajar conmigo, no dudes en contactarme.</p>
            <p className="fw-bold"> brandonubillusbarraza@gmail.com </p>
          </div>

        </div>


      </div>
    </section>
  )
}

export default Form