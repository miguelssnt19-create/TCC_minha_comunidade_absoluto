import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

function ConectarMapa({ mapaRef }) {
  const mapa = useMap();

  useEffect(() => {
    mapaRef.current = mapa;
  }, [mapa, mapaRef]);

  return null;
}

export default function Mapa() {
  const mapaRef = useRef(null);

  const aumentarZoom = () => {
    mapaRef.current?.zoomIn();
  };

  const diminuirZoom = () => {
    mapaRef.current?.zoomOut();
  };

  const centralizarMapa = () => {
    if (mapaRef.current) {
      mapaRef.current.setView([-23.5505, -46.6333], 12);
    }
  };

  return (
    <div className="pag-map">     

 <header>
        <div className="logo">
          <i className="fa-solid fa-tree"></i>

          <div>
            <h2>Minha Comunidade</h2>
          </div>
        </div>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/problemas">Problemas</Link>
          <Link to="/sugestoes">Sugestões</Link>
          <Link to="/evento">Eventos</Link>

          <Link to="/mapa" className="ativo">
            Mapa
          </Link>

          <Link to="/#sobre">
            Sobre
          </Link>
        </nav>

        <div className="acoes">

          <Link to="/entrar">
            <button type="button">
              Entrar
            </button>
          </Link>

          <Link to="/cadastrar">
            <button
              type="button"
              className="cadastrar"
            >
              Cadastrar
            </button>
          </Link>

        </div>
      </header>

 <main className="pagina-categoria">

        <Link className="voltar" to="/">
          <i className="fa-solid fa-arrow-left"></i>
          Voltar para o início
        </Link>

        <section className="painel-categoria">

          <div className="icone-pagina">
            <i className="fa-solid fa-map-location-dot"></i>
          </div>

          <h1>Mapa da Comunidade</h1>

          <p>
            Visualize locais importantes e acompanhe informações do bairro.
          </p>

           <div className="conteudo-categoria mapa-interativo">

            <div className="mapa-cabecalho">

              <div>
                <h2>
                  Conheça o bairro fictício Vila Esperança
                </h2>

                <p>
                  Arraste o mapa para explorar. Use os controles
                  para aproximar ou afastar.
                </p>
              </div>

              <div
                className="controles-mapa"
                aria-label="Controles do mapa"
              >

                <button
                  type="button"
                  onClick={aumentarZoom}
                  aria-label="Aumentar zoom"
                >
                  ＋
                </button>

                <button
                  type="button"
                  onClick={diminuirZoom}
                  aria-label="Diminuir zoom"
                >
                  −
                </button>

                <button
                  type="button"
                  className="botao-centralizar"
                  onClick={centralizarMapa}
                >
                  Centralizar
                </button>

              </div>

            </div>

             <div
              className="mapa-legenda"
              aria-label="Legenda do mapa"
            >

              <span>
                <i className="legenda-ponto problema-ponto"></i>
                Problema relatado
              </span>

              <span>
                <i className="legenda-ponto melhoria-ponto"></i>
                Sugestão
              </span>

              <span>
                <i className="legenda-ponto local-ponto"></i>
                Local importante
              </span>

            </div>

            <div className="mapa-janela">
              <MapContainer
                center={[-23.5505, -46.6333]}
                zoom={12}
                minZoom={4}
                maxZoom={19}
                scrollWheelZoom={true}
                className="mapa-real"
                
              >
                <ConectarMapa mapaRef={mapaRef} />
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[-23.5505, -46.6333]}>
                  <Popup>
                    <strong>São Paulo</strong>
                    <br />
                    Mapa inicial do Minha Comunidade.
                  </Popup>
                </Marker>

                <Marker position={[-23.5895, -46.6340]}>
                  <Popup>
                    <strong>Exemplo de problema</strong>
                    <br />
                    Este marcador é ilustrativo.
                  </Popup>
                </Marker>

                <Marker position={[-23.5614, -46.6559]}>
                  <Popup>
                    <strong>Exemplo de sugestão</strong>
                    <br />
                    Este marcador é ilustrativo.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            <p className="aviso-mapa">
              O mapa mostra ruas reais de São Paulo. Os marcadores de exemplo
              são ilustrativos e poderão ser ligados às denúncias, sugestões e eventos quando a API estiver pronta.
            </p>

          </div>

          <Link
            className="acao-voltar"
            to="/"
          >
            Voltar à página inicial
          </Link>

        </section>

      </main>

       <footer>

        <strong>
          Minha Comunidade
        </strong>

        <span>|</span>

        <span>
          Juntos por um bairro melhor!
        </span>

        <div className="redes">

          <a
            className="face"
            href="https://www.facebook.com/?locale=pt_BR"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a
            className="inst"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            className="you"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>

        </div>

      </footer>

    </div>


)  
}