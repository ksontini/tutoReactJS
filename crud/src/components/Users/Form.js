

function Form(){

    return (
        <form>
                <div className="form-group row">
                  <label htmlFor="inputFullname" className="col-sm-2 col-form-label">Nom Complet</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputFullname" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail" />
                  </div>
                </div>
  
                <fieldset className="form-group">
                  <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">Sexe</legend>
                    <div className="col-sm-10">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="sexe" id="sexe-homme" value="Homme"  />
                        <label className="form-check-label" htmlFor="sexe-homme">
                          Homme
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="sexe" id="sexe-femme" value="Femme" />
                        <label className="form-check-label" htmlFor="sexe-femme">
                          Femme
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
  
                <div className="form-group row">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Ajouter</button>
                  </div>
                </div>
              </form>
    )
}

export default Form;