import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import "./App.css";
import Projetos from "./components/Projects/Projetos";
import { useState } from "react";

function App() {
  const [projetos, ] = useState([
    {
      linkDoGithub: "https://github.com",
      caminhoDaImagem: "src/assets/facebook.png",
    },
    {
      linkDoGithub: "https://github.com",
      caminhoDaImagem: "src/assets/tesla.png",
    },
    {
      linkDoGithub: "https://github.com",
      caminhoDaImagem: "src/assets/vite.png",
    },
  ]);
  return (
    <div className="conteudo-principal">
      <Header />
      <Content />
      <Projetos projetos={projetos} />
      <footer className="footer">
        <div>
          <h4>Contato:</h4>
          <p>brazdiiego@gmail.com</p>
          <p>71983871629</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
