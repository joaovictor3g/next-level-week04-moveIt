import Cookies from "js-cookie";
import React, {useContext, useEffect, useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "../contexts/ThemeContext";


import styles from '../styles/components/ToggleButton.module.css';

export function ToggleButton(){
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if(isDarkMode) {
      setTheme('dark');
      Cookies.set('currentTheme', 'dark');

    }
    else {
      setTheme('light');
      Cookies.set('currentTheme', 'light');
    }
  }, [isDarkMode, theme]);

  return (
    <header className={styles.darkModeToggle}>
      <DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={60}
        
      />
    </header>
  );
};