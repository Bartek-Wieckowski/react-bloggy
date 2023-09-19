import { createContext, useContext, useEffect, useState } from "react";

type Theme = {
  currentTheme: "light" | "dark";
  changeCurrentTheme: (newTheme: "light" | "dark") => void;
};
type ThemeChildren = {
  children: React.ReactNode;
};

const ThemeContext = createContext<Theme | undefined>(undefined);

function ThemeProvider({ children }: ThemeChildren): JSX.Element {
  const [theme, setTheme] = useState((localStorage.getItem("theme") as "light" | "dark") || "light");

  const changeCurrentTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.remove("bg-slate-800");
      document.body.classList.remove("text-white");
    } else {
      document.body.classList.add("dark");
      document.body.classList.add("bg-slate-800");
      document.body.classList.add("text-white");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme(): Theme {
  const context = useContext(ThemeContext);
  if (context === undefined) throw new Error("ThemeContext was used outside ThemeProvider");
  return context;
}

export { ThemeProvider, useTheme };
