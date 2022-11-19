import React from "react";
import "./ShoppingList.css"
class ShoppingList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: "",
            ingredients: ["Spaghetti"] // "Seafood", "Tomatoes"
        };
        //this.handleChange.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    handleChange(event) {
        console.log("change", event.target.value);
        let value = event.target.value;
        this.setState({ input: value });
    }

    handleDelete(index) {
        console.log(index);
        let list = this.state.ingredients;
        list = list.filter((item, i) => { return i != index });
        this.setState({ ingredients: list });
    }

    addItem() {
        let newList = this.state.ingredients;
        newList.push(this.state.input);
        this.setState({ ingredients: newList, input: "" });
    }

    render() {
        // This is not a valid comment
        /* This is not a valid comment */
        const listItems = this.state.ingredients.map((item, index) =>
            <li key={index}>
                <button onClick={() => { this.handleDelete(index) }} >x</button>   {item}
            </li>
        );
        return (
            <div>
                <div className="shopping-list">
                    <h1>Shopping List for {this.props.name}</h1>
                    {/* THIS IS A VALID COMMENT */}
                    <input type="text" value={this.state.input} onChange={(e) => { this.handleChange(e) }} />&nbsp;<button onClick={() => { this.addItem() }} >Ajouter à la liste</button>
                    <ul>
                        {listItems}
                    </ul>
                </div >
            </div>
        );
    }
}

export default ShoppingList;
