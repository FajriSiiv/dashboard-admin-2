import { userData } from "@/data/randomCardUser";
import React from "react";
import { userCard } from "../../../types";
import CardRecentPayment from "../cards/CardRecentPayment";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const HistoryPayment = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg pb-2">Recent Payment</CardTitle>
        <CardContent className="p-0 flex flex-col gap-y-5">
          {userData.map((card: userCard) => (
            <CardRecentPayment
              name={card.name}
              email={card.name.toLowerCase().replace(/\s/g, "") + `@gmail.com`}
              money={card.money}
            />
          ))}
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default HistoryPayment;
