import "./contacto.css"

export default function ContContact() {
  return (
    <div className="cont_general_contacto">
        <form className="form">
          {/* <div className="segundo_mas"> */}
            <label className="label_contac"  htmlFor="">Contactame</label>
            <input className="input_contact" type="text" />
            <label htmlFor="" className="label_para">Para contactarle</label>
            <input className="input_contact" type="text" />
            {/* </div> */}
        </form>
    </div>
  )
}
