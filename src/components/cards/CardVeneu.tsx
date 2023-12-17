import { DollarSign } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";

export const CardVeneu = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex justify-between items-center">
          <Label>Your Money</Label>
          <DollarSign size={16} />
        </CardTitle>
        <CardContent className="p-0 pt-2 flex flex-col gap-y-2">
          <Label className="text-3xl font-semibold">$10,312</Label>
          <Label className="text-emerald-500">+12% from last month</Label>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
