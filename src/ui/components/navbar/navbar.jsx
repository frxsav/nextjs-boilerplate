'use client';

import { useState, useEffect } from 'react';
import {
  DarkMode,
  Logo,
  DesktopMenuLinks,
  MobileMenuLinks,
  BurgerMenu,
} from '..';

export default function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  useEffect(() => {
    props.navToggle(theme);
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-secondary-light dark:bg-secondary border-b border-secondary dark:border-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
