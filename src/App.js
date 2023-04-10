import { useMemo, useState, useEffect } from "react";
import Card from "./components/Card/card.js";
import BasicModal from "./components/modal/modal";
import { search } from "./services/cards-service";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "./App.css";

function App() {
  let dataImg = search();
  const [card, setcard] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});
  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);
  const [winn, setwinn] = useState(0);
  const [error, seterror] = useState(0);
  const [isWinn, setIswinn] = useState(false);
  useMemo(async () => {
    if (card.length === 0) {
      await dataImg.then((data) => {
        console.log(data);
        setcard(data);
        return;
      });
    }
  }, [card.length, dataImg]);

  const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0;
    }
    if (secondCard.name === name && secondCard.number === number) {
      return 0;
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    } else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    console.log(firstCard, secondCard);
    console.log(name, number);
    return 1;
  };
  useEffect(() => {
    checkForMatch();
    // eslint-disable-next-line
  }, [secondCard]);
  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      console.log("match", match);
      match ? disableCards() : unflipCards();
    }
  };

  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    // aca exitoso
    setwinn(winn + 1);
    setIswinn(true);
    setTimeout(() => setIswinn(false), 2000);
    resetCards();
  };

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    // aca colocar error
    seterror(error + 1);
    resetCards();
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  };

  return (
    <>
      {" "}
      <div className="app">
        <div className="app-content">
          <BasicModal></BasicModal>{" "}
          <div style={{ width: "50%", color: "#fff", margin: "auto" }}>
            <h1>aciertos:{winn}</h1>
            <h1>errores:{error}</h1>
          </div>
          {card
            ? card.map((cardata) => (
                <>
                  <Card
                    name={cardata.name}
                    src={cardata.src}
                    number={cardata.key}
                    flipCard={flipCard}
                    unflippedCards={unflippedCards}
                    disabledCards={disabledCards}
                  ></Card>
                </>
              ))
            : null}
        </div>{" "}
        {isWinn ? (
          <Stack
            sx={{ width: "50%", position: "fixed", color: "#fff" }}
            spacing={2}
          >
            <Alert
              severity="success"
              sx={{ width: "50%", position: "fixed", color: "#fff" }}
            >
              En hora buena {localStorage.getItem("name")} has acertado
            </Alert>
          </Stack>
        ) : null}
      </div>
    </>
  );
}

export default App;
