import { Navbar } from '../components';
import { useState, useEffect } from 'react';

export default function Header(props) {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    setTheme(localTheme);
  });
  useEffect(() => {
    props.navToggle(theme);
  });
  return <Navbar navToggle={setTheme} />;
}
