import React, { useState } from 'react';

export default function NomeSobrenome(){

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [exibirNomeCompleto, setExibirNome] = useState(false);

    function IdentificarNome(event) {
        setNome(event.target.value);
    }

    function IdentificarSobrenome(event) {
        setSobrenome(event.target.value);
    }

    function exibirNome() {
        setExibirNome(true);
    }

    return (
        <div>
            <form>
                <label htmlFor="">Nome: </label>
                
                <input type="text" value={nome} onChange={IdentificarNome} />
                <br></br><br></br>
                <label htmlFor="">Sobrenome: </label>
              
                <input type="text" value={sobrenome} onChange={IdentificarSobrenome} />
            </form>
            <br></br>
            <button onClick={exibirNome}>Exibir nome completo</button>
            {exibirNomeCompleto && <p>{nome} {sobrenome}</p>}
        </div>
    )
}