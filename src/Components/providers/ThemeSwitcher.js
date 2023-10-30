"use client";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button className="text-2xl rounded-full" onClick={toggleTheme}>
      {theme === "light" ? "dark" : "light"}
    </button>
  );
};

export default ThemeSwitcher;
