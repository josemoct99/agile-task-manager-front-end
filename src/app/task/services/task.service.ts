import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  public fetchedTasks: Task[] = [ 
    {
      title: "Tarea 1",
      lineDescription: "Hacer la tarea 1"
    },
    {
      title: "Tarea 2",
      lineDescription: "Hacer la tarea 2"
    },
    {
      title: "Tarea 3",
      lineDescription: "Hacer la tarea 3"
    },
  ];

  addNewTask(task: Task): void {
    debugger;
    this.fetchedTasks.push(task);
  }
}
