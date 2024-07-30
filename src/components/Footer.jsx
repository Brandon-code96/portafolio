import { faBootstrap, faReact} from "@fortawesome/free-brands-svg-icons";

import Icon from "./Icon"

const icons = {
    react: <Icon icon={faReact}/>,
    bootstrap: <Icon icon={faBootstrap}/>,
}

function Footer ()  {
  return (
    <footer className="bg-dark container mw-100 text-light d-flex justify-content-around p-4">
        <h3>Echo con {icons.react} y {icons.bootstrap}</h3>
        <p>© 2024 - Brandon Ubillus</p>
    </footer>
  )
}

export default Footer