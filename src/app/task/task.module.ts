import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { TaskComponent } from "./components/task/task.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { TaskPageComponent } from "./pages/task-page.component";
import { AddTaskComponent } from './components/add-task/add-task.component';



@NgModule({
    declarations: [
        TaskComponent,
        TaskListComponent,
        TaskPageComponent,
        AddTaskComponent
    ],
    exports: [
        TaskPageComponent,
        AddTaskComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class TaskModule {

}