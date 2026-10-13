import './index.css'
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";


export default Mapa; function Mapa() {
  const mapaRef = useRef(null);

  const [zoom, setZoom] = useState(1);
  const [posicao, setPosicao] = useState({ x: 0, y: 0 });
  const [arrastando, setArrastando] = useState(false);

  const usarRoda = (e) => {
    e.preventDefault();

    setZoom((valor) =>
      Math.max(
        0.7,
        Math.min(2.5, valor + (e.deltaY < 0 ? 0.1 : -0.1))
      )
    );
  };

  const inicioArraste = useRef({
    x: 0,
    y: 0,
    baseX: 0,
    baseY: 0,
  });

  const aumentarZoom = () => {
    setZoom((valor) => Math.min(2.5, valor + 0.2));
  };

  const diminuirZoom = () => {
    setZoom((valor) => Math.max(0.7, valor - 0.2));
  };

  const centralizarMapa = () => {
    setZoom(1);
    setPosicao({ x: 0, y: 0 });
  };

  const iniciarArraste = (e) => {
    setArrastando(true);

    inicioArraste.current = {
      x: e.clientX,
      y: e.clientY,
      baseX: posicao.x,
      baseY: posicao.y,
    };

    mapaRef.current?.setPointerCapture(e.pointerId);
  };

  const moverMapa = (e) => {
    if (!arrastando || !mapaRef.current) {
      return;
    }

    const escalaX = 1400 / mapaRef.current.clientWidth;
    const escalaY = 900 / mapaRef.current.clientHeight;

    const novoX =
      inicioArraste.current.baseX +
      (e.clientX - inicioArraste.current.x) * escalaX;

    const novoY =
      inicioArraste.current.baseY +
      (e.clientY - inicioArraste.current.y) * escalaY;

    setPosicao({
      x: novoX,
      y: novoY,
    });
  };

  const pararArraste = () => {
    setArrastando(false);
  };


  return (
    <div className="pag-map">      

      {/* ================= HEADER ================= */}

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

      {/* ================= CONTEÚDO ================= */}

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

          {/* ================= MAPA ================= */}

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

            {/* ================= LEGENDA ================= */}

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

            {/* ================= JANELA DO MAPA ================= */}

            <div
              ref={mapaRef}
              className={`mapa-janela ${
                arrastando ? "arrastando" : ""
              }`}
              aria-label="Mapa interativo da Vila Esperança. Arraste para movimentar."
              onPointerDown={iniciarArraste}
              onPointerMove={moverMapa}
              onPointerUp={pararArraste}
              onPointerCancel={pararArraste}
              onWheel={usarRoda}
            >

              <svg
                className="mapa-svg"
                viewBox="0 0 1400 900"
                role="img"
                aria-labelledby="titulo-svg descricao-svg"
              >

                <title id="titulo-svg">
                  Mapa ilustrativo da Vila Esperança
                </title>

                <desc id="descricao-svg">
                  Bairro fictício com ruas, quadras, praça,
                  escola, posto de saúde, mercado e marcadores coloridos.
                </desc>

                <defs>

                  <pattern
                    id="quadras"
                    width="180"
                    height="150"
                    patternUnits="userSpaceOnUse"
                  >

                    <rect
                      x="12"
                      y="12"
                      width="145"
                      height="112"
                      rx="10"
                      fill="#e7ece8"
                      stroke="#d2ddd5"
                      strokeWidth="3"
                    />

                    <path
                      d="M28 35h42v28H28z M88 35h48v28H88z M28 78h52v28H28z M96 78h40v28H96z"
                      fill="#d8e3da"
                    />

                  </pattern>

                </defs>

                {/* CONTEÚDO QUE RECEBE ZOOM E MOVIMENTO */}

                <g
                  transform={`translate(${posicao.x} ${posicao.y}) scale(${zoom})`}
                >

                  {/* FUNDO */}

                  <rect
                    width="1400"
                    height="900"
                    fill="#f4f3df"
                  />

                  <rect
                    width="1400"
                    height="900"
                    fill="url(#quadras)"
                  />

                  {/* RUAS */}

                  <path
                    d="M-40 205 C250 165 360 250 610 210 S1040 155 1450 225"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="58"
                  />

                  <path
                    d="M-40 205 C250 165 360 250 610 210 S1040 155 1450 225"
                    fill="none"
                    stroke="#d6d9d2"
                    strokeWidth="4"
                    strokeDasharray="18 16"
                  />

                  <path
                    d="M-30 620 C250 570 460 670 690 620 S1110 560 1450 640"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="62"
                  />

                  <path
                    d="M-30 620 C250 570 460 670 690 620 S1110 560 1450 640"
                    fill="none"
                    stroke="#d6d9d2"
                    strokeWidth="4"
                    strokeDasharray="18 16"
                  />

                  <path
                    d="M330 -30 C300 180 390 330 350 500 S310 760 360 940"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="54"
                  />

                  <path
                    d="M330 -30 C300 180 390 330 350 500 S310 760 360 940"
                    fill="none"
                    stroke="#d6d9d2"
                    strokeWidth="4"
                    strokeDasharray="18 16"
                  />

                  <path
                    d="M930 -30 C900 170 970 330 930 500 S900 740 960 940"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="54"
                  />

                  <path
                    d="M930 -30 C900 170 970 330 930 500 S900 740 960 940"
                    fill="none"
                    stroke="#d6d9d2"
                    strokeWidth="4"
                    strokeDasharray="18 16"
                  />

                  {/* PRAÇA */}

                  <path
                    d="M520 310 Q620 260 730 315 L790 430 Q735 500 620 470 L520 410Z"
                    fill="#b8dfad"
                    stroke="#80bd79"
                    strokeWidth="5"
                  />

                  <g fill="#70b96c">

                    <circle
                      cx="590"
                      cy="350"
                      r="20"
                    />

                    <circle
                      cx="690"
                      cy="370"
                      r="24"
                    />

                    <circle
                      cx="640"
                      cy="430"
                      r="18"
                    />

                    <circle
                      cx="740"
                      cy="425"
                      r="17"
                    />

                  </g>

                  <text
                    x="650"
                    y="395"
                    textAnchor="middle"
                    fontSize="25"
                    fontWeight="bold"
                    fill="#27633b"
                  >
                    PRAÇA CENTRAL
                  </text>

                  {/* NOME DO BAIRRO */}

                  <g
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                    textAnchor="middle"
                  >

                    <g transform="translate(130 105)">

                      <rect
                        width="190"
                        height="75"
                        rx="13"
                        fill="#fff"
                        stroke="#cbd5ce"
                        strokeWidth="3"
                      />

                      <text
                        x="95"
                        y="32"
                        fontSize="23"
                        fill="#345"
                      >
                        VILA ESPERANÇA
                      </text>

                      <text
                        x="95"
                        y="57"
                        fontSize="15"
                        fill="#718078"
                      >
                        BAIRRO FICTÍCIO
                      </text>

                    </g>

                    {/* ESCOLA */}

                    <g transform="translate(1080 300)">

                      <rect
                        width="190"
                        height="92"
                        rx="12"
                        fill="#fff"
                        stroke="#cbd5ce"
                        strokeWidth="3"
                      />

                      <text
                        x="95"
                        y="38"
                        fontSize="22"
                        fill="#345"
                      >
                        ESCOLA
                      </text>

                      <text
                        x="95"
                        y="65"
                        fontSize="18"
                        fill="#718078"
                      >
                        MUNICIPAL
                      </text>

                      <path
                        d="M55 0v-20h80v20"
                        fill="#f0c66b"
                        stroke="#bd9743"
                        strokeWidth="3"
                      />

                    </g>

                    {/* POSTO DE SAÚDE */}

                    <g transform="translate(90 390)">

                      <rect
                        width="205"
                        height="90"
                        rx="12"
                        fill="#fff"
                        stroke="#cbd5ce"
                        strokeWidth="3"
                      />

                      <text
                        x="102"
                        y="36"
                        fontSize="22"
                        fill="#345"
                      >
                        POSTO DE SAÚDE
                      </text>

                      <text
                        x="102"
                        y="64"
                        fontSize="17"
                        fill="#718078"
                      >
                        UNIDADE VILA
                      </text>

                    </g>

                    {/* MERCADO */}

                    <g transform="translate(1090 720)">

                      <rect
                        width="190"
                        height="85"
                        rx="12"
                        fill="#fff"
                        stroke="#cbd5ce"
                        strokeWidth="3"
                      />

                      <text
                        x="95"
                        y="35"
                        fontSize="22"
                        fill="#345"
                      >
                        MERCADO
                      </text>

                      <text
                        x="95"
                        y="61"
                        fontSize="17"
                        fill="#718078"
                      >
                        DO BAIRRO
                      </text>

                    </g>

                    {/* QUADRA */}

                    <g transform="translate(520 735)">

                      <rect
                        width="185"
                        height="75"
                        rx="12"
                        fill="#fff"
                        stroke="#cbd5ce"
                        strokeWidth="3"
                      />

                      <text
                        x="92"
                        y="31"
                        fontSize="21"
                        fill="#345"
                      >
                        QUADRA
                      </text>

                      <text
                        x="92"
                        y="55"
                        fontSize="17"
                        fill="#718078"
                      >
                        ESPORTIVA
                      </text>

                    </g>

                  </g>

                  {/* NOMES DAS RUAS */}

                  <g
                    fontFamily="Arial, sans-serif"
                    fontSize="18"
                    fill="#829087"
                    fontWeight="bold"
                  >

                    <text
                      x="455"
                      y="130"
                    >
                      RUA DAS FLORES
                    </text>

                    <text
                      x="1010"
                      y="545"
                    >
                      AV. DA COMUNIDADE
                    </text>

                    <text
                      x="75"
                      y="770"
                    >
                      RUA DO CAMPO
                    </text>

                    <text
                      x="1110"
                      y="130"
                    >
                      RUA DO SOL
                    </text>

                  </g>

                  {/* MARCADORES */}

                  <g
                    stroke="#fff"
                    strokeWidth="5"
                  >

                    {/* PROBLEMA */}

                    <g transform="translate(170 265)">

                      <circle
                        r="31"
                        fill="#e84b4b"
                      />

                      <text
                        y="9"
                        textAnchor="middle"
                        fontSize="27"
                        fill="#fff"
                        stroke="none"
                        fontWeight="bold"
                      >
                        !
                      </text>

                    </g>

                    {/* SUGESTÃO */}

                    <g transform="translate(835 145)">

                      <circle
                        r="31"
                        fill="#16a36a"
                      />

                      <text
                        y="9"
                        textAnchor="middle"
                        fontSize="25"
                        fill="#fff"
                        stroke="none"
                      >
                        ●
                      </text>

                    </g>

                    <g transform="translate(850 735)">

                      <circle
                        r="31"
                        fill="#16a36a"
                      />

                      <text
                        y="9"
                        textAnchor="middle"
                        fontSize="25"
                        fill="#fff"
                        stroke="none"
                      >
                        ●
                      </text>

                    </g>

                    {/* LOCAL IMPORTANTE */}

                    <g transform="translate(430 535)">

                      <circle
                        r="31"
                        fill="#2389d7"
                      />

                      <text
                        y="9"
                        textAnchor="middle"
                        fontSize="25"
                        fill="#fff"
                        stroke="none"
                      >
                        ●
                      </text>

                    </g>

                  </g>

                  {/* VOCÊ ESTÁ AQUI */}

                  <g transform="translate(690 480)">

                    <path
                      d="M0 0c-25 0-43 18-43 41 0 32 43 75 43 75s43-43 43-75C43 18 25 0 0 0z"
                      fill="#258b45"
                      stroke="#fff"
                      strokeWidth="6"
                    />

                    <circle
                      cy="39"
                      r="13"
                      fill="#fff"
                    />

                    <text
                      x="0"
                      y="145"
                      textAnchor="middle"
                      fontSize="20"
                      fontWeight="bold"
                      fill="#245b38"
                    >
                      VOCÊ ESTÁ AQUI
                    </text>

                  </g>

                </g>

              </svg>

              <div className="dica-arrastar">
                <i className="fa-solid fa-hand-pointer"></i>
                Clique e arraste para mover
              </div>

            </div>

            <p className="aviso-mapa">
              Este é um mapa ilustrativo de um bairro fictício,
              criado apenas para demonstração.
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

      {/* ================= FOOTER ================= */}

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
  );
};

