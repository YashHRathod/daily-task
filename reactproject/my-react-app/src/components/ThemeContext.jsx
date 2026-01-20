import { React, createContext } from "react";

export const ThemeContext = createContext();
export default function ThemeContext({ children }) {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));


  }

  return;
  <div>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>                                
  </div>;
}
