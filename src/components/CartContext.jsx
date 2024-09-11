import { useState, createContext } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import james from "../images/james.jpg";
import bob from "../images/bob.jpg";
import can from "../images/can.jpg";
import band from "../images/band.jpg";
import placebo from "../images/placebo.jpg";
import herbie from "../images/herbie.jpg";
import stewie from "../images/stewie.jpg"
import specials from "../images/specials.jpg"
import benking from "../images/benking.jpg"
import jackson5 from "../images/jackson5.jpg"
import algreen from "../images/algreen.jpg"
import ninasimone from "../images/ninasimone.jpg"

import blind from "../assets/blind.mp3"
import vitamin from "../assets/vitamin.mp3"
import fatby from "../assets/fatby.mp3"
import humpy from "../assets/humpy.mp3"
import jessica from "../assets/jessica.mp3"
import mastblast from "../assets/mastblast.mp3"
import nautilus from "../assets/nautilus.mp3"
import ghost from "../assets/ghost.mp3"
import stand from "../assets/stand.mp3"
import iwant from "../assets/iwant.mp3"
import imglad from "../assets/imglad.mp3"
import funkier from "../assets/funkier.mp3"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cards, setCards] = useState([
    {
      id: 0, nome: "James Brown", titolo: "Blind Man Can See It", immagine: james, prezzo: 9.99, quantità: 0, audio: blind
    },
    {
      id: 1, nome: "Bob James", titolo: "Nautilus", immagine: bob, prezzo: 10.85, quantità: 0, audio: nautilus
    },
    {
      id: 2, nome: "The Fatback Band", titolo: "Keep On Steppin", immagine: band, prezzo: 8.59, quantità: 0, audio: fatby
    },
    {
      id: 3, nome: "Can", titolo: "Vitamin C", immagine: can, prezzo: 12.51, quantità: 0, audio: vitamin
    },
    {
      id: 4, nome: "Placebo", titolo: "Humpty Dumpty", immagine: placebo, prezzo: 7.33, quantità: 0, audio: humpy
    },
    {
      id: 5, nome: "Herbie Hancock", titolo: "Jessica", immagine: herbie, prezzo: 5.01, quantità: 0, audio: jessica
    },
    {
      id: 6, nome: "Stevie Wonder", titolo: "Master Blaster", immagine: stewie, prezzo: 9.99, quantità: 0, audio: mastblast
    },
    {
      id: 7, nome: "The Specials", titolo: "Ghost Town", immagine: specials, prezzo: 10.85, quantità: 0, audio: ghost
    },
    {
      id: 8, nome: "Ben E.King", titolo: "Stand by Me", immagine: benking, prezzo: 12.51, quantità: 0, audio: stand
    },
    {
      id: 9, nome: "The Jackson 5", titolo: "I Want You Back", immagine: jackson5, prezzo: 8.59, quantità: 0, audio: iwant
    },
    {
      id: 10, nome: "Al Green", titolo: "I'm Glad You're Mine", immagine: algreen, prezzo: 7.33, quantità: 0, audio: imglad
    },
    {
      id: 11, nome: "Nina Simone", titolo: "Funkier Than a Mosquito's Tweeter", immagine: ninasimone, prezzo: 5.01, quantità: 0, audio: funkier
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const aggiungi = (card) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const id = updatedCards.indexOf(card);

      if (updatedCards[id].quantità < 2) {
        updatedCards[id] = { ...card, quantità: card.quantità + 1 };
      } else {
        toast.error("Non puoi prendere più di 2 copie!", { toastId: "quantità-massima" });
      }

      return updatedCards;
    });
  };

  const rimuovi = (cardId) => {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === cardId && card.quantità > 0) {
          return { ...card, quantità: card.quantità - 1 };
        }
        return card;
      });
    });
  };

  const totale = () => {
    return cards
      .reduce((acc, card) => acc + card.prezzo * card.quantità, 0)
      .toFixed(2);
  };

  const quantitàTotale = () => {
    return cards.reduce((acc, card) => acc + card.quantità, 0);
  };

  const filteredCards = cards.filter((card) =>
    card.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dataConsegnaStimata = () => {
    const oggi = new Date();
    const dataConsegna = new Date(oggi);
    dataConsegna.setDate(oggi.getDate() + 10);
    return dataConsegna.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <CartContext.Provider
      value={{
        cards: filteredCards, aggiungi, rimuovi, totale, quantitàTotale, setSearchTerm, dataConsegnaStimata,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
