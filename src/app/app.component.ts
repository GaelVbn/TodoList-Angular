import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './components/todos/todos.component';
import { TodoService } from './services/todo.service';
import { MatInput, MatFormField, MatLabel } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    TodosComponent,
    MatButtonModule,
    MatInput,
    MatFormField,
    MatLabel,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todoapp';
  todoSearch: string = '';

  constructor(private todoService: TodoService) {}

  get todos() {
    return this.todoService.getTodos();
  }

  addTodo() {
    this.todoService.addTodo(this.todoSearch);
    this.todoSearch = '';
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }
}
