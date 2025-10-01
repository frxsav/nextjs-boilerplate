'use client';

import { useState, useEffect } from 'react';
import {
  DarkMode,
  BurgerMenu,
  DesktopMenuLinks,
  MobileMenuLinks,
  Logo,
} from '..';

export default function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    setTheme(localTheme);
  });

  useEffect(() => {
    props.navToggle(theme);
    document.addEventListener('scroll', () => {
      setHasScrolled(window.scrollY > 0 ? true : false);
    });
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="mx-auto mt-8 rounded-3xl px-8 w-[80%] backdrop-blur-sm bg-secondary-light/20 dark:bg-secondary/30">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />
          {/* Desktop Menu */}
          <DesktopMenuLinks />
          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <DarkMode toggle={setTheme}></DarkMode>
            {/* Mobile menu button */}
            <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <MobileMenuLinks setIsMenuOpen={setIsMenuOpen} />}
      </div>
    </nav>
  );
}
