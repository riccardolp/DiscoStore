import { useContext } from "react";
import CartContext from "../components/CartContext";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  const { cards, totale, quantitàTotale, rimuovi, dataConsegnaStimata } = useContext(CartContext);

  const articoliNelCarrello = cards.filter((card) => card.quantità > 0);

  return (
    <div className="background">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="total">
              <div className="card bg-dark text-white border-white mb-4">
                <h1 style={{ fontSize: "430%" }}>Il tuo carrello:</h1></div></div>
            {articoliNelCarrello.length === 0 ? (
              <div className="card bg-dark mb-3 text-white border-white">
                <div className="text-center">
                  <p style={{ fontFamily: 'Raleway', fontSize: "xx-large", marginTop: "10px" }}>
                    Carrello vuoto! Aggiungi qualche vinile e ricorda...
                  </p>
                  <img
                    src="https://scontent.ffco2-1.fna.fbcdn.net/v/t1.18169-9/12809501_1576577959329546_8625075776335038384_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a0f3c3&_nc_ohc=ultPe5bxZSEQ7kNvgHDitMg&_nc_ht=scontent.ffco2-1.fna&oh=00_AYAXR7FsyfJ9B1g5CJLMkznXitCIyYzR5UNH5LKWEPesrg&oe=66FDD894"
                    alt="Carrello vuoto" className="img-responsive"
                  />
                </div>
              </div>
            ) : (
              articoliNelCarrello.map((card) => (
                <div className="card bg-dark mb-3 border-white" key={card.id}>
                  <div className="row g-0 text-white">
                    <div className="col-md-4">
                      <img src={card.immagine} alt={card.titolo} className="img-fluid rounded-start" style={{ borderRadius: "50%", border: "2px solid white", width: "150px", height: "150px", objectFit: "cover", marginTop: "12px", marginLeft: "10px", marginBottom: "10px" }} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                          <h5 className="card-title" style={{ fontSize: "25px" }}>{card.nome}</h5>
                          <p className="card-text">{card.titolo}</p>
                          <p className="card-text">Prezzo: €{card.prezzo}</p>
                          <p className="card-text">Quantità: {card.quantità}</p>
                        </div>
                        <button className="btn btn-danger" onClick={() => rimuovi(card.id)}>Elimina</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="col-lg-4">
            <div className="card bg-dark text-white border-white mb-4">
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "25px", textShadow: "1px 2px black", fontFamily: "Raleway", marginBottom:"10px" }}>
                  Riepilogo Ordine:
                </h5>
                <p className="card-text-cart">Totale: €{totale()}</p>
                <p className="card-text-cart">Quantità Totale: {quantitàTotale()}</p>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-success mt-3">Conferma Ordine</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mb-4">
            <div className="card bg-dark text-white border-white">
              <div className="card-body">
                <h5 className="card-title-cart">Metodi di Pagamento</h5>
                <p className="card-text-cart">Accettiamo i seguenti metodi di pagamento:</p>
                <ul className="list-inline">
                  <li className="list-inline-item"><img src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" style={{ width: "50px" }} /></li>
                  <li className="list-inline-item"><img src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="Amex" style={{ width: "50px" }} /></li>
                  <li className="list-inline-item"><img src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" style={{ width: "50px" }} /></li>
                  <li className="list-inline-item"><img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" alt="PayPal" style={{ width: "50px" }} /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-8 mb-4">
            <div className="card bg-dark text-white border-white">
              <div className="card-body">
                <h5 className="card-title-cart">Tempo di Spedizione Stimato</h5>
                <p className="card-text-cart">La consegna è prevista entro il {dataConsegnaStimata()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
