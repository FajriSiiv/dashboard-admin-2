import React from "react";

const CardRecentPayment = () => {
  return (
    <div className="flex gap-x-2 justify-between items-center">
      <div className="flex flex-col gap-1">
        <span className="font-semibold">John Doe</span>
        <span className="text-sm">johndoe@gmail.com</span>
      </div>
      <span className="font-semibold">+$1000</span>
    </div>
  );
};

export default CardRecentPayment;
