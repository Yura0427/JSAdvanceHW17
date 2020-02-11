import { Component, OnInit } from '@angular/core';
import { ITask } from './task.interface';
import { Task } from './task.model';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  name: string;
  process: boolean;
  arrTask: Array<ITask> = [];
  valueStatus: boolean;
  index: number;
  editName: string;
  editStatus: boolean;
  taskID: number;
  
  constructor() { }

  ngOnInit() {
  }
  addTask() {
    if (!this.name) {
      this.valueStatus = true;
    }
    else {
      const newT: ITask = new Task(1, this.name, false);
      if (this.arrTask.length > 0) {
        newT.id = this.arrTask.slice(-1)[0].id + 1;
      }
      this.arrTask.push(newT);
      this.name = '';
      this.valueStatus = false;
    }
  }
  chec(event, i): void {
    event.target.checked ? this.arrTask[i].process = true : this.arrTask[i].process = false;
  }
  deleteTask(i) {
    this.arrTask.splice(i, 1);
    for (let i = 0; i < this.arrTask.length; i++) this.arrTask[i].id = i + 1;
  }
  editTask(i) {
    this.editStatus = true;
    this.editName = this.arrTask[i].name;
    this.taskID = i;
  }
  saveEdit() {
    this.editStatus = false;
    this.arrTask[this.taskID].name = this.editName;
  }
}
