import "./estudio.css"
import "./movilstudio.css"
export default function ContEst(childre) {
  return (
    <div className='cont_estudio'>
        <section className="seccion_base">
          <div className="cont_datos_dos">
          <div className="cont_ti_pa">
            <h2 className="titulo_base_datos">{childre.titulo_base}</h2>
            <p className="parrafo_base">{childre.parrafo_base}</p>   
          </div>
            <div className="cont_entidad">
              <img  className="entidad-img" src={require("../img/db (1).jpg")} alt="" />
            </div>
          </div>
            <aside className="aside_cont">
            <div className="dos_studio">
            <div className="cont_img_oracle">
              <img className="img_oracle" src={require("../img/oracle.png")} alt="" />
            </div>
              <div className="cont_estudio_dos">
              <h2 className="actuales_h2_estudio">{childre.actuales}</h2>
            <p  className="parrafo_base_dos">{childre.parrafo_base_dos}</p>
              </div>
            </div>
        </aside>
        </section>
    </div>
  )
}
