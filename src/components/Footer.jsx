function Footer() {
  return (
    <footer className="bg-dark text-white mt-1 p-4">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-2 mb-md-0">
            <p>
              © {new Date().getFullYear()} DiscoStore, creato da Riccardo
              Cracker. Tutti i diritti riservati.
            </p>
          </div>
          <div className="col-12 text-center">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/riccardo-la-pietra" className="text-white">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.github.com/riccardolp" className="text-white">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://images3.memedroid.com/images/UPLOADED76/64a5717dcf59e.jpeg" className="text-white">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-md-3 text-center">
            <a href="/condizioni-di-vendita" className="text-white">Condizioni di vendita</a>
          </div>
          <div className="col-12 col-md-3 text-center">
            <a href="/termini-di-pagamento" className="text-white">Termini di pagamento</a>
          </div>
          <div className="col-12 col-md-3 text-center">
            <a href="/servizio-cliente" className="text-white">Servizio Clienti</a>
          </div>
          <div className="col-12 col-md-3 text-center">
            <a href="/la-tua-privacy" className="text-white">La tua Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
