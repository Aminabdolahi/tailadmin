import React from "react";
import Sidebar from "./SideBar";
import menuData from "../links/menu.json";

const Index: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar menuData = {menuData} />  {/* Make sure to pass menuData instead of menuData.menu */}
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p>Welcome to my app!</p>
      </div>
    </div>
  );
};

export default Index;