import Form from "./Form";


function Edit(){

    const userInfo = {"id_user":"1","fullname":"Barbara Anderson","city":"New York","sex":"women"};

    return (
        <Form data={userInfo}></Form>
    );

}


export default Edit;