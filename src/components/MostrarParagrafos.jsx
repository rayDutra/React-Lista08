import { useState } from "react";
import Paragrafo from "./Paragrafo";

export default function MostrarParagrafos() {
  const [paragrafos, setParagrafos] = useState([
    "Parágrafo 1 (interface)",
    "Parágrafo 2 (interface)",
  ]);
  const [novoParagrafo, setNovoParagrafo] = useState("");

  function adicionarParagrafo(e) {
    e.preventDefault();
    setParagrafos([...paragrafos, `${novoParagrafo} (usuário)`]);
    setNovoParagrafo("");
  }

  return (
    <div>
      {paragrafos.map((p, index) => (
        <Paragrafo key={index} texto={p} />
      ))}
      <form onSubmit={adicionarParagrafo}>
        <input
          type="text"
          value={novoParagrafo}
          onChange={(e) => setNovoParagrafo(e.target.value)}
        />
        <button type="submit">Adicionar parágrafo</button>
      </form>
    </div>
  );
}
