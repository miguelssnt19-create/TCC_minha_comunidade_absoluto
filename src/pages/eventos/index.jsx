import './index.css'


export default function Evento (){
 
return(
    <div className='site_evento'>
    
    <header>
   <div className="logo">
    <i className="fa-solid fa-tree">
    </i>
    <div>
            <h2>
            Minha Comunidade
            </h2>
    </div>
   </div>
   <nav>
    <a href="meu_bairo.html">
     Início
    </a>
    <a href="problemas.html">
     Problemas
    </a>
    <a href="sugestoes.html">
     Sugestões
    </a>
    <a href="eventos.html">
     Eventos
    </a>
    <a href="mapa.html">
     Mapa
    </a>
    <a href="meu_bairo.html#sobre">
     Sobre
    </a>
   </nav>
   <div className="acoes">
    <a href="entrar.html">
     <button>
      Entrar
     </button>
    </a>
    <a href="cadastrar.html">
     <button className="cadastrar">
      Cadastrar
     </button>
    </a>
   </div>
  </header>
  <main className="pagina-categoria">
   <a className="voltar" href="meu_bairo.html">
    <i className="fa-solid fa-arrow-left">
    </i>
    Voltar para o início
   </a>
   <section className="painel-categoria">
    <div className="icone-pagina">
     <i className="fa-solid fa-calendar">
     </i>
    </div>
    <h1>
     Eventos da Comunidade
    </h1>
    <p>
     Confira atividades, encontros e iniciativas da nossa comunidade.
    </p>
    <div className="conteudo-categoria">
     <h2>
      Próximos eventos
     </h2>
     <p>
      Em breve, você poderá acompanhar aqui a programação de eventos do bairro.
     </p>
    </div>
    <a className="acao-voltar" href="meu_bairo.html">
     Voltar à página inicial
    </a>
   </section>
  </main>
  <footer>
   <strong>
    Minha Comunidade
   </strong>
   <span>
    |
   </span>
   <span>
    Juntos por um bairro melhor!
   </span>
   <div className="redes">
    <a className="face" href="https://www.facebook.com/?locale=pt_BR">
     <i className="fa-brands fa-facebook">
     </i>
    </a>
    <a className="inst" href="https://www.instagram.com/">
     <i className="fa-brands fa-instagram">
     </i>
    </a>
    <a className="you" href="https://www.youtube.com/">
     <i className="fa-brands fa-youtube">
     </i>
    </a>
   </div>
  </footer>
    </div>

    );
}
