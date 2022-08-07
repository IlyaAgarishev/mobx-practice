import { makeAutoObservable } from "mobx";

class Todo {
  todos = [{ id: 1, title: "First todo...", completed: false }];

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
}

export default new Todo();
