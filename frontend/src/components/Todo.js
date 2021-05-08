import { useMutation, useQueryClient } from "react-query";

import { updateTodo, deleteTodo } from "../apis";

export default function Todo(props) {
  const queryClient = useQueryClient();

  const mutation = useMutation(updateTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("todos");
    },
  });

  const deletion = useMutation(deleteTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("todos");
    },
  });

  return (
    <div className="Todo">
      <input
        type="checkbox"
        defaultChecked={props.isDone}
        onChange={() => {
          mutation.mutate({
            isDone: !props.isDone,
            id: props.id,
          });
        }}
      />
      <p style={{ textDecoration: props.isDone ? "line-through" : "none" }}>
        {props.text}
      </p>
      <button
        style={{
          borderColor: "red",
          backgroundColor: "red",
          color: "white",
          margin: "0 1em",
        }}
        onClick={() => {
          deletion.mutate(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
