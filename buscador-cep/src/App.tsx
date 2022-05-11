import { FiSearch } from 'react-icons/fi'
import { useState } from 'react';
import './App.css';
import api from './services/api';
function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
 
  async function handleSearch() {

    if (input === '') {
      alert("Preencha Algum CEP...")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    }catch {
      alert("ERR[]");
      setInput("");
    }
  }
  
  return (
    <div className="container">
       <h1 className="title">Buscador de CEP...</h1>
       
      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite seu CEP..."
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch
          size={25}
          color="#FFF"
          />
        </button>
      </div>
      <main className="main">
        <h2> CEP: {cep.cep}</h2>
        <span> RUA: {cep.logradouro}</span>
        <span> BAIRRO: {cep.bairro}</span>
        <span> CIDADE: {cep.localidade} {cep.uf}</span>

      </main>
    </div>
  )
}

export default App
