import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>
      <AddTodo />
      <Todo text="Feed my dog" isDone={false} />
    </div>
  );
}

export default App;
