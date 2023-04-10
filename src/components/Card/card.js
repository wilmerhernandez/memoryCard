import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import backimg from "../../img/interrogacion.png";
const Card = ({
  name,
  number,
  src,
  flipCard,
  unflippedCards,
  disabledCards,
}) => {
  const [flip, setflip] = useState(false);
  const [hasEvent, setHasEvent] = useState(true);

  const handleClick = (e) => {
    const value = flipCard(name, number);
    if (value !== 0) {
      setflip(!flip);
    }
  };
  useEffect(() => {
    if (unflippedCards.includes(number)) {
      setTimeout(() => setflip(false), 700);
    }
  }, [unflippedCards, number]);

  useEffect(() => {
    if (disabledCards.includes(number)) {
      setHasEvent(false);
    }
  }, [disabledCards, number]);
  return (
    <div className="card" aria-describedby="Card of games">
      <ReactCardFlip isFlipped={flip}>
        <img
          className="card-img"
          src={backimg}
          alt="carta sin voltear"
          onClick={handleClick}
        ></img>
        <img
          className="card-img"
          alt="carta volteada"
          src={src}
          onClick={hasEvent ? handleClick : null}
        ></img>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
