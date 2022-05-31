import React, { lazy, Suspense, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Router: React.FC = () => {
  const Top = lazy(() => import('~/components/pages/Top'));
  const Recruit = lazy(() => import('~/components/pages/Recruit'));

  const suspensise = useCallback(
    (Component: React.LazyExoticComponent<React.FC<{}>>) => (
      <Suspense fallback={<>...</>}>
        <Component />
      </Suspense>
    ),
    []
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={suspensise(Top)} />
        <Route path="recruit" element={suspensise(Recruit)} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
