import React from "react";
import ThemeContext from "../context/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";

function HeaderButton() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <button className="toggle-theme" onClick={toggleTheme}>
      {theme === "light" ? <BsMoon size={24} /> : <BsSun size={24} />}
    </button>
  );
}

export default HeaderButton;
