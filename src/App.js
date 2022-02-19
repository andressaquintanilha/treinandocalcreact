import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [nro1, setNro1] = useState(0);
  const [nro2, setNro2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operacao, setOperacao] = useState("Somar");

  const calcular = () => {
    if (operacao === "Somar") return parseFloat(nro1) + parseFloat(nro2);
    else if (operacao === "Subtrair")
      return parseFloat(nro1) - parseFloat(nro2);
    else if (operacao === "Multiplicar")
      return parseFloat(nro1) * parseFloat(nro2);
    else if (operacao === "Dividir") return parseFloat(nro1) / parseFloat(nro2);
  };

  //espera uma função
  useEffect(() => {
    setResultado(calcular());
  }, [nro1, nro2, operacao]);

  return (
    <div className="container">
      <section className="box">
        <h1>Calculadora</h1>
        <label>Digite o primeiro número</label>
        <input
          value={nro1}
          type="number"
          onChange={(e) => setNro1(e.target.value)}
        />
        <label>Digite o segundo número</label>
        <input
          value={nro2}
          type="number"
          onChange={(e) => setNro2(e.target.value)}
        />
        <h2>Escolha sua operação</h2>
        <select onChange={(e) => setOperacao(e.target.value)}>
          <option>Somar</option>
          <option>Subtrair</option>
          <option>Multiplicar</option>
          <option>Dividir</option>
        </select>

        <label className="res">Resultado {resultado}</label>
      </section>
    </div>
  );
}

export default App;
