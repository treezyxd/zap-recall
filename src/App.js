import './reset.css';
import { Body } from "./AppStyle";
import { Cards } from "./components/Cards";
import { Logo } from "./components/Logo";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ];

  return (
    <Body>
      <Logo />
      <div className='space'>
      <Cards cards={cards} count={count} setCount={setCount} />
      </div>
      <Footer count={count} cards={cards} />
    </Body>
  );
}

export default App;
