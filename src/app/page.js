'use client';
import { useState } from 'react';
import { DarkMode } from '../ui';

export default function Home() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  return (
    <div data-theme={theme} className="dark:bg-indigo-950 bg-indigo-200">
      <DarkMode toggle={setTheme} />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="bg-white dark:bg-black rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
              asfdafdaadfd
            </span>
          </div>
          <h3 className="text-gray-900 dark:text-green-100 mt-5 text-green font-medium tracking-tight ">
            Writes upside-down
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>
      </div>
    </div>
  );
}
