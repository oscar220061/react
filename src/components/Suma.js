import { useState } from "react"

function Suma(){
    const[num1, setNum1] = useState(0);
    const[num2, setNum2] = useState(0);
    
    let resultado = parseInt(num1) + parseInt(num2);
    
    function introducirNum1(event){
        setNum1(event.target.value);
    }
    function introducirNum2(event){
        setNum2(event.target.value);
    }
    return(
        <div>
           
            <input
            type="number"
            placeholder="Introduce número"
            onChange={introducirNum1}/>
            <input
            type="number"
            placeholder="Introduce número"
            onChange={introducirNum2}
            />
           
           <p>resultado: {resultado}</p>
        </div>
        
    )
}
export default Suma;