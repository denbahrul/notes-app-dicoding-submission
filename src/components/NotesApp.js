import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navigation from "./Navigation";
import NoteDetailPage from "../pages/NoteDetailPage";
import AddPage from "../pages/AddPage";
import ArchivePage from "../pages/ArchivePage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { getUserLogged, putAccessToken } from "../utils/network-data";
import LoginInput from "./LoginInput";
import ThemeContext from "../context/ThemeContext";
import HeaderButton from "./HeaderButton";

function NotesApp() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "dark");
  const [initializing, setInitializing] = React.useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const ThemeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  React.useEffect(() => {
    async function fetchUserData() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }

    fetchUserData();

    return () => {
      setAuthedUser(null);
    };
  }, []);

  async function onLoginSucces({ accessToken }) {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  function onLogout() {
    setAuthedUser(null);
    putAccessToken("");
  }

  if (initializing) {
    return (
      <div className="app-container">
        <p>
          <strong>Loading Page</strong>
        </p>
      </div>
    );
  }

  if (authedUser === null) {
    return (
      <ThemeContext.Provider value={ThemeContextValue}>
        <div className="app-container">
          <header>
            <h1>
              <Link to="/">NotesApp</Link>
            </h1>
            <HeaderButton />
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<LoginPage loginSuccess={onLoginSucces} />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      <div className="app-container">
        <header>
          <h1>
            <Link to="/" className="link">NotesApp</Link>
          </h1>
          <Navigation logout={onLogout} name={authedUser.name} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/notes/:id" element={<NoteDetailPage />} />
            <Route path="/notes/new" element={<AddPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default NotesApp;
