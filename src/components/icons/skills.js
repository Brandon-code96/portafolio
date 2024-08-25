// Importa los iconos de FontAwesome necesarios
import { faHtml5, faCss3, faJs, faBootstrap, faReact, faJava, faGit, faNodeJs} from "@fortawesome/free-brands-svg-icons";

/**
 * Objeto que representa las habilidades
 * Cada clave es una habilidad y su valor es un objeto que contiene:
 * - icon: El icono de FontAwesome que representa la habilidad.
 * - color: El color asociado con la habilidad.
 */
export const mySkills = {
    html:       { icon: faHtml5, color: '#e34c26' },
    css:        { icon: faCss3, color: '#264de4' },
    js:         { icon: faJs, color: '#f0db4f' },
    bootstrap:  { icon: faBootstrap, color: '#563d7c' },
    react:      { icon: faReact, color: '#61dafb' },
    java:       { icon: faJava, color: '#007396' },
    git:        { icon: faGit, color: '#f1502f' },
    nodeJs:     { icon: faNodeJs, color: '#68a063' }
}