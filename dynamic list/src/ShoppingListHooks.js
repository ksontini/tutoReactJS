import React from "react";
import "./ShoppingList.css"
import { useState } from "react";

function ShoppingListHooks(props) {

    const [input, setInput] = useState("");
    const [ingredients, setIngredients] = useState(["Spaghetti"]);


    const handleChange = (event) => {
        console.log("change", event.target.value);
        let value = event.target.value;
        setInput(value);
    }

    const handleDelete = (index) => {
        console.log(index);
        let list = ingredients;
        list = list.filter((item, i) => { return i != index })
        console.log('new list after delete', list)
        setIngredients(list);
    }

    const addItem = () => {
        let newList = ingredients;
        newList.push(input);
        setIngredients(newList)
        setInput("");
    }


    // This is not a valid comment
    /* This is not a valid comment */
    const listItems = ingredients.map((item, index) =>
        <li key={index}>
            <button onClick={() => { handleDelete(index) }} >x</button>   {item}
        </li>
    );



    return (
        <div>
            <div className="shopping-list">
                <h1>Shopping List for {props.name}</h1>
                {/* THIS IS A VALID COMMENT */}
                <input type="text" value={input} onChange={(e) => { handleChange(e) }} />&nbsp;<button onClick={() => { addItem() }} >Ajouter à la liste</button>
                <ul>
                    {listItems}
                </ul>
            </div >
        </div>
    );

}

export default ShoppingListHooks;
