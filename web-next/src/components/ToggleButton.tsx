import React, {useContext, useEffect, useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "../contexts/ThemeContext";

export function ToggleButton(){
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if(isDarkMode)
      setTheme('dark');
    else setTheme('light')
  }, [isDarkMode]);

  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={60}
  
    />
  );
};