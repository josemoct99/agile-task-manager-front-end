import { Component } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-page',
  standalone: false,
  templateUrl: './task-page.component.html'
})

export class TaskPageComponent {

  constructor(private taskService: TaskService) {
    this.fetchedTasks = taskService.fetchedTasks;
  }

  public fetchedTasks: Task[];
  

  addTask(task: Task): void {
    this.taskService.addNewTask({ ...task });
  }
}