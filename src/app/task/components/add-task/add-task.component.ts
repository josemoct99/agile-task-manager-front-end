import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output()
  public onTaskAdded: EventEmitter<Task> = new EventEmitter();

  public task: Task = {
    title: '',
    lineDescription: 'defecto'
  }

  addTask():void{
    debugger;
    this.onTaskAdded.emit(this.task);
  }

}
