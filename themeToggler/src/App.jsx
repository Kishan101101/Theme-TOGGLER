import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import Theme_btn from "./components/Theme_btn";
import Card from "./components/Card";
function App() {
  const [themeMode, setThemeMode] = useState("light");
  const LightTheme = () => {
    setThemeMode("light");
  };
  const DarkTheme = () => {
    setThemeMode("dark");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, LightTheme, DarkTheme }}>
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        <Theme_btn />
      </div>
      <Card />
    </ThemeProvider>
  );
}

export default App;
