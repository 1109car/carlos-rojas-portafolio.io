import "./recursos.css"
import "./smar-recu.css"
export default function CONREC(children) {
  return (
    <div className="contenedor_recursos">
        <section className="presentacion_primsecc">
            <h3 className="titulo_present">{children.titulo}</h3>
            <p className="parrafo_recur">{children.parrafo}</p>
            <figure className="figura_recur">
                <img src={require("../img/css.png")} alt="css"  className="img_figure"/>
                <img src={require("../img/html.png")} alt="html" className="img_figure"/>
                <img src={require("../img/javascript.png")} alt="javascript" className="img_figure"/>
                <img src={require("../img/nextjs.png")} alt="next" className="img_figure"/>
                <img src={require("../img/nodejs.png")} alt="node" className="img_figure"/>
                <img src={require("../img/react-uno.png")} alt="react" className="img_figure"/>
                
            </figure>
        </section>
        <article className="art_present">
            <img src={require("../img/carlos-uno.png")} className="img_carlos" alt="carlos" />
        </article>
    </div>
  )
}
