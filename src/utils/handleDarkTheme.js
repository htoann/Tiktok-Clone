export const handleDarkTheme = () => {
  let element = document.body;
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    localStorage.removeItem("theme", "dark");
    element.classList.remove("dark");
  } else {
    localStorage.setItem("theme", "dark");
    element.classList.add("dark");
  }
};
