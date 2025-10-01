'use client';
import Head from 'next/head';
import { Hero, Header, Footer } from '@/ui';
import { useState, useEffect } from 'react';

export default function Home() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    setTheme(localTheme);
  });
  return (
    <div data-theme={theme}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page description" />
        <meta property="og:title" content="og title" />
        <meta property="og:description" content="og description" />
        <meta property="og:image" content="og-image.jpg" />
      </Head>
      <header className="fixed top-0 left-0 w-full z-50">
        <Header navToggle={setTheme}></Header>
      </header>
      <main>
        <Hero></Hero>
      </main>
      <footer className="bottom-0 w-full">
        <Footer />
      </footer>
    </div>
  );
}
