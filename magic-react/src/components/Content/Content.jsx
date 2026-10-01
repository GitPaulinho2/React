import { useState } from "react";
import "./Content.css";

function Content() {
  const [artigo, setArtigo] = useState("");

  function clicouNoBotao() {
    setArtigo("Sou programador e eu faço programa");
  }

  return (
    <main className="conteudo">
      <section className='conteudo-textual'>
        <h2 className='texto-introducao'> Meu nome é Diego</h2>
        <h3>Sou Desenvolvedor Backend</h3>
        <button className="botao-saiba-mais" onClick={clicouNoBotao}>
          Saiba mais
        </button>
        <article>{artigo}</article>
      </section>
      <img className='imagem' src="src/assets/Mati.png" alt="" />
    </main>
  );
}

export default Content;
