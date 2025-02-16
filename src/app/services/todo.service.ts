import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private index = 1;
  private storageKey = 'todos';

  constructor() {
    this.loadTodos();
  }

  private loadTodos() {
    const todos = localStorage.getItem(this.storageKey);

    if (todos) {
      this.todos = JSON.parse(todos);
      this.index = this.todos[this.todos.length - 1].id + 1;
    }
  }

  private saveTodos() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string) {
    if (title.trim() === '') return;

    this.todos = [...this.todos, { id: this.index++, title, completed: false }];

    this.saveTodos();
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    this.saveTodos();
  }
}
