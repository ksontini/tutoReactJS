import { useState } from "react";
function Calculatrice(props){

    const [n1, setN1] = useState(null);
    const [n2, setN2] = useState(null);
    const [opt, setOpt] = useState('+');
    const [total, setTotal] = useState(null);

    const calculer = () => {
        let t = null;
        switch(opt){
            case "+":
                t = n1+n2;
            break;
            case "-":
                t = n1-n2;
            break;
            case "/":
                t = n1/n2;
            break;
            case "*":
                t = n1*n2;
            break;
            default:
        }
        setTotal(t);
        props.updateResult(t);
    }
    return (
        <div>
            <h1>Composant Calculatrice</h1>
            <input type="number" onChange={(e)=> {setN1(parseInt(e.target.value)) }} />
            <select value={opt} onChange={(e)=> {setOpt(e.target.value ) }}>
                <option></option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="*">*</option>
            </select>
            <input type="number" onChange={(e)=> {setN2(parseInt(e.target.value)) }} />
            <br></br>
            <button onClick={calculer}>Calculer</button> &nbsp;
            Total = &nbsp;{total}
        </div>
    )

}
export default Calculatrice;