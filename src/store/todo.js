import { makeAutoObservable } from "mobx";

class Todo {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(todo) {
    todo.completed = !todo.completed;
  }

  fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.todos.push(...json);
      });
  }
}

export default new Todo();
