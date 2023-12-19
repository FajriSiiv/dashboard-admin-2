import React from "react";
import { userCard } from "../../../types";

const CardRecentPayment = ({ name, email, money }: userCard) => {
  return (
    <div className="flex gap-x-2 justify-between items-center">
      <div className="flex flex-col gap-1">
        <span className="font-semibold">{name}</span>
        <span className="text-sm">{email}</span>
      </div>
      <span className="font-semibold">+${money.toLocaleString("en-US")}</span>
    </div>
  );
};

export default CardRecentPayment;
