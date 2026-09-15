import { useAuth } from "../context/AuthContext.jsx";
import Logoff from "../features/Logoff.jsx";
import Navigation from "./Navigation.jsx";

function Header({ darkMode, onToggleDarkMode }) {
  const { isAuthenticated } = useAuth();

  return (
    <header className="site-header">
      <h1>Todo List</h1>
      <button onClick={onToggleDarkMode}>
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      <Navigation />
      {isAuthenticated && <Logoff />}
    </header>
  );
}

export default Header;
