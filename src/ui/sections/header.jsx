import { Navbar } from '../components';
import { useState, useEffect } from 'react';

export default function Header(props) {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  useEffect(() => {
    props.navToggle(theme);
  });
  return (
    <header>
      <Navbar navToggle={setTheme} />
    </header>
  );
}
