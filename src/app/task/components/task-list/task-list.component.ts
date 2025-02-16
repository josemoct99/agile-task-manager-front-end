import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  @Input() public tasks: Task[] = [];

  public deletedTask?: string;

  deleteLastTask(): void {
    this.deletedTask = this.tasks?.pop()?.title || '';
  }

}
