import React from "react";
import Navigation from "./Navigation";
import FooterNav from "./Footer";
import { Outlet } from "react-router-dom";

function SharredLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <FooterNav />
    </>
  );
}

export default SharredLayout;
