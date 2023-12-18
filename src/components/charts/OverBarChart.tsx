"use client";
import { dataBar } from "@/data/randomBar";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardTitle } from "../ui/card";

const OverBarChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const CustomBar = (props: any) => {
    const { x, y, width, height, fill } = props;

    const radius = 5;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={fill}
          ry={radius}
          rx={radius}
        />
      </g>
    );
  };

  return (
    <Card className="p-5">
      <CardTitle className="pb-2">Overview</CardTitle>
      <CardContent className="h-[300px] p-0 ">
        <ResponsiveContainer width="100%" height="100%" className="-ml-5">
          <BarChart data={dataBar} barSize={45}>
            <Bar
              dataKey="Money"
              className="fill-secondary-foreground dark:fill-primary"
              shape={<CustomBar />}
            />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis domain={[0, 1000]} axisLine={false} tickLine={false} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default OverBarChart;
