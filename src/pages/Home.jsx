import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import Card from "../components/Card";
import PropTypes from "prop-types";
import { SmileySad,Backspace } from "phosphor-react";
import { useNavigate } from "react-router-dom";
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
          <h1 style={{ fontSize: "430%" }}>Catalogo prodotti:</h1>
          </div>
        </div>
        <br />
        <div className="row">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <Card
                key={card.id}
                card={card}
                aggiungi={aggiungi}
                rimuovi={rimuovi}
              />
            ))
          ) : (
            <div className="row justify-content-center">
              <div className="col-md-8 mb-4">
                <div className="card bg-dark text-white border-white">
                  
                    <div className="no-results">
                      <img
                        src="https://th.bing.com/th/id/R.5ab5a728b3378e1570788e8ca70d1f42?rik=LDJhPwoupQDTmg&riu=http%3a%2f%2f24.media.tumblr.com%2ftumblr_ltwsn1V55B1qi6ujuo1_500.gif&ehk=YHE0S4c7M0kEtjicjzyTdnBgjahqJeogbucvotK54wI%3d&risl=&pid=ImgRaw&r=0"
                        alt="Non trovato" className="img-responsive" />
                      <p style={{ fontFamily: 'Raleway', fontSize: "xx-large", marginTop: "10px" }}>
                        Non abbiamo trovato quello che cerchi
                        <SmileySad size={40} />
                      </p>
                      <button onClick={handleHomeClick} className="nav-link-custom" style={{marginBottom: "10px"}}>
                        <Backspace size={24} />Reset
                      </button>
                    </div>
                  
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
