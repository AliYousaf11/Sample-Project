import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";

//......
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>loading.....</p>}>
        <Routes>
          <Route path="*" element={<AppLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
