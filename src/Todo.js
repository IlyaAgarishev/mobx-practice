import { observer } from "mobx-react-lite";
import { useState } from "react";
import todo from "./store/todo";

const Todo = observer(() => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            todo.addTodo({
              id: todo.todos.length + 1,
              title: value,
              completed: false,
            });
            setValue("");
          }}
        >
          Add Todo
        </button>
      </div>

      <ul>
        {todo.todos.map((el) => {
          const { id, title, completed } = el;
          return (
            <li
              onClick={() => {
                todo.completeTodo(el);
              }}
              key={id}
              style={{ textDecoration: completed && "line-through" }}
            >
              {title}
              <button
                onClick={() => {
                  todo.removeTodo(el.id);
                }}
              >
                remove todo
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Todo;
