import React from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const NavTabs = ({ children }: any) => {
  return (
    <Tabs defaultValue="1" className="w-full">
      <TabsList className="grid grid-cols-3 gap-1 mb-3 w-fit">
        <TabsTrigger value="1">Overview</TabsTrigger>
        <TabsTrigger value="2">Product</TabsTrigger>
        <TabsTrigger value="3">Sales</TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};

export default NavTabs;
