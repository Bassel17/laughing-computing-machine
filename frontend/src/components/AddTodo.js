import { useState } from "react";

import { useMutation, useQueryClient } from "react-query";

import { addTodo } from "../apis";

export default function AddTodo() {
  const [todo, setTodo] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      setTodo("")
      queryClient.invalidateQueries("todos");
    },
  });

  return (
    <div>
      <input
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          mutation.mutate(todo);
        }}
      >
        Add
      </button>
    </div>
  );
}
