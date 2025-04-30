import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Leer desde localStorage al iniciar
    const saved = localStorage.getItem('darkMode');
    return saved === 'true'; // convierte a boolean
  });

  useEffect(() => {
    // Aplicar la clase al body
    document.body.className = darkMode ? 'dark' : '';
    // Guardar en localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
