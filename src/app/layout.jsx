'use client';

import './globals.css';
import { Header, Footer } from '@/ui';
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  return (
    <html lang="en" suppressHydrationWarning data-theme={theme}>
      <header className="fixed top-0 left-0 w-full z-50">
        <Header navToggle={setTheme}></Header>
      </header>
      <body>
        <main className="dark:bg-primary bg-primary-light pt-32">
          {children}
        </main>
        <footer className="bottom-0 w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
