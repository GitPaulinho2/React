import "./Header.css"

function Header(){
  let links = [
    {href: "https://google.com", nome: "Home"},
    {href: "https://youtube.com", nome: "Sobre mim"},
    {href: "https://facebook.com", nome: "Projetos"},
  ]

  return(
    <header className='header'>
      <h1>Diego.java</h1>
      <ul className='links'>
        {
          links.map((linkDaVez) => {
            return <li> <a href={linkDaVez.href}>{linkDaVez.nome} </a></li>
          })
        }
      </ul>
    </header>
  )
}

export default Header