"use client";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button className="text-2xl rounded px-5 border bg-white text-[#0074e1] hover:bg-[#0074e1]hover:text-white" onClick={toggleTheme}>
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeSwitcher;
