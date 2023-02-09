import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis }) {

  const sushiCards = sushis.map((card) => (
    <Sushi
    key={card.id}
    sushi={card}
    />
  ))
  return (
    <div className="belt">
      {sushiCards}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
