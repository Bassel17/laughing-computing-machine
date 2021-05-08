import "./App.css";

import { useQuery } from "react-query";

import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

import { getTodos } from "./apis";

function App() {
  const { isLoading, isError, data, error } = useQuery("todos", getTodos);

  if (isLoading)
    return (
      <div className="App">
        <h1>isLoading...</h1>
      </div>
    );

  if (isError)
    return (
      <div className="App">
        <h1>{error}</h1>
      </div>
    );

  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>
      <AddTodo />
      {data.map((todo) => (
        <Todo key={todo.id} text={todo.text} isDone={todo.is_done} />
      ))}
    </div>
  );
}

export default App;
