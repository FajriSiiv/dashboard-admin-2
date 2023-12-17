import React from "react";
import { CardVeneu } from "../cards/CardVeneu";
import OverBarChart from "../charts/OverBarChart";
import HistoryPayment from "../history/HistoryPayment";

const Overview = () => {
  return (
    <div className="w-full py-5">
      <div className="grid grid-cols-4 w-full gap-4">
        <CardVeneu />
        <CardVeneu />
        <CardVeneu />
        <CardVeneu />
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
