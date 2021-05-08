import { useState } from "react";

export default function AddTodo() {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
          console.log(event.target.value)
        }}
        type="text"
      />
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Add
      </button>
    </div>
  );
}
