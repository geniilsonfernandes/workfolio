import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
};
export { useTheme };
