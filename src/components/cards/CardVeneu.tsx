import { DollarSign } from "lucide-react";
import React from "react";
import { cardVenue } from "../../../types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";

export const CardVeneu = ({ name, stats, symbol, percent }: cardVenue) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex justify-between items-center">
          <Label className="capitalize">{name}</Label>
          <DollarSign size={16} />
        </CardTitle>
        <CardContent className="p-0 pt-2 flex flex-col gap-y-2">
          <Label className="text-3xl font-semibold">
            {symbol}
            {stats.toLocaleString("en-US")}
          </Label>
          <Label className="text-emerald-500">
            +{percent}% from last month
          </Label>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
