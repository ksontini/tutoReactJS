import { useEffect } from "react";
import { ApiService } from "../Common/ApiService";
import Form from "./Form";

function Add(props) {



    useEffect(() => {

    });

    const callAPIAddUser = (userInfo) => {
        if (userInfo.fullname.trim() == "" || userInfo.city.trim() == "" || userInfo.sex.trim() == "") {
            props.showMessage("Tous les champs sont obligatoires", "error");
            return;
        }
        ApiService.post("/api/users", userInfo)
            .then(function (response) {
                console.log("response add user", response);
                props.showMessage("Un nouveau Utilisateur a été ajouté avec succès", "success");
                props.reloadListUsers();
            })
            .catch(function (error) {
                props.showMessage("Une erreur est survenu lors de l'ajout d'un utilisateur", "error");
            });
    }

    return (
        <Form handleSubmit={callAPIAddUser}></Form>
    );
}

export default Add;