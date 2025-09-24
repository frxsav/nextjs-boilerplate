'use-client';
import { useState, useEffect } from 'react';

export default function DarkMode(props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="h-9 w-9">🌙</button>; // placeholder
  }

  return (
    <button
      className="h-9 w-9 text-2xl p-3"
      onClick={() => {
        if (localStorage.getItem('theme') === 'dark') {
          localStorage.setItem('theme', 'light');
        } else {
          localStorage.setItem('theme', 'dark');
        }
        props.toggle(localStorage.getItem('theme'));
      }}>
      {localStorage.getItem('theme') === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
