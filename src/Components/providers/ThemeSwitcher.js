"use client";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button className="text-2xl rounded px-5 border" onClick={toggleTheme}>
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeSwitcher;
