import { FC, lazy, Suspense, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Router: FC = () => {
  const Top = lazy(() => import('~/components/pages/Top'))
  const Recruit = lazy(() => import('~/components/pages/Recruit'))

  const lazyImport = useCallback(
    (Component: React.LazyExoticComponent<FC>) => (
      <Suspense fallback={<>...</>}>
        <Component />
      </Suspense>
    ),
    []
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={lazyImport(Top)} />
        <Route path="recruit">
          <Route path=":recruitId" element={lazyImport(Recruit)} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
