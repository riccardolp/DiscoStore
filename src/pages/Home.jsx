import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import Card from "../components/Card";
import PropTypes from "prop-types";
import { SmileySad, Backspace } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import notfound from '../images/notfound.gif';
import "../App.css";

function Home({ searchTerm }) {
  const { cards, aggiungi, rimuovi } = useContext(CartContext);
  const navigate = useNavigate();

  const filteredCards = cards.filter((card) =>
    card.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.titolo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleHomeClick = () => {
    navigate(0);
  };

  return (
    <div className="background">
      <div className="container">
        <div className="total">
          <br /><div className="card bg-dark text-white border-white">
            <h1 style={{ fontSize: "430%", fontWeight: "bold" }}>Catalogo prodotti:</h1>
          </div>
        </div>
        <br />
        <div className="row">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <Card key={card.id} card={card} aggiungi={aggiungi} rimuovi={rimuovi} />
            ))
          ) : (
            <div className="col-md-12 mb-4" style={{ maxWidth: '100%', display: "flex", justifyContent: 'center' }}>
              <div className="card bg-dark text-white border-white">
                <div className="no-results">
                  <img
                    src={notfound}
                    alt="img-non-trovata" className="img-responsive" style={{ maxWidth: "80%" }} />
                  <p style={{ fontFamily: 'Raleway', fontSize: "xx-large" }}>
                    Non abbiamo trovato quello che cerchi
                    <SmileySad size={40} />
                  </p>
                  <button onClick={handleHomeClick} className="nav-link-custom" style={{ marginBottom: "20px" }}>
                    <Backspace size={24} />Reset
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default Home;
