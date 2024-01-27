import "./navs.css"
import "./cellnav.css"
export default function CONAV(children) {
  return (
    <div className="contenedor__navs">
            <nav className="nav">
                <h2 className="titulo_developer">{children.titulo}</h2>
                <ul className="ul">  
                    <li className="li lo"><a href="#inicio" className="nav_a">{children.inicio}</a></li>
                    <li className="li lo"><a href="#inicio" className="nav_a">{children.recursos}</a></li>
                    <li className="li lo"><a href="#inicio" className="nav_a">{children.contacto}</a></li>
    
                </ul>
            </nav>
    </div>
  )
}
function carlos() {
  return(
    <div>tomate</div>
  )
}

