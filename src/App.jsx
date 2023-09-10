import { Route, Routes } from "react-router-dom";
import Login from "./page/LoginPage";
import SignUp from "./page/SignUpPage";
import TodoList from "./page/TodoList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/todoList" element={<TodoList />} />
    </Routes>
  );
}

export default App;
