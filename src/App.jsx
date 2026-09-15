import styles from "./App.module.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import TodosPage from "./pages/TodosPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import RequireAuth from "./components/RequireAuth";
import Header from "./shared/Header";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((previous) => !previous);
  };

  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <div className={styles.app}>
        <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/todos"
            element={
              <RequireAuth>
                <TodosPage />
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
