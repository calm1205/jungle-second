import { FC, lazy, Suspense, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Router: FC = () => {
  const Top = lazy(() => import('~/components/pages/Top'));
  const Recruit = lazy(() => import('~/components/pages/Recruit'));

  const suspensise = useCallback(
    (Component: React.LazyExoticComponent<FC>) => (
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
        <Route path="recruit">
          <Route path=":recruitId" element={suspensise(Recruit)} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
