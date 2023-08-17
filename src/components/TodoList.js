import TodoItem from "./TotoItem";

function TodoList({ todoList, deleteTodo }) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          deleteTodo={() => deleteTodo(todo.id)}
          todo={todo}
        />
      ))}
    </ul>
  ) : (
    <p>Aucune todo pour le moment</p>
  );
}

export default TodoList;
