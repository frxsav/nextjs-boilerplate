'use client';

import './globals.css';
import { Header, Footer } from '@/ui';
import { useState } from 'react';

export default function App({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  return (
    <html lang="en" suppressHydrationWarning data-theme={theme}>
      <Header navToggle={setTheme}></Header>
      <main>{children}</main>
      <Footer />
    </html>
  );
}
