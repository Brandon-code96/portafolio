import { faFacebook, faLinkedin, faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";
import Icon from "./Icon"
import Image from '../assets/images/programando.jpg'

const Section = () => {

  const socialLinks = {
    linkedin: <Icon icon={faLinkedin} url={'https://www.linkedin.com'}/>,
    facebook: <Icon icon={faFacebook}/>,
    discord: <Icon icon={faDiscord}/>,
    gitHub: <Icon icon={faGithub}/>
  }
  const keys = Object.keys(socialLinks);

  return (
    <main className="container d-flex align-items-center pt-4">
      <section className="section">
        <div className="d-flex flex-column">
          <h3 className=" lh-lg">Hola soy <span className="myName">Brandon Ubillus Barraza</span> <br />
            <span className="myOficio"> Full Stack Developer</span> 
          </h3>
          <p>
            Mi experiencia en el desarrollo de software me ha permitido trabajar en proyectos de diferentes tamaños y complejidades.
          </p>
        </div>
        <div className="mt-4 d-flex">
          {keys.map((key) => (
            <a key={key} href={socialLinks[key].props.url || '#'} 
            className="text-dark border border-dark p-2 me-4 rounded"> 
              {socialLinks[key]} 
            </a>
          ))}
        </div>
      </section>
      <img src={Image} alt="Hombre programando" className="rounded-circle w-50"/>
    </main>
  )

  
}

export default Section