import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ThemeContextData {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
};

interface ThemeProviderProps {
    children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState('dark');
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}> 
            {children}
        </ThemeContext.Provider>
    );
}