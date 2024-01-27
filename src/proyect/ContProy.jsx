import "./proyectos.css"

export default function ContProy(children) {
  return (
    <div className='cont_proyect'>
        <div className="cont_card_proyect">
            <figure className="card_cont">
                <h2 className="titulo_card">{children.titulo}</h2>
                <p className="parr_card">{children.parrafo}</p>
                <div className="cont_img_prim_figure"><img className="img_card_figure" src={require("../img/cafe.png")} alt="" /></div>
            </figure>
            <figure className="card_cont">
                <h2 className="titulo_card">{children.api}</h2>
                <p className="parr_card">{children.titulo_dos}</p>
                <div className="cont_img_prim_figure"><img className="img_card_figure" src={require("../img/api.png")} alt="" /></div>
            </figure>
            <figure className="card_cont">
                <h2 className="titulo_card">{children.chalenger}</h2>
                <p className="parr_card">{children.titulo_tres}</p>
                <div className="cont_img_prim_figure"><img className="img_card_figure" src={require("../img/proyecto_alura.png")} alt="" /></div>
            </figure>
            <figure className="card_cont">
                <h2 className="titulo_card">{children.login}</h2>
                <p className="parr_card">{children.titulo_cuatro}</p>
                <dir className="cont_img_prim_figure"><img className="img_card_figure" src={require("../img/login.png")} alt="" /></dir>
            </figure>
            </div>
    </div>
  )
}
