import React, { lazy, Suspense, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router: React.FC = () => {
  const Top = lazy(() => import("~/components/pages/Top"));

  const suspensise = useCallback(
    (Component: React.LazyExoticComponent<React.FC<{}>>) => (
      <Suspense fallback={<>...</>}>
        <Component />
      </Suspense>
    ),
    []
  );

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={suspensise(Top)} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
