import { useEffect, useRef } from "react"


function Form(props) {

  const inputFullname = useRef(null)
  const inputCity = useRef(null)
  const inputGenreMan = useRef(null)
  const inputGenreWomen = useRef(null)

  useEffect(() => {
    if (props.defaultFormData != undefined) {
      inputFullname.current.value = props.defaultFormData.fullname;
      inputCity.current.value = props.defaultFormData.city;
      inputGenreMan.current.checked = (props.defaultFormData.sex == "man");
      inputGenreWomen.current.checked = (props.defaultFormData.sex == "women");
    }
  });

  const validateForm = (event) => {
    console.log('form', event);

    let genre = "";
    if (inputGenreMan.current.checked) {
      genre = "man";
    }
    if (inputGenreWomen.current.checked) {
      genre = "women";
    }
    const data = {
      "fullname": inputFullname.current.value,
      "city": inputCity.current.value,
      "sex": genre
    };
    if (props.defaultFormData != undefined) {
      data.id_user = props.defaultFormData.id_user;
    }

    props.handleSubmit(data);

    console.log('form data', data);

  }

  return (
    <div >
      <div className="form-group row">
        <label htmlFor="inputFullname" className="col-sm-2 col-form-label">Nom Complet</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputFullname" ref={inputFullname} />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="inputCity" className="col-sm-2 col-form-label">Ville</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputCity" ref={inputCity} />
        </div>
      </div>

      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">Sexe</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="sexe" id="sexe-homme" value="man" ref={inputGenreMan} />
              <label className="form-check-label" htmlFor="sexe-homme" >
                Homme
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="sexe" id="sexe-femme" value="women" ref={inputGenreWomen} />
              <label className="form-check-label" htmlFor="sexe-femme" >
                Femme
              </label>
            </div>
          </div>
        </div>
      </fieldset>

      <div className="form-group row">
        <div className="col-sm-10">
          <button type="button" className="btn btn-primary" onClick={(e) => { validateForm(e) }} >{props.defaultFormData != undefined ? "Modifier" : "Ajouter"}</button>
        </div>
      </div>
    </div>
  )
}

export default Form;