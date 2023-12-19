import React from "react";
import { cardVenue } from "../../../types";
import { CardVeneu } from "../cards/CardVeneu";
import OverBarChart from "../charts/OverBarChart";
import HistoryPayment from "../history/HistoryPayment";

export const dataCardVen = [
  {
    name: "your money",
    stats: 23045,
    percent: 12,
    symbol: "$",
  },
  {
    name: "views",
    stats: 615050,
    percent: 33,
    symbol: null,
  },
  {
    name: "top item",
    stats: 21,
    percent: 5,
    symbol: null,
  },
  {
    name: "sales",
    stats: 5414,
    percent: 10,
    symbol: "$",
  },
  {
    name: "sales total",
    stats: 588234,
    percent: 2,
    symbol: "$",
  },
  {
    name: "customer",
    stats: 2399,
    percent: 4,
    symbol: null,
  },
  {
    name: "your product",
    stats: 203,
    percent: 1,
    symbol: null,
  },
  {
    name: "history",
    stats: 4953,
    percent: 5,
    symbol: null,
  },
];

const Overview = () => {
  return (
    <div className="w-full py-5">
      <div className="grid grid-cols-4 w-full gap-4">
        {dataCardVen.slice(0, 4).map((cardVen: cardVenue, index: any) => (
          <CardVeneu
            key={index}
            name={cardVen.name}
            symbol={cardVen.symbol}
            stats={cardVen.stats}
            percent={cardVen.percent}
          />
        ))}
      </div>
      <div className="pt-5 grid grid-cols-12 gap-2">
        <div className="col-span-7">
          <OverBarChart />
        </div>
        <div className="col-span-5">
          <HistoryPayment />
        </div>
      </div>
    </div>
  );
};

export default Overview;
