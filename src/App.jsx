import Header from "./shared/Header.jsx";
import Logon from "./features/Logon.jsx";
import TodosPage from "./features/Todos/TodoList/TodosPage.jsx";

import { useAuth } from "../context/AuthContext.jsx";

// This is holding the authentication data
function App() {
  const { token } = useAuth();

  return (
    <div>
      <Header />

      {token ? <TodosPage /> : <Logon />}
    </div>
  );
}

export default App;
