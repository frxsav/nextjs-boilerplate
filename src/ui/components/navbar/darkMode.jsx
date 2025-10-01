'use-client';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function DarkMode(props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="h-9 w-9">
        <FaMoon />
      </button>
    );
  }

  return (
    <button
      className="h-9 w-9 text-2xl cursor-pointer"
      onClick={() => {
        if (localStorage.getItem('theme') === 'dark') {
          localStorage.setItem('theme', 'light');
        } else {
          localStorage.setItem('theme', 'dark');
        }
        props.toggle(localStorage.getItem('theme'));
      }}>
      {localStorage.getItem('theme') === 'dark' ? (
        <FaSun className="text-ctext-light" />
      ) : (
        <FaMoon className="text-ctext" />
      )}
    </button>
  );
}
