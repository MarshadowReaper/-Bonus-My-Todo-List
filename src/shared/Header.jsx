import { useAuth } from "../context/AuthContext.jsx";

function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="site-header">
      <h1>Todo List</h1>

      {isAuthenticated && <button onClick={logout}>Log Out</button>}
    </header>
  );
}

export default Header;
