import DashboardDrawer from "@/components/dashboard/dashboardDrawer/dashboardDrawer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <DashboardDrawer>{children}</DashboardDrawer>
    </>
  );
};

export default layout;
