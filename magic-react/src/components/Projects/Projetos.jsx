import './Projetos.css'

function Projetos(props){
    const projetos = props.projetos
    return (
        <section className='secao-projetos'>
            <h2>Projetos</h2>
            <ul className='lista-projetos'>

                {
                    projetos.map((projetoDaVez) => {
                        return(
                            <li><a href={projetoDaVez.linkDoGithub}>Link do Github</a>
                                <img src={projetoDaVez.caminhoDaImagem} alt="" />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Projetos