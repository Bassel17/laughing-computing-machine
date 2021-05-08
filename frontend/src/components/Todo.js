export default function Todo(props) {
  return (
    <div className="Todo">
      <input type="checkbox" value={props.isDone} />
      <p>{props.text}</p>
    </div>
  );
}
