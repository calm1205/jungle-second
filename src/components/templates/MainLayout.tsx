import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type MainLayout = {
  children: ReactNode;
};

/**
 * ヘッダー & フッター
 */
export const MainLayout: React.FC<MainLayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
