import React from "react";
import Sidebar from "../../components/shared/Sidebar";
import MobileNav from "@/components/shared/MobileNav";
import { Toaster } from "@/components/ui/toaster";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
        {/* Sidebar */}
        <Sidebar/>
        {/* MobileView */}
        <MobileNav homepage={false} />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <Toaster />
    </main>
  );
};

export default layout;
