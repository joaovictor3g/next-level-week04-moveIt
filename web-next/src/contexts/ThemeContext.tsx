import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import Cookie from 'js-cookie';

interface ThemeContextData {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
};

interface ThemeProviderProps {
    children: ReactNode;
    currentTheme: string;

};

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children, ...rest }: ThemeProviderProps) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        Cookie.set('currentTheme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}> 
            {children}
        </ThemeContext.Provider>
    );
}