function TodoItem({ todo, deleteTodo }) {
  return (
    <li>
      <span>{todo.content}</span>
      <button>Valider</button>
      <button>Modifier</button>
      <button onClick={() => deleteTodo(todo.id)}>Supprimer</button>
    </li>
  );
}

export default TodoItem;
