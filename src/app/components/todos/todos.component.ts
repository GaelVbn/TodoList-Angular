import { Todo } from './../../models/todo.models';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todos',
  standalone: true, // Ajout si c'est un standalone component
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'], // Correction du pluriel
})
export class TodosComponent {
  @Input() searchTerm: string = ''; // Correction du type et suppression du Signal
  @Input() todos: Todo[] = [];

  @Output() deleteTodos = new EventEmitter<number>();

  deleteTodo(id: number) {
    this.deleteTodos.emit(id);
  }
}
