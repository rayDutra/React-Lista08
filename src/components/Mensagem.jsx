import React, { useState } from 'react';

export default function ContadorCaracter() {
    const [mensagem, setMensagem] = useState("")
    function contCaracter(event) {
        setMensagem(event.target.value);
    }

    const limiteCaracteres = 120;
    const caracteresRestantes = limiteCaracteres - mensagem.length;
    return (
        <div>
            <form>
                <p>Mensagem:</p>
                <textarea onChange={contCaracter} value={mensagem} maxLength={limiteCaracteres} />
            </form>
            <p>Restante: {caracteresRestantes} caracteres</p>
            <hr />
        </div>
    )
}