// Theme.jsx

export const applyTheme = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  
};

export const setTheme = (theme) => {
  // console.log(theme, window.matchMedia("(prefers-color-scheme: dark)").matches)
  theme === 'system' ? localStorage.removeItem('theme') : localStorage.theme = theme;
};

