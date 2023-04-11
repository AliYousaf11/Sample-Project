import React from "react";
import { Navbar } from "../views/Navbar";
import { Footer } from "../views/Footer";
import { AppContent } from "../views/AppContent";
export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <AppContent />
      <Footer />
    </>
  );
};
