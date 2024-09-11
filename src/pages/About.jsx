import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <div
      className="background d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <br />
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card mb-4 bg-dark text-white border-white">
              <div className="card-body">
                <h1 className="card-title-about">Chi Siamo</h1>
                <p className="card-text-about">
                  Benvenuti su <strong>DiscoStore</strong>, il vostro negozio
                  online di fiducia per tutti gli amanti del vinile. Siamo una
                  piccola realtà di amanti del suono caldo e croccante del
                  vinile, che ci ha spinti a creare questo spazio dove
                  condividere con voi la nostra passione. La nostra missione è
                  quella di portare la magia del suono analogico nelle case di
                  tutti, offrendo una vasta selezione di dischi che spaziano dai
                  classici intramontabili alle ultime novità.
                </p>
              </div>
            </div>
            <div className="card mb-4 bg-dark text-white border-white">
              <div className="card-body">
                <h2 className="card-title-about">La Nostra Storia</h2>
                <p className="card-text-about">
                  Nato dalla passione per la musica e dalla nostalgia per i
                  tempi in cui i dischi in vinile erano il cuore pulsante di
                  ogni collezione musicale,<strong> DiscoStore</strong> si
                  impegna ogni giorno a cercare e selezionare album famosi e
                  piccole chicche per arricchire la vostra collezione. Ogni
                  giorno abbiamo offerte su centinaia di dischi, molti in
                  tiratura limitata perciò… affrettatevi!
                </p>
              </div>
            </div>
            <div className="card mb-4 bg-dark text-white border-white">
              <div className="card-body">
                <h2 className="card-title-about">Cosa Offriamo</h2>
                <ul className="card-text-about">
                  <li>
                    <strong>Ampia Selezione</strong>: Dalle edizioni limitate ai
                    vinili rari, passando per i grandi classici e le ultime
                    uscite, il nostro catalogo è in continua espansione.
                  </li>
                  <li>
                    <strong>Qualità Garantita</strong>: Ogni disco viene
                    accuratamente controllato per garantire che arrivi nelle
                    migliori condizioni.
                  </li>
                  <li>
                    <strong>Supporto Clienti</strong>: Siamo qui per aiutarvi
                    con qualsiasi domanda o esigenza, perché la vostra
                    soddisfazione è la nostra priorità.
                  </li>
                </ul>
              </div>
            </div>
            <div className="card mb-4 bg-dark text-white border-white">
              <div className="card-body">
                <h2 className="card-title-about">Unisciti a Noi!</h2>
                <p className="card-text-about">
                  Che siate collezionisti esperti o nuovi appassionati,{" "}
                  <strong>DiscoStore</strong> è il luogo ideale per scoprire e
                  riscoprire la bellezza del vinile. Unitevi alla nostra
                  comunità e condividete con noi la vostra passione per la
                  musica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
