import { useState } from "react"

export default function ShowName() {

    const [nome, setNome] = useState("");

    // function atualizarNome(event) {
    //     setNome(event.target.value.toUpperCase())
    // }

    return (
        <div>
            <form>
                <label htmlFor="">Nome: </label>
                {/* <input type="text" onChange={atualizarNome}/> */}
                <input type="text" onChange={e => setNome(e.target.value.toUpperCase())}/>
            </form>
            <p>{nome}</p>
            <hr style={{border:"5px solid black"}}/>
        </div>
    )
}