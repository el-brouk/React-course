import type { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <header>header</header>
      {children}
      <footer>footer</footer>
    </main>
  );
};
