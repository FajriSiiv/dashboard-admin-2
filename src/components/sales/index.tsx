import React from "react";
import { cardVenue } from "../../../types";
import { CardVeneu } from "../cards/CardVeneu";
import { dataCardVen } from "../overview";

const Sales = () => {
  return (
    <div className="grid grid-cols-4 w-full gap-4">
      {dataCardVen.map((cardVen: cardVenue, index: any) => (
        <CardVeneu
          key={index}
          name={cardVen.name}
          symbol={cardVen.symbol}
          stats={cardVen.stats}
          percent={cardVen.percent}
        />
      ))}
    </div>
  );
};

export default Sales;
