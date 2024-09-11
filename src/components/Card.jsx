import PropTypes from "prop-types";
import "../App.css";

function Card({ card, aggiungi, rimuovi }) {
  return (
    <div className="col-md-4 d-flex justify-content-center">
      <div
        className="card"
        style={{ width: "18rem", textAlign: "center", marginBottom: "20px" }}
      >
        <button
          type="button"
          onClick={() => {
            aggiungi(card);
          }}
          className="btn bg-dark"
          style={{color: "white"}}
        >
          Aggiungi
          <span
            className="badge badge-danger ms-2"
            style={{ backgroundColor: "white", color: "black" }}
          >
            {card.quantità}
          </span>
        </button>
        <img
          src={card.immagine}
          className="card-img-top"
          alt="fotovinile"
          style={{ height: "18rem" }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize :" 22px" }}>{card.nome}</h5>
          <p className="card-text">{card.titolo}</p>
          <p className="card-text">{card.prezzo}€</p>
          <audio controls className="audio-player">
            <source src={card.audio} type="audio/mpeg" />
          </audio>
          <button
            onClick={() => {
              rimuovi(card.id);
            }}
            className="btn btn-outline-danger"
          >
            Rimuovi
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    quantità: PropTypes.number.isRequired,
    immagine: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    titolo: PropTypes.string.isRequired,
    prezzo: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    audio: PropTypes.string.isRequired,
  }).isRequired,
  aggiungi: PropTypes.func.isRequired,
  rimuovi: PropTypes.func.isRequired,
};

export default Card;
