import React from "react";
import CardRecentPayment from "../cards/CardRecentPayment";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const HistoryPayment = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg pb-2">Recent Payment</CardTitle>
        <CardContent className="p-0 flex flex-col gap-y-5">
          <CardRecentPayment />
          <CardRecentPayment />
          <CardRecentPayment />
          <CardRecentPayment />
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default HistoryPayment;
