import { useState } from "react";
import Form from "./Form";


function Users(){

    const [idSelectedUser, setIdSelectedUser] = useState(null);
    const [showEditForm, setShowEditForm] = useState(false);
    const [listUsers, setListUsers] = useState([
        {"id_user":"1","fullname":"Barbara Anderson","city":"New York","sex":"women"},{"id_user":"2","fullname":"Elizabeth Cooper","city":"Houston","sex":"women"},{"id_user":"3","fullname":"Alexander Young","city":"San Diego","sex":"man"},{"id_user":"4","fullname":"David Taylor","city":"Dallas","sex":"man"}
    ]);

    return (
    <div className="container mt-5">
 
        <div className="row">
          <div className="col-md-8">
            <h3 >Liste des utilisateurs</h3>
          </div>
          <div className="col-md-4">           
                { showEditForm 
                  ? <h4>Modifier un utilisateur</h4>
                  :<h4>Ajouter un utilisateur</h4>
                }
          </div>
        </div>
  
        <div className="row mt-2">

          <div className="col-md-4 order-md-2 mb-4">
          { showEditForm 
                  ? <Form idUserToEdit={idSelectedUser} />
                  : <Form />
                }
          </div>

          <div className="col-md-8">
          <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom complet</th>
                    <th scope="col">Ville</th>
                    <th scope="col">Sexe</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                    {listUsers.map((row, index) => (
                        <tr key={index} >
                            <th scope="row">{row.id_user}</th>
                            <td>{row.fullname}</td>
                            <td>{row.email}</td>
                            <td>{row.sex}</td>
                            <td>
                                <button type="button" className="btn btn-secondary btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"></path>
                                    </svg>
                                </button>
                                <button type="button" className="btn btn-secondary btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}


                </tbody>
              </table>
          </div>
        </div>
  
       
      </div>
    );
}

export default Users;