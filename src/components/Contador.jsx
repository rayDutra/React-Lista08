import { useState } from "react";

export default function ContadorPlus({min, max}) {
    
    const [cont, setCont] = useState(min);

    function alterarCont(op) {
        switch (op) {
            case '+':
                if (cont < max) setCont(cont+1);
                break;
            case '-':
                if (cont > min) setCont(cont-1);
                break;
        }
    }
    
    return (
        <div>
            <p style={{color:"red"}}>Intervalo (limite) do Contador: [{min}, {max}]</p>
            <p><b>Valor atual do contador</b>: {cont}</p>
            <button onClick={() => alterarCont('+')}>+</button>
            <button onClick={() => alterarCont('-')}>-</button>
            <hr style={{border:"5px solid black"}}/>
        </div>
    )
}

ContadorPlus.defaultProps = {
    min: 1,
    max: 10
}