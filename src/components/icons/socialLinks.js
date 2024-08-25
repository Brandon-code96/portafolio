// Importa los iconos de FontAwesome para las diferentes redes sociales
import { faFacebook, faLinkedin, faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

/**
 * Objeto que representa los enlaces a redes sociales
 * Cada clave es una red social y su valor es un objeto que contiene:
 * - icon: El icono de FontAwesome que representa la red social.
 * - url: La URL del perfil en la red social.
 */
export const socialLinks = {
    linkedin: {icon: faLinkedin, url: 'https://www.linkedin.com/in/brandon-ubillus-barraza-ba5364130/'},
    facebook: {icon: faFacebook, url: 'https://www.facebook.com/brandon.ubillusbarraza/'},
    discord:  {icon: faDiscord, url: '#'},
    gitHub:   {icon: faGithub, url: 'https://github.com/Brandon-code96'},
}