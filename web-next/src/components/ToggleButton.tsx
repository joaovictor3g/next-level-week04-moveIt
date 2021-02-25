import React, {useEffect, useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export function ToggleButton(){
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={60}
    />
  );
};