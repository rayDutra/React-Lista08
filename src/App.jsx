import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contador from "./components/Contador";
import Mensagem from "./components/Mensagem";
import MostrarParagrafos from "./components/MostrarParagrafos";
import ShowName from "./components/ShowName";
import Nomes from "./components/Nomes";

function Home() {
    return (
        <div>
            <h1>Lista 08 React</h1>
            <ol>
                <li><Link to="/contador">Contador</Link></li>
                <li><Link to="/show-name">Show Name</Link></li>
                <li><Link to="/mensagem">Mensagem</Link></li>
                <li><Link to="/nomes">Mostrar Nomes</Link></li>
                <li><Link to="/mostrar-paragrafos">Mostrar Parágrafos</Link></li>
          
            </ol>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contador" element={<Contador />} />
                <Route path="/show-name" element={<ShowName />} />
                <Route path="/mensagem" element={<Mensagem />} />
                <Route path="/nomes" element={<Nomes />} />
                <Route path="/mostrar-paragrafos" element={<MostrarParagrafos />} />

            </Routes>
        </Router>
    );
}

export default App;
