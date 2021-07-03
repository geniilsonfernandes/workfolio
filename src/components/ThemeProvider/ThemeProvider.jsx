import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState("dark");

  


  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
        {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext};
export default ThemeProvider;
