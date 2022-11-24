import { useEffect, useState } from "react";
import { ApiService } from "../Common/ApiService";
import Form from "./Form";


function Edit(props) {

    const [userInfo, setUserInfo] = useState(null);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        if ((!load && userInfo == null) || (userInfo != null && userInfo.id_user != props.idUserToEdit)) {
            setLoad(true);

            ApiService.get("/api/users/" + props.idUserToEdit)
                .then(function (response) {
                    console.log("response selected user", response);
                    setUserInfo(response.data);
                    setLoad(false);
                })
                .catch(function (error) {
                    console.log("error get user info", error);
                });
        }
    });

    const callAPIEditUser = (userInfo) => {

        if (userInfo.fullname.trim() == "" || userInfo.city.trim() == "" || userInfo.sex.trim() == "") {
            props.showMessage("Tous les champs sont obligatoires", "error");
            return;
        }
        ApiService.put("/api/users/" + userInfo.id_user, userInfo)
            .then(function (response) {
                console.log("response add user", response);
                props.showMessage("Un Utilisateur a été modifié avec succès", "success");
            })
            .catch(function (error) {
                props.showMessage("Une erreur est survenu lors de la modification d'un utilisateur", "error");
            });
    }

    return (
        <Form defaultFormData={userInfo} handleSubmit={callAPIEditUser}></Form>
    );

}


export default Edit;